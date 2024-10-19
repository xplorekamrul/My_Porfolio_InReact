import React from 'react'

const Heading = ({className,headingName}) => {
  return (
    <h1 className={`${className}`}>{headingName}</h1>
  )
}

export default Heading