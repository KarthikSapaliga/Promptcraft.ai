import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Hash, Loader2 } from "lucide-react"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm";

import { generateTitles } from "@/lib/ai-controller"

const categories = [
  "General",
  "Technology",
  "Business",
  "Health",
  "Lifestyle",
  "Education",
  "Travel",
  "Food",
]

export default function TitleGenerator() {
  const [keyword, setKeyword] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("General")
  const [generatedTitles, setGeneratedTitles] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerate = async () => {
    if (!keyword) return;
    setIsLoading(true);

    try {
      const titles = await generateTitles(keyword, selectedCategory);
      setGeneratedTitles(titles)
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 min-h-[80vh]">
      <Card className="w-full">
        <CardContent className="space-y-6 py-6">
          <h2 className="text-lg font-semibold">AI Title Generator</h2>

          <Input
            placeholder="The future of artificial intelligence is..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className="text-sm"
              >
                {cat}
              </Button>
            ))}
          </div>

          <Button
            className="w-full bg-primary text-white"
            onClick={handleGenerate}
            disabled={!keyword || isLoading}
          >
            {isLoading && <Loader2 className="animate-spin w-4 h-4 mr-2" />}
            Generate title
          </Button>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardContent className="py-6 space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            Generated titles
          </h2>

          {isLoading ? (
            <div className="flex items-center justify-center min-h-40">
              <Loader2 className="animate-spin w-6 h-6 text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Generating titles...</span>
            </div>
          ) : generatedTitles.length === 0 ? (
            <div className="text-center text-muted-foreground flex flex-col items-center justify-center h-60 gap-2">
              <Hash className="w-8 h-8 opacity-30" />
              <p>Enter a topic and click "Generate title" to get started</p>
            </div>
          ) : (
            <div className="disable-tailwind">
              <Markdown remarkPlugins={[remarkGfm]}>{generatedTitles}</Markdown>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
