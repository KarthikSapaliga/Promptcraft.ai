import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ImageIcon, Loader2 } from "lucide-react"

import { generateImage } from "@/lib/ai-controller"

const styles = [
  "Realistic",
  "Ghibli style",
  "Anime style",
  "Cartoon style",
  "Fantasy style",
  "Realistic style",
  "3D style",
  "Portrait style"
]

export default function ImageGenerator() {
  const [description, setDescription] = useState("")
  const [selectedStyle, setSelectedStyle] = useState("Realistic")
  const [generatedImage, setGeneratedImage] = useState("")
	const [isLoading, setIsLoading] = useState(false)

  const handleGenerate = async () => {
    if (!description) return;

    setIsLoading(true);

    try {
      const image = await generateImage(description, selectedStyle);
      setGeneratedImage(image)
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 min-h-[80vh]">
      <Card>
        <CardContent className="space-y-5 py-6">
          <h2 className="text-lg font-semibold">AI Image Generator</h2>

          <div className="space-y-2">
            <Label htmlFor="desc">Describe Your Image</Label>
            <Textarea
              id="desc"
              placeholder="Describe what you want to see in the image..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={6}
            />
          </div>

          <div className="space-y-2">
            <Label>Style</Label>
            <div className="flex flex-wrap gap-2">
              {styles.map((style) => (
                <Button
                  key={style}
                  variant={selectedStyle === style ? "default" : "outline"}
                  onClick={() => setSelectedStyle(style)}
                  className="text-sm"
                >
                  {style}
                </Button>
              ))}
            </div>
          </div>

          <Button
            className="w-full bg-primary text-primary-foreground"
            onClick={handleGenerate}
            disabled={!description || isLoading}
          >
            {isLoading && <Loader2 className="animate-spin w-4 h-4 mr-2" />}
            Generate Image
          </Button>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardContent className="py-6 space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            Generated image
          </h2>

          {isLoading ? (
            <div className="flex items-center justify-center min-h-40">
              <Loader2 className="animate-spin w-6 h-6 text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Generating article...</span>
            </div>
          ) : generatedImage ? (
            <img
              src={generatedImage}
              alt="Generated"
              className="rounded-md shadow-md w-full h-auto"
            />
          ) : (
            <div className="text-center text-muted-foreground flex flex-col items-center justify-center h-60 gap-2">
              <ImageIcon className="w-8 h-8 opacity-30" />
              <p>Enter a topic and click "Generate image" to get started</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
