import React from 'react'

const Heading = ({className,headingName, id}) => {
  return (
    <h1 className={`${className}`} id={id}>{headingName}</h1>
  )
}

export default Heading