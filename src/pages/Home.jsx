import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    PenTool,
    Hash,
    Image as ImageIcon,
    Eraser,
    FileMinus,
    FileText,
    Sun,
    Moon
} from "lucide-react";
import gradientBg from "@/assets/gradient-bg.png";

import { useTheme } from "@/contexts/useTheme";

export default function Home() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="relative min-h-screen bg-white dark:bg-black">
            <div className="absolute inset-0 z-0">
                <img
                    src={gradientBg}
                    alt="Gradient Overlay"
                    className="w-full h-full object-cover opacity-60"
                />
            </div>

            <div className="relative z-10 flex flex-col h-screen">
                <header className="flex items-center justify-between px-6 py-6">
                    <h1 className="text-3xl font-extrabold text-indigo-700 dark:text-indigo-400 tracking-tight">Quick.ai</h1>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        className="text-gray-700 dark:text-gray-200 hover:bg-transparent"
                    >
                        {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
                    </Button>
                </header>

                <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white leading-tight">
                        Unleash Your Creativity <br /> with <span className="text-violet-600 dark:text-violet-500">Smart AI tools</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-gray-700 dark:text-gray-300 text-base md:text-lg">
                        Boost your productivity with our intelligent suite of AI-powered solutions. Craft compelling content, generate stunning visuals, and streamline your creative process in seconds.
                    </p>
                    <Button className="mt-8 px-8 py-6 rounded-lg text-base font-medium shadow-md hover:scale-105 transition-transform duration-200">
                        Start creating now
                    </Button>
                </main>
            </div>

            <section className="relative z-10 px-4 py-20 bg-white dark:bg-black">
                <h2 className="text-3xl font-bold text-center mb-4 text-black dark:text-white">
                    All in One AI Toolkit
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                    Everything you need to create, refine, and elevate your content using cutting-edge AI technology — all in one platform.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                    {features.map(({ icon: Icon, title, description, color }, index) => (
                        <Card key={index} className="shadow-md">
                            <CardContent className="p-6">
                                <div className={`w-10 h-10 rounded-md flex items-center justify-center ${color} text-white mb-4`}>
                                    <Icon size={20} />
                                </div>
                                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">{title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <footer className="relative z-10 text-center py-6 border-t bg-card px-4">
                &copy; 2025 Quick.ai. Built to empower your creative journey.
            </footer>
        </div>
    );
}

const features = [
    {
        icon: PenTool,
        title: "AI Article Writer",
        description: "Generate high-quality, engaging articles on any topic with our AI writing technology.",
        color: "bg-blue-500",
    },
    {
        icon: Hash,
        title: "Blog Title Generator",
        description: "Generate high-quality, engaging articles on any topic with our AI writing technology.",
        color: "bg-purple-500",
    },
    {
        icon: ImageIcon,
        title: "AI Image Generation",
        description: "Generate high-quality, engaging articles on any topic with our AI writing technology.",
        color: "bg-green-500",
    },
    {
        icon: Eraser,
        title: "Background Removal",
        description: "Generate high-quality, engaging articles on any topic with our AI writing technology.",
        color: "bg-red-500",
    },
    {
        icon: FileMinus,
        title: "Object Removal",
        description: "Generate high-quality, engaging articles on any topic with our AI writing technology.",
        color: "bg-blue-400",
    },
    {
        icon: FileText,
        title: "Resume Review",
        description: "Generate high-quality, engaging articles on any topic with our AI writing technology.",
        color: "bg-teal-500",
    },
];
