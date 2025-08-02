import { useState } from "react";

import TopBar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";

import Welcome from "@/components/Welcome";
import ArticleGenerator from "@/pages/ai-tools/content-generation/ArticleGenerator";
import TitleGenerator from "@/pages/ai-tools/content-generation/TitleGenerator";
import ImageGenerator from "@/pages/ai-tools/content-generation/ImageGenerator";
import BgRemover from "@/pages/ai-tools/image-editing/BgRemover";
import ObjectRemover from "@/pages/ai-tools/image-editing/ObjectRemover";

function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeSection, setActiveSection] = useState("welcome");

    const renderContent = () => {
        switch (activeSection) {
            case "welcome":
                return <Welcome />;
            case "write-article":
                return <ArticleGenerator />;
            case "blog-titles":
                return <TitleGenerator />;
            case "gen-images":
                return <ImageGenerator />;
            case "remove-bg":
                return <BgRemover />;
            case "remove-object":
                return <ObjectRemover />;
            case "review-resume":
                return <div><h1 className="text-2xl font-bold">Review Resume</h1></div>;
            default:
                return <div><h1>Unknown Section</h1></div>;
        }
    };

    return (
        <section className="w-screen h-screen flex flex-col overflow-hidden">
            <TopBar onSidebarToggle={() => setSidebarOpen((prev) => !prev)} />
            <div className="flex flex-1 overflow-hidden">
                {sidebarOpen && (
                    <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
                )}
                <main className="flex-1 h-full overflow-y-auto p-4">
                    {renderContent()}
                </main>
            </div>
        </section>
    )
}

export default Dashboard