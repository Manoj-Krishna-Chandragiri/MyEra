# MyEra Sticker Canvas

A simple React + react-konva application for the MyEra Frontend Internship mini-task. Users can add stickers to a 600x400 canvas, drag them around, double-click to delete, and download the canvas as a PNG. Stickers snap to a 40px grid.

## Features

- **600x400 Konva canvas**: Main area for arranging stickers.
- **Three sticker buttons**: Click to add a sticker (PNG images) to the canvas.
- **Add stickers at default spot**: New stickers appear at a default position, snapped to the 40px grid.
- **Draggable stickers**: Stickers can be moved anywhere on the canvas.
- **Grid snapping**: Stickers snap to a 40px grid when added or dragged.
- **Double-click to delete**: Double-click a sticker to remove it from the canvas.
- **Download as PNG**: Download the current canvas as a PNG image.
- **No backend/data persistence**: All actions happen in the browser.

## How to Use

1. **Add stickers**: Click any of the three sticker buttons to add a sticker to the canvas.
2. **Drag stickers**: Click and drag any sticker to move it around. Stickers will snap to the nearest 40px grid point.
3. **Delete stickers**: Double-click a sticker to remove it from the canvas.
4. **Download**: Click the "Download PNG" button below the canvas to save your creation as an image.

## Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/Manoj-Krishna-Chandragiri/MyEra.git
   cd myera-sticker-app-master
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the app:
   ```sh
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Dependencies

- React
- react-konva
- konva
- use-image

## Assignment Requirements Checklist

- [x] 600 × 400 Konva canvas
- [x] Three sticker buttons (PNG images)
- [x] Clicking a button adds a sticker at a default (snapped) position
- [x] Stickers are draggable anywhere on the canvas
- [x] Download button saves the canvas as a PNG
- [x] Double-click a sticker to delete it (bonus)
- [x] Stickers snap to a 40px grid (bonus)
- [x] No backend or data persistence
- [x] Clean project structure and README

---
