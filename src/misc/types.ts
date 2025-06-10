export type FileNode = {
  name: string
  type: 'file' | 'folder'
  children?: FileNode[]
}

export type SidebarProps = {
  directoryName: string
  structure: FileNode[]
}