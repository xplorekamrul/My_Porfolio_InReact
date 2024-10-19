import React from 'react'

const Image = ({className,imgSrc,alt}) => {
  return (
    <img src={imgSrc} alt={alt} className={`${className}`} />
  )
}

export default Image