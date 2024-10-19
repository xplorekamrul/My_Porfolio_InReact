import React from 'react'

const Paragraph = ({className,pText}) => {
  return (
    <p className={`${className}`}>{pText}</p>
)
}

export default Paragraph