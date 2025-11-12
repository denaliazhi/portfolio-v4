import { useState } from "react";

export default function Carousel({ images }) {
  const [selected, setSelected] = useState(0);

  // Determine images to show in carousel nav
  let imageSet = [];
  if (images.length > 1) {
    // Selected image is the first but not the only image
    if (selected === 0) {
      imageSet.push(images[selected]);
      // Add next three images (if exist)
      for (let i = 1; i < 4; i++) {
        if (selected + i <= images.length - 1) {
          imageSet.push(images[selected + i]);
        }
      }
      // Selected image is not the first image
    } else {
      // Add previous two images, then selected image, then next two images (if exist)
      for (let i = -2; i < 3; i++) {
        if (
          selected + i >= 0 &&
          selected + i <= images.length - 1
        ) {
          imageSet.push(images[selected + i]);
        }
      }
    }
  }

  // On image click, set image index as spotlight
  const handleClick = (e) => {
    setSelected(
      images.findIndex(
        (img) => img.src === e.target.id
      )
    );
  };

  // Add class "spotlight" to spotlighted image
  return (
    <div className="carousel">
      <img
        src={`/projects/${images[selected].src}`}
        alt={images[selected].alt}
        width="936"
        height="586"
      />
      {imageSet.length > 1 && (
        <ul className="carousel-nav">
          {imageSet.map((image) => (
            <li key={image.src}>
              <img
                src={`/projects/${image.src}`}
                alt={`/projects/${image.alt}`}
                id={image.src}
                className={
                  image.src ===
                  images[selected].src
                    ? "selected"
                    : null
                }
                onClick={handleClick}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
