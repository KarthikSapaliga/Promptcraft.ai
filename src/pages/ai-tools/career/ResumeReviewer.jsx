import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function ResumeReviewer() {
  const [resumeFile, setResumeFile] = useState(null)
  const [analysisResult, setAnalysisResult] = useState("")

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file && file.type === "application/pdf") {
      setResumeFile(file)
      setAnalysisResult("") 
    }
  }

  const handleReview = () => {
    if (!resumeFile) return

    setAnalysisResult(`✅ Strong formatting\n✅ Relevant experience\n❌ Missing portfolio link\n✅ Good skill section\n❌ Lacks measurable achievements`)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 min-h-[80vh]">
      <Card>
        <CardContent className="space-y-6 py-6">
          <h2 className="text-lg font-semibold">Resume Review</h2>

          <div className="space-y-2">
            <Label htmlFor="resume">Upload Resume</Label>
            <input
              type="file"
              id="resume"
              accept="application/pdf"
              onChange={handleFileChange}
              className="block w-full text-sm file:mr-4 file:py-2 file:px-4
                         file:rounded-md file:border-0
                         file:bg-primary file:text-primary-foreground"
            />
            <p className="text-sm text-muted-foreground">Supports PDF resume only.</p>
          </div>

          <Button
            className="w-full bg-primary text-primary-foreground"
            onClick={handleReview}
            disabled={!resumeFile}
          >
            <FileText className="w-4 h-4 mr-2" />
            Review Resume
          </Button>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardContent className="py-6 space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            Analysis Results
          </h2>

          {analysisResult ? (
            <div className="whitespace-pre-wrap text-left text-sm text-muted-foreground border rounded-md p-4 bg-muted">
              {analysisResult}
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
