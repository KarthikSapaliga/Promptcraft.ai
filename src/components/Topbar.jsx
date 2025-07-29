import { Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/useTheme";

export default function TopBar({ onSidebarToggle }) {
    const { theme, toggleTheme } = useTheme()
    return (
        <header className="w-full h-14 border-b bg-background flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onSidebarToggle}
                    className="text-gray-700 dark:text-gray-200 hover:bg-transparent"
                >
                    <Menu />
                </Button>
                <span className="text-lg font-semibold text-foreground">Quick.ai</span>
            </div>

            <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-200 hover:bg-transparent"
            >
                {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
            </Button>
        </header>
    );
}
