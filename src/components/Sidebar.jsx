import {
  Home,
  PencilLine,
  Text,
  ImagePlus,
  Eraser,
  Wand2,
  FileText
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 shrink-0 h-full border-r bg-background text-foreground p-4 space-y-6">
      <div>
        <h2 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Overview</h2>
        <nav className="flex flex-col gap-1">
          <button className="flex items-center gap-2 px-3 py-2 rounded-md bg-primary text-primary-foreground">
            <Home size={18} />
            <span className="text-sm">Welcome</span>
          </button>
        </nav>
      </div>

      <div>
        <h2 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Content Tools</h2>
        <nav className="flex flex-col gap-1">
          <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted">
            <PencilLine size={18} />
            <span className="text-sm">Write Article</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted">
            <Text size={18} />
            <span className="text-sm">Blog Titles</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted">
            <ImagePlus size={18} />
            <span className="text-sm">Generate Images</span>
          </button>
        </nav>
      </div>

      <div>
        <h2 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Image Editing</h2>
        <nav className="flex flex-col gap-1">
          <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted">
            <Eraser size={18} />
            <span className="text-sm">Remove Background</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted">
            <Wand2 size={18} />
            <span className="text-sm">Remove Object</span>
          </button>
        </nav>
      </div>

      <div>
        <h2 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Career</h2>
        <nav className="flex flex-col gap-1">
          <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted">
            <FileText size={18} />
            <span className="text-sm">Review Resume</span>
          </button>
        </nav>
      </div>
    </aside>
  );
}
