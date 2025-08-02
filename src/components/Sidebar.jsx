import {
  Home,
  PencilLine,
  Text,
  ImagePlus,
  Eraser,
  Wand2,
  FileText
} from "lucide-react";

export default function Sidebar({ activeSection, setActiveSection }) {

  const setItemClassName = (section) => {
    return `flex items-center gap-2 px-3 py-2 rounded-md ${
      activeSection == section ? "bg-primary text-primary-foreground" : "hover:bg-muted" 
    }`
  }

  return (
    <aside className="absolute top-0 left-0 md:relative w-64 shrink-0 h-full border-r bg-background text-foreground p-4 space-y-6">
      <div>
        <h2 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Overview</h2>
        <nav className="flex flex-col gap-1">
          <button className={setItemClassName("welcome")} onClick={()=>setActiveSection("welcome")} >
            <Home size={18} />
            <span className="text-sm">Welcome</span>
          </button>
        </nav>
      </div>

      <div>
        <h2 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Content Tools</h2>
        <nav className="flex flex-col gap-1">
          <button className={setItemClassName("write-article")} onClick={()=>setActiveSection("write-article")} >
            <PencilLine size={18} />
            <span className="text-sm">Write Article</span>
          </button>
          <button className={setItemClassName("blog-titles")} onClick={()=>setActiveSection("blog-titles")} >
            <Text size={18} />
            <span className="text-sm">Blog Titles</span>
          </button>
          <button className={setItemClassName("gen-images")} onClick={()=>setActiveSection("gen-images")} >
            <ImagePlus size={18} />
            <span className="text-sm">Generate Images</span>
          </button>
        </nav>
      </div>

      <div>
        <h2 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Image Editing</h2>
        <nav className="flex flex-col gap-1">
          <button className={setItemClassName("remove-bg")} onClick={()=>setActiveSection("remove-bg")} >
            <Eraser size={18} />
            <span className="text-sm">Remove Background</span>
          </button>
          <button className={setItemClassName("remove-object")} onClick={()=>setActiveSection("remove-object")} >
            <Wand2 size={18} />
            <span className="text-sm">Remove Object</span>
          </button>
        </nav>
      </div>

      <div>
        <h2 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Career</h2>
        <nav className="flex flex-col gap-1">
          <button className={setItemClassName("review-resume")} onClick={()=>setActiveSection("review-resume")} >
            <FileText size={18} />
            <span className="text-sm">Review Resume</span>
          </button>
        </nav>
      </div>
    </aside>
  );
}
