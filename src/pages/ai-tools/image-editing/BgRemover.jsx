import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Eraser } from "lucide-react"

export default function BgRemover() {
  const [imageFile, setImageFile] = useState(null)
  const [processedImage, setProcessedImage] = useState("")

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      setProcessedImage("") 
    }
  }

  const handleRemoveBackground = () => {
    if (!imageFile) return
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
            disabled={!imageFile}
          >
            <Eraser className="w-4 h-4 mr-2" />
            Remove background
          </Button>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardContent className="py-6 space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            Processed Image
          </h2>

          {processedImage ? (
            <img
              src={processedImage}
              alt="Processed"
              className="max-w-sm rounded-md shadow"
            />
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
