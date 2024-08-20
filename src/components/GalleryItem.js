import React from 'react';

function GalleryItem({image}) {
  return (
    <dl className="gallery-item">
      <dt className="gallery-icon">
        <a href={image.image_link} target="_blank" data-elementor-open-lightbox="yes" title={image.title??'a'}>
          <img
            decoding="async"
            width="150"
            height="150"
            src={image.image_link}
            className="attachment-thumbnail size-thumbnail"
            alt={image.title??'a'}
          />
        </a>
      </dt>
    </dl>
  );
}

export default GalleryItem;
