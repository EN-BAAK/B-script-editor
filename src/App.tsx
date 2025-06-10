import React from "react"
import Sidebar from "./layouts/Sidebar"
import type { FileNode } from "./misc/types"
const structure: FileNode[] = [
  {
    name: "public",
    type: "folder",
    children: [
      { name: "index.html", type: "file" },
      { name: "favicon.ico", type: "file" }
    ]
  },
  {
    name: "src",
    type: "folder",
    children: [
      { name: "main.tsx", type: "file" },
      { name: "App.tsx", type: "file" },
      {
        name: "components",
        type: "folder",
        children: [
          { name: "Sidebar.tsx", type: "file" },
          { name: "Header.tsx", type: "file" },
          {
            name: "modals",
            type: "folder",
            children: [
              { name: "LoginModal.tsx", type: "file" },
              { name: "RegisterModal.tsx", type: "file" }
            ]
          }
        ]
      },
      {
        name: "pages",
        type: "folder",
        children: [
          { name: "Home.tsx", type: "file" },
          { name: "Profile.tsx", type: "file" },
          { name: "Settings.tsx", type: "file" }
        ]
      },
      {
        name: "hooks",
        type: "folder",
        children: [
          { name: "useAuth.ts", type: "file" },
          { name: "useTheme.ts", type: "file" }
        ]
      },
      {
        name: "utils",
        type: "folder",
        children: [
          { name: "api.ts", type: "file" },
          { name: "formatDate.ts", type: "file" },
          { name: "validators.ts", type: "file" }
        ]
      },
      {
        name: "assets",
        type: "folder",
        children: [
          {
            name: "images",
            type: "folder",
            children: [
              { name: "logo.png", type: "file" },
              { name: "avatar.jpg", type: "file" }
            ]
          },
          {
            name: "styles",
            type: "folder",
            children: [
              { name: "main.css", type: "file" },
              { name: "variables.scss", type: "file" }
            ]
          }
        ]
      },
      {
        name: "types",
        type: "folder",
        children: [
          { name: "index.d.ts", type: "file" },
          { name: "user.d.ts", type: "file" }
        ]
      }
    ]
  },
  { name: ".gitignore", type: "file" },
  { name: "package.json", type: "file" },
  { name: "tsconfig.json", type: "file" },
  { name: "vite.config.ts", type: "file" },
  { name: "README.md", type: "file" }
]


function App(): React.JSX.Element {

  return (
    <main className="bg-dark min-h-100vh">
      <Sidebar directoryName="my-project" structure={structure} />
    </main>
  )
}

export default App
