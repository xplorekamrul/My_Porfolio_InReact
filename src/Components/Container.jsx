import React from 'react'

export const Container = ({className,children}) => {
  return (
    <div className={`max-w-[1320px] m-auto ${className}`}>{children}</div>
  )
}
