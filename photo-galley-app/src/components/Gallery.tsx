import React from 'react';
import './Gallery.css'
import { GalleryProps } from '../interfaces/GalleryProps';

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
    return (
        <div id="photo-gallery" className="gallery">
            {photos.map(photo => (
                <div key={photo.id} className="photo-item fade-in">
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                    <p>{photo.title}</p>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
