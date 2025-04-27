import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery';
import Pagination from './components/Pagination';
import LimitSelector from './components/LimitSelector';
import { Photo } from './interfaces/Photo';
import './App.css';

const App: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [totalPhotos, setTotalPhotos] = useState(0);

  useEffect(() => {
      fetchTotalPhotos();
  }, []);

  useEffect(() => {
      fetchPhotos();
  }, [currentPage, limit]);

  const fetchTotalPhotos = async () => {
      try {
          const response = await fetch('https://jsonplaceholder.typicode.com/photos');
          if (!response.ok) {
              throw new Error('Failed to fetch total photos');
          }
          const data: Photo[] = await response.json();
          setTotalPhotos(data.length);
      } catch (err) {
          setError('Error fetching total number of photos.');
      }
  };

  const fetchPhotos = async () => {
      setIsLoading(true);
      setError('');
      try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${limit}`);
          if (!response.ok) {
              throw new Error('Failed to fetch photos');
          }
          const data: Photo[] = await response.json();
          setPhotos(data);
      } catch (err) {
          setError('Error fetching photos.');
      } finally {
          setIsLoading(false);
      }
  };

  const maxPage = Math.ceil(totalPhotos / limit);

  return (
      <div className="container">
          <h1>Photo Gallery</h1>
          {isLoading && <div id="loader" className='loader'>Loading...</div>}
          {error && <div id="error" className='error'>{error}</div>}
          {!isLoading && !error && <Gallery photos={photos} />}
          <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              maxPage={maxPage}
          />
          <LimitSelector limit={limit} setLimit={setLimit} />
      </div>
  );
};

export default App;
