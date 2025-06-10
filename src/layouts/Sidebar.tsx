import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import type { SidebarProps } from '../misc/types'
import { renderStructure } from '../misc/renders';



const Sidebar = ({ directoryName, structure }: SidebarProps): React.JSX.Element => {
  return (
    <aside id='sidebar' className='bg-dark pt-2 d-flex flex-column border-end border-secondary'>
      <div className="header px-2 py-1 border-bottom border-secondary">
        <h1 className='fs-6 text-white'>Explorer</h1>
      </div>

      <div className="dictionary py-2 px-2 border-bottom border-secondary">
        <div className="dictionary-header flex-center-y justify-content-between">
          <h2 className='fw-semibold fs-6 text-white'>{directoryName}:</h2>
          <IoMdArrowDropdown className='text-white' size={20} />
        </div>

        <div className="dictionary-body px-2">
          {renderStructure(structure)}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar