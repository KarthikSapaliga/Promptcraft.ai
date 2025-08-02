import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Eraser, Loader2 } from "lucide-react"

import { removeBg } from "@/lib/ai-controller"

export default function BgRemover() {
  const [imageFile, setImageFile] = useState(null)
  const [processedImage, setProcessedImage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      setProcessedImage("")
    }
  }

  const handleRemoveBackground = async () => {
    if (!imageFile) return
    setIsLoading(true);

    const buffer = await imageFile.arrayBuffer();

    try {
      const image = await removeBg(buffer);
      setProcessedImage(image)
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 min-h-[80vh]">
      <Card>
        <CardContent className="space-y-6 py-6">
          <h2 className="text-lg font-semibold">Background Removal</h2>

          <div className="space-y-2">
            <Label htmlFor="upload">Upload image</Label>
            <input
              type="file"
              id="upload"
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
              className="block w-full text-sm file:mr-4 file:py-2 file:px-4
                         file:rounded-md file:border-0
                         file:bg-primary file:text-primary-foreground"
            />
            <p className="text-sm text-muted-foreground">
              Supports JPG, PNG, and other image formats
            </p>
          </div>

          <Button
            className="w-full bg-primary text-primary-foreground"
            onClick={handleRemoveBackground}
            disabled={!imageFile || isLoading}
          >
            {isLoading ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : <Eraser className="w-4 h-4 mr-2" />}
            Remove background
          </Button>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardContent className="py-6 space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            Processed Image
          </h2>

          {isLoading ? (
            <div className="flex items-center justify-center min-h-40">
              <Loader2 className="animate-spin w-6 h-6 text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Generating article...</span>
            </div>
          ) : processedImage ? (
            <div className="flex flex-col items-center gap-4 w-full">
              <img
                src={processedImage}
                alt="Processed"
                className="max-w-sm rounded-md shadow"
              />
              <a
                href={processedImage}
                download="background-removed.png"
                className="w-full md:w-auto"
              >
                <Button className="w-full bg-primary text-primary-foreground">
                  Download Image
                </Button>
              </a>
            </div>

          ) : (
            <div className="text-center text-muted-foreground flex flex-col items-center justify-center h-60 gap-2">
              <Eraser className="w-8 h-8 opacity-30" />
              <p>Upload an image and click "Remove Background" to get started</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
