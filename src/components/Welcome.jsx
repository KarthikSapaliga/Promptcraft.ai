import { Github, Pen, Text, ImagePlus, Eraser, FileText, Scan } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Welcome() {

    function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3">
      <div className="pt-1">{icon}</div>
      <div>
        <h3 className="font-medium text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

  return (
    <section className="max-w-3xl mx-auto py-10 px-6 text-center">
      <h1 className="text-4xl font-bold text-foreground mb-6">
        Welcome to <span className="text-primary">Quick.ai</span> 🚀
      </h1>

      <p className="text-muted-foreground text-lg mb-6">
        Quick.ai is your all-in-one AI toolkit designed to boost productivity by providing smart content tools, image editing features, and career enhancement services — all in one place.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10 px-8 py-2">
        <Feature icon={<Pen className="w-5 h-5 text-primary" />} title="AI Article Writer" desc="Create high-quality articles instantly." />
        <Feature icon={<Text className="w-5 h-5 text-purple-500" />} title="Blog Title Generator" desc="Generate catchy blog headlines." />
        <Feature icon={<ImagePlus className="w-5 h-5 text-green-500" />} title="AI Image Generation" desc="Generate visuals using AI." />
        <Feature icon={<Scan className="w-5 h-5 text-red-500" />} title="Background Removal" desc="Remove image backgrounds easily." />
        <Feature icon={<Eraser className="w-5 h-5 text-pink-500" />} title="Object Removal" desc="Erase unwanted elements in images." />
        <Feature icon={<FileText className="w-5 h-5 text-teal-500" />} title="Resume Review" desc="Improve your resume with AI insights." />
      </div>

      <div className="text-center mb-6">
        <p className="text-muted-foreground">
          This project is open source. Feel free to contribute, report issues, or request features.
        </p>
        <p className="text-muted-foreground">
          Let's build something great together!
        </p>
      </div>

      <div className="flex justify-center">
        <Button asChild variant="outline" className="flex items-center gap-2">
          <a href="https://github.com/karthiksapaliga/ai-saas" target="_blank" >
            <Github className="h-4 w-4" />
            Star or Contribute on GitHub
          </a>
        </Button>
      </div>
    </section>
  );
}
