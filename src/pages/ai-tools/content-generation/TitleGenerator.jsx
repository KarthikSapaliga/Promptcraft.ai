import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Hash } from "lucide-react"

import { dummyTitles } from "@/lib/dummyData/dummy-titles"

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

  const handleGenerate = () => {
    if (!keyword) return;
    setGeneratedTitles(dummyTitles);
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
          >
            Generate title
          </Button>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardContent className="py-6 space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            Generated titles
          </h2>

          {generatedTitles.length === 0 ? (
            <div className="text-center text-muted-foreground flex flex-col items-center justify-center h-60 gap-2">
              <Hash className="w-8 h-8 opacity-30" />
              <p>Enter a topic and click "Generate title" to get started</p>
            </div>
          ) : (
            <ul className="space-y-2 list-disc list-inside">
              {generatedTitles.map((title, idx) => (
                <li key={idx} className="text-sm">{title}</li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
