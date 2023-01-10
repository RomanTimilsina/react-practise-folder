import React from 'react'

export default function SidebarItem({option, active, handleClick}) {
  return (
    <button className={`${'sidebar-item'} ${active ? 'active':''}`} onClick={handleClick} >{option.name} </button>
  )
}
