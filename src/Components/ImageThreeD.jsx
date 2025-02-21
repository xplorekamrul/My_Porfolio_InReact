import React, { useState, useEffect } from 'react';

const Image3d = ({ imagesrc, alt, className, style }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startPos.x;
    const deltaY = e.clientY - startPos.y;

    setRotation((prevRotation) => ({
      x: prevRotation.x + deltaY * 0.1,
      y: prevRotation.y + deltaX * 0.1,
    }));

    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle clicking on the image to zoom in
  const handleImageClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsZoomed(true); // Set zoomed to true
  };

  // Close icon click handler
  const handleCloseClick = () => {
    setIsZoomed(false);
    setRotation({ x: 0, y: 0 }); // Reset rotation when closing the image
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const imageStyle = {
    width: isZoomed ? '900px' : '300px',
    height: 'auto',
    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
    transition: 'transform 0.1s ease, width 0.9s ease',
    perspective: '1000px',
    cursor: isZoomed ? 'grab' : 'pointer', // Change cursor based on zoom state
    ...style,
  };

  const closeIconStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '25px',
    height: '25px',
    background: '#C4C4C4',
    color: '#fff',
    fontSize: '18px',
    borderRadius: '50%',
    textAlign: 'center',
    lineHeight: '25px',
    cursor: 'pointer',
    zIndex: '1',
  };

  return (
    <div className={className || 'zoomable-image'} style={{ position: 'relative' }}>
      {isZoomed && (
        <div style={closeIconStyle} onClick={handleCloseClick}>
          &times;
        </div>
      )}
      <img
        src={imagesrc}
        alt={alt}  // Dynamic alt attribute
        style={imageStyle}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onClick={handleImageClick} // Clicking the image zooms in
      />
    </div>
  );
};

export default Image3d;
