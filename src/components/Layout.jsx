import { useState } from "react"

import TopBar from "./Topbar"
import Sidebar from "./Sidebar"

function Layout({children}) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
          <section className="w-screen h-screen flex flex-col overflow-hidden">
              <TopBar onSidebarToggle={() => setSidebarOpen((prev) => !prev)} />
              <div className="flex flex-1 overflow-hidden">
                  {sidebarOpen && <Sidebar />}
                  <main className="flex-1 h-full overflow-y-auto p-4">{children}</main>
              </div>
          </section>
      )
}

export default Layout