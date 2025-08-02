import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { FileText, Loader2 } from "lucide-react"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { analyzeResume } from "@/lib/ai-controller"

export default function ResumeReviewer() {
  const [resumeFile, setResumeFile] = useState(null)
  const [analysisResult, setAnalysisResult] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file && file.type === "application/pdf") {
      setResumeFile(file)
      setAnalysisResult("")
    }
  }

  const handleReview = async () => {
    if (!resumeFile) return;
    setIsLoading(true);

    const buffer = await resumeFile.arrayBuffer();

    try {
      const result = await analyzeResume(buffer);
      setAnalysisResult(result);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <Card>
        <CardContent className="space-y-6 py-6">
          <h2 className="text-lg font-semibold">Resume Review</h2>
          <div className="space-y-2">
            <Label htmlFor="resume">Upload Resume</Label>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="file"
                id="resume"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />

              <Label
                htmlFor="resume"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
              >
                {resumeFile ? resumeFile.name : "Choose Resume"}
              </Label>

              <Button
                onClick={handleReview}
                disabled={!resumeFile || isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <FileText className="w-4 h-4 mr-2" />
                )}
                Review Resume
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Supports PDF resume only.
            </p>
          </div>

          <Button
            className="w-full bg-primary text-primary-foreground"
            onClick={handleReview}
            disabled={!resumeFile | isLoading}
          >
            {isLoading ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : <FileText className="w-4 h-4 mr-2" />}
            Review Resume
          </Button>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardContent className="py-6 space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            Analysis Results
          </h2>

          {isLoading ? (
            <div className="flex items-center justify-center min-h-40">
              <Loader2 className="animate-spin w-6 h-6 text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Reviewing the resume...</span>
            </div>
          ) : analysisResult ? (
            <div className="disable-tailwind">
              <Markdown remarkPlugins={[remarkGfm]}>{analysisResult}</Markdown>
            </div>
          ) : (
            <div className="text-center text-muted-foreground flex flex-col items-center justify-center h-60 gap-2">
              <FileText className="w-8 h-8 opacity-30" />
              <p>Upload a resume and click "Review Resume" to get started</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
