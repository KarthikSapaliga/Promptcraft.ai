import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm";
import { dummyArticle } from "@/lib/dummyData/dummy-article"

export default function ArticleGenerator() {
	const [topic, setTopic] = useState("")
	const [length, setLength] = useState("short")
	const [article, setArticle] = useState("")

	const generateArticle = () => {
		setArticle(dummyArticle);
	}

	return (
		<div className="flex flex-col gap-6 p-6">
			<Card>
				<CardContent className="space-y-4 py-6">
					<h2 className="text-lg font-semibold">Article Configuration</h2>
					<div className="space-y-2">
						<Label htmlFor="topic">Article Topic</Label>
						<div className="flex items-center gap-6">
							<Input
								id="topic"
								placeholder="Enter article title here..."
								value={topic}
								onChange={(e) => setTopic(e.target.value)}
							/>
							<Button onClick={generateArticle}>
								Generate article
							</Button>
						</div>
					</div>

					<div className="space-y-2">
						<Label>Article Length</Label>
						<div className="flex gap-2">
							<Button
								variant={length === "short" ? "default" : "outline"}
								onClick={() => setLength("short")}
							>
								Short (500-800 words)
							</Button>
							<Button
								variant={length === "medium" ? "default" : "outline"}
								onClick={() => setLength("medium")}
							>
								Medium (800-1200 words)
							</Button>
							<Button
								variant={length === "long" ? "default" : "outline"}
								onClick={() => setLength("long")}
							>
								Long (1200+ words)
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardContent className="py-6 space-y-4 min-h-96">
					<h2 className="text-lg font-semibold">Generated Article</h2>
					{article ? (
						<div className="disable-tailwind">
							<Markdown remarkPlugins={[remarkGfm]}>{article}</Markdown>
						</div>
					) : (
						<p className="text-muted-foreground">Your generated article will appear here.</p>
					)}
				</CardContent>
			</Card>
		</div>
	)
}
