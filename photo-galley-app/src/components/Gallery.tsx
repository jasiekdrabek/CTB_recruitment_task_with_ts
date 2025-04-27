import React from 'react';
import { GalleryProps } from '../interfaces/GalleryProps';

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
    return (
        <div id="photo-gallery">
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
