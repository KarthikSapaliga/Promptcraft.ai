import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ImageIcon } from "lucide-react"

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

  const handleGenerate = () => {
    if(!description) return;
    setGeneratedImage("https://placehold.co/600x400/slategrey/white")
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
          >
            Generate Image
          </Button>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardContent className="py-6 space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            Generated image
          </h2>

          {generatedImage ? (
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
