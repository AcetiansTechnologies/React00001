// Gallery.js
import React from 'react'; // Optional: for custom styling
import { useSelector } from 'react-redux';

const galleryItemsOld = [
  {
    id: 1,
    title: "Gallery Image4",
    description: "Lorem Ipsum is simply dummy text of the printing",
    imgSrc: "https://campus.acetians.in/custom/images/galler-1.jpg"
  },
  {
    id: 2,
    title: "Gallery Image3",
    description: "Lorem Ipsum is simply dummy text of the printing",
    imgSrc: "https://campus.acetians.in/custom/images/galler-2.jpg"
  },
  {
    id: 3,
    title: "Gallery Image4",
    description: "Lorem Ipsum is simply dummy text of the printing",
    imgSrc: "https://campus.acetians.in/custom/images/galler-1.jpg"
  },
  {
    id: 4,
    title: "Gallery Image3",
    description: "Lorem Ipsum is simply dummy text of the printing",
    imgSrc: "https://campus.acetians.in/custom/images/galler-2.jpg"
  }
  
];

const GallerySlide = () => {
  
  const galleryImages= useSelector((state) => state.auth.gallery_images);
  const galleryItems = galleryImages.slice(0,3);
  return (
    <div className="gal-container" style={{maxWidth:'99vw'}}>
      <div className="row m-0 p-0">
        {galleryItems.map(item => (
          <div key={item.id} className="col-md-3 col-sm-6 col-xs-12 gal-item">
            <div className="box">
              <a href="#" data-toggle="modal" data-target={`#modal-${item.id}`}>
                <div className="caption">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <img src={item.imgSrc} alt={item.title} />
              </a>
              <div className="modal fade" id={`modal-${item.id}`} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                    <div className="modal-body">
                      <img src={item.imgSrc} alt={item.title} />
                    </div>
                    <div className="col-md-12 description">
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySlide;
