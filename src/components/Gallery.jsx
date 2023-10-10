import { useContext } from "react";
import {PhotosContext} from '../context/PhotosContext'
import IconHeart from './IconHeart'
import { Badge } from "react-bootstrap";


const Gallery = () => {
  const { photos, setPhotos } = useContext(PhotosContext);

  const addFavorite = (id) => {
      const newPhotos = photos.map((photo) => {
          if (photo.id === id) {
              return { 
                ...photo, isFavorite: !photo.isFavorite};
          }
          return photo;
      });
      setPhotos(newPhotos);
  };

  return (
      <div className="gallery grid-columns-5 p-3">
          {photos.map((photo, i) => (
              <div
                  key={i}
                  onClick={() => addFavorite(photo.id)}
                  className="photo"
                  style={{ backgroundImage: `url(${photo.src.large})` }}>
                      <IconHeart filled={photo.isFavorite} />{''}
                  <section>
                      <p>{photo.alt}</p>
                      <h6>
                        <Badge bg="success">{photo.photographer}</Badge>
                      </h6>
                  </section>
              </div>
          ))}
      </div>
  );
};

export default Gallery;