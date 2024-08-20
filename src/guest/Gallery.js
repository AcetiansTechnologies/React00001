import React from 'react'
import PageHeader from '../components/PageHeader'

import PageContent from '../components/PageContent'
import Blog from '../components/Blog'
import GalleryItem from '../components/GalleryItem'
import YoutubePlayer from '../components/YoutubePlayer'
import { useSelector } from 'react-redux'

function Gallery(props) {
    const galleryImages= useSelector((state) => state.auth.gallery_images);
    const galleryImagesOld=[
        {
            "title": "IMG-20191218-WA0109-1",
            "imageUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20191218-WA0109-1.jpg",
            "thumbnailUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20191218-WA0109-1-150x150.jpg"
        },
        {
            "title": "IMG-20191218-WA0056",
            "imageUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20191218-WA0056-1.jpg",
            "thumbnailUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20191218-WA0056-1-150x150.jpg"
        },
        {
            "title": "IMG-20200307-WA0030",
            "imageUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20200307-WA0030.jpg",
            "thumbnailUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20200307-WA0030-150x150.jpg"
        },
        {
            "title": "IMG-20200220-WA0027",
            "imageUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20200220-WA0027.jpg",
            "thumbnailUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20200220-WA0027-150x150.jpg"
        },
        {
            "title": "IMG-20200131-WA0050",
            "imageUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20200131-WA0050.jpg",
            "thumbnailUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20200131-WA0050-150x150.jpg"
        },
        {
            "title": "IMG-20200131-WA0024",
            "imageUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20200131-WA0024.jpg",
            "thumbnailUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20200131-WA0024-150x150.jpg"
        },
        {
            "title": "IMG-20200128-WA0008",
            "imageUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20200128-WA0008.jpg",
            "thumbnailUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20200128-WA0008-150x150.jpg"
        },
        {
            "title": "IMG-20191218-WA0110",
            "imageUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20191218-WA0110.jpg",
            "thumbnailUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20191218-WA0110-150x150.jpg"
        },
        {
            "title": "IMG-20191218-WA0109",
            "imageUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20191218-WA0109.jpg",
            "thumbnailUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20191218-WA0109-150x150.jpg"
        },
        {
            "title": "IMG-20191218-WA0087",
            "imageUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20191218-WA0087.jpg",
            "thumbnailUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20191218-WA0087-150x150.jpg"
        },
        {
            "title": "IMG-20191218-WA0073",
            "imageUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20191218-WA0073.jpg",
            "thumbnailUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20191218-WA0073-150x150.jpg"
        },
        {
            "title": "IMG-20191218-WA0069",
            "imageUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20191218-WA0069.jpg",
            "thumbnailUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20191218-WA0069-150x150.jpg"
        },
        {
            "title": "IMG-20191218-WA0067",
            "imageUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20191218-WA0067.jpg",
            "thumbnailUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20191218-WA0067-150x150.jpg"
        },
        {
            "title": "IMG-20191218-WA0066",
            "imageUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20191218-WA0066.jpg",
            "thumbnailUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20191218-WA0066-150x150.jpg"
        },
        {
            "title": "IMG-20191218-WA0056",
            "imageUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20191218-WA0056.jpg",
            "thumbnailUrl": "https://vbsgdc.org.in/uploads/2020/06/IMG-20191218-WA0056-150x150.jpg"
        },
        {
            "title": "DR J P",
            "imageUrl": "https://vbsgdc.org.in/uploads/2020/05/DR-J-P.jpg",
            "thumbnailUrl": "https://vbsgdc.org.in/uploads/2020/05/DR-J-P-150x150.jpg"
        },
        {
            "title": "63",
            "imageUrl": "https://vbsgdc.org.in/uploads/2019/04/63.jpeg",
            "thumbnailUrl": "https://vbsgdc.org.in/uploads/2019/04/63-150x150.jpeg"
        },
        {
            "title": "62",
            "imageUrl": "https://vbsgdc.org.in/uploads/2019/04/62.jpeg",
            "thumbnailUrl": "https://vbsgdc.org.in/uploads/2019/04/62-150x150.jpeg"
        },
        {
            "title": "61",
            "imageUrl": "https://vbsgdc.org.in/uploads/2019/04/61-1.jpeg",
            "thumbnailUrl": "https://vbsgdc.org.in/uploads/2019/04/61-1-150x150.jpeg"
        },
        {
            "title": "64",
            "imageUrl": "https://vbsgdc.org.in/uploads/2019/04/64.jpeg",
            "thumbnailUrl": "https://vbsgdc.org.in/uploads/2019/04/64-150x150.jpeg"
        }
    ]
    
  return (
    <div>
      <PageHeader title={`${props.galleryType} Gallery`} />
      <PageContent 
                elem={
                    props.galleryType === 'Video' ? (
                        <ul  id="gallery-ul">
                            <li>
                                
                                <YoutubePlayer
                                    title="Sample Video"
                                    videoUrl="https://www.youtube.com/embed/K4TOrB7at0Y"
                                />
                            </li>
                            <li>
                                <YoutubePlayer
                                    title="Sample Video"
                                    videoUrl="https://www.youtube.com/embed/K4TOrB7at0Y"
                                />
                            </li>
                        </ul>
                    ) : (
                        <ul id="gallery-ul">
                            {galleryImages.map((img, index) => (
                                <li key={index}>
                                    <GalleryItem image={img} />
                                </li>
                            ))}
                        </ul>
                    )
                }
            />
            
    </div>
  )
}

export default Gallery
