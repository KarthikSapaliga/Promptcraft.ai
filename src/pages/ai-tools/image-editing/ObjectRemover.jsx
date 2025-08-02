import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Scissors, Loader2 } from "lucide-react"

import { removeObject } from "@/lib/ai-controller"

export default function ObjectRemover() {
	const [imageFile, setImageFile] = useState(null)
	const [objectName, setObjectName] = useState("")
	const [processedImage, setProcessedImage] = useState("")
	const [isLoading, setIsLoading] = useState(false)


	const handleFileChange = (e) => {
		const file = e.target.files?.[0]
		if (file) {
			setImageFile(file)
			setProcessedImage("")
		}
	}

	const handleRemoveObject = async () => {
		if (!imageFile || !objectName) return;
		setIsLoading(true);

		const buffer = await imageFile.arrayBuffer();

		try {
			const image = await removeObject(buffer, objectName);
			setProcessedImage(image)
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 min-h-[80vh]">
			<Card className="max-h-max">
				<CardContent className="space-y-6 py-6">
					<h2 className="text-lg font-semibold">Object Removal</h2>

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

					<div className="space-y-2">
						<Label htmlFor="object">Describe object name to remove</Label>
						<Textarea
							id="object"
							placeholder="e.g., watch or spoon. Only single object name"
							value={objectName}
							onChange={(e) => setObjectName(e.target.value)}
							rows={6}
						/>
					</div>

					<Button
						className="w-full bg-primary text-primary-foreground"
						onClick={handleRemoveObject}
						disabled={!imageFile || !objectName || isLoading}
					>
						{isLoading ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : <Scissors className="w-4 h-4 mr-2" />}
						Remove object
					</Button>
				</CardContent>
			</Card>

			<Card className="w-full max-h-max">
				<CardContent className="py-6 space-y-4">
					<h2 className="text-lg font-semibold flex items-center gap-2">
						Processed Image
					</h2>

					{isLoading ? (
						<div className="flex items-center justify-center min-h-40">
							<Loader2 className="animate-spin w-6 h-6 text-muted-foreground" />
							<span className="ml-2 text-muted-foreground">Removing the object...</span>
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
							<Scissors className="w-8 h-8 opacity-30" />
							<p>Upload an image and click "Remove Object" to get started</p>
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	)
}
