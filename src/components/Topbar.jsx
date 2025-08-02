import { Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/useTheme";

export default function TopBar({ onSidebarToggle }) {
    const { theme, toggleTheme } = useTheme()
    return (
        <header className="w-full h-14 border-b bg-background flex items-center justify-between px-4">
            <div className="flex items-center gap-4">
                <Menu size={22}  onClick={onSidebarToggle} className="cursor-pointer rounded-sm hover:scale-105 hover:text-primary"/>
                <div className="h-full flex gap-2 items-center">
                    <img
                        src="/logo.png"
                        alt="PromptCraft.ai"
                        className="h-6 max-h-full w-auto object-contain"
                    />
                    <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                        Promptcraft
                        <span className="text-primary">.ai</span>
                    </h1>
                </div>
            </div>

            <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-200 hover:bg-transparent"
            >
                {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
            </Button>
        </header>
    );
}
