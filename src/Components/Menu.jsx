import React from 'react'

const Menu = ({className,menuName}) => {
  return (
    <ul>
        <li className={`${className}`}>{menuName}</li>
    </ul>
  )
}

export default Menu