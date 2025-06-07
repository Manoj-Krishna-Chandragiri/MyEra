import React, { useRef } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';

const Canvas = ({ stickers, updateStickerPosition, deleteSticker }) => {
  const stageRef = useRef(null);

  // Download canvas as PNG
  const handleDownload = () => {
    const dataURL = stageRef.current.toDataURL();
    const link = document.createElement('a');
    link.download = 'canvas.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Stage width={600} height={400} ref={stageRef}>
        <Layer>
          {stickers.map((sticker) => (
            <Sticker
              key={sticker.id}
              sticker={sticker}
              updatePosition={updateStickerPosition}
              deleteSticker={deleteSticker}
            />
          ))}
        </Layer>
      </Stage>
      <button className="download-button" onClick={handleDownload}>
        Download PNG
      </button>
    </div>
  );
};

// Sticker component for individual draggable images
const Sticker = ({ sticker, updatePosition, deleteSticker }) => {
  const [image] = useImage(sticker.src);

  return (
    <Image
      image={image}
      x={sticker.x}
      y={sticker.y}
      width={50}
      height={50}
      draggable
      onDragEnd={(e) => {
        updatePosition(sticker.id, e.target.x(), e.target.y());
      }}
      onDblClick={() => deleteSticker(sticker.id)}
    />
  );
};

export default Canvas;