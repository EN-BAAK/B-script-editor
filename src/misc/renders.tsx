import type React from "react"
import type { FileNode } from "./types"
import { RiFolder2Fill } from "react-icons/ri";
import { FaFile } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

export const renderStructure = (nodes: FileNode[], level = 0): React.ReactNode => {
  return (
    <ul
      style={{ paddingLeft: level * 12 }}>
      {nodes.map((node, index) => (
        <li
          key={`node-${level}-${index}`}
          className="text-white fs-sm">
          {node.type === 'folder' ? (
            <div>
              <div className="flex-center-y justify-content-between">
                <div className="flex-center-y gap-2">
                  <RiFolder2Fill className="text-warning" />
                  <span className="fw-bold">{node.name}</span>
                </div>

                <IoMdArrowDropdown className='text-white' />
              </div>

              {node.children && renderStructure(node.children, level + 1)}
            </div>
          ) : (
            <div className="flex-center-y gap-2">
              <FaFile className="text-primary" />
              <span>{node.name}</span>
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}