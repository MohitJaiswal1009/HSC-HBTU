// Gallery.js

import React from "react"
import photos from "./collection.js" // Importing the array of photo objects
// import './Gallery.css'; // Importing the CSS file for styling with Tailwind CSS

const Gallery = () => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-sky-950 rounded-lg"
      style={{ padding: "3rem", paddingBottom: "1rem", paddingTop: "5rem" }}
    >
      {photos.map((photo) => (
        <div key={photo.id} className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="px-4 py-2 bg-white">
            <p className="text-gray-800 text-lg font-semibold">
              {photo.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Gallery
