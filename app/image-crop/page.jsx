"use client"
import React, { useRef, useState } from 'react';

const ImageCropper = () => {
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);
  const [cropping, setCropping] = useState(false);
  const [cropArea, setCropArea] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const img = new Image();
      img.onload = () => setImage(img);
      img.src = URL.createObjectURL(file);
    }
  };

  const startCrop = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    setCropArea({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      width: 0,
      height: 0,
    });
    setCropping(true);
  };

  const doCrop = (e) => {
    if (cropping) {
      const rect = canvasRef.current.getBoundingClientRect();
      setCropArea((prev) => ({
        ...prev,
        width: e.clientX - rect.left - prev.x,
        height: e.clientY - rect.top - prev.y,
      }));
    }
  };

  const endCrop = () => {
    if (cropping && image) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const { x, y, width, height } = cropArea;

      // Clear the cropped area
      ctx.clearRect(x, y, width, height);

      setCropping(false);
    }
  };

  const drawImage = () => {
    if (image && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
    }
  };

  React.useEffect(() => {
    drawImage();
  }, [image]);

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <canvas
        ref={canvasRef}
        onMouseDown={startCrop}
        onMouseMove={doCrop}
        onMouseUp={endCrop}
        style={{ border: '1px solid black', cursor: 'crosshair' }}
      />
      {cropping && (
        <div>
          Cropping area: {cropArea.width} x {cropArea.height}
        </div>
      )}
    </div>
  );
};

export default ImageCropper;
