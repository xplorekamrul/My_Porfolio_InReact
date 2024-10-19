import React from 'react'

const Button = ({className,btnName}) => {
  return (
    <button className={`${className}`}>{btnName}</button>
  )
}

export default Button