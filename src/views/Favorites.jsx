import { useContext } from "react";
import { PhotosContext } from '../context/PhotosContext'
import IconHeart from '../components/IconHeart'
import { Badge } from "react-bootstrap";

const Favorites = () => {
  const { photos, setPhotos } = useContext(PhotosContext);

  const eraseFavorite = (id) => {
    const newPhotos = photos.map((photo) => {

      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setPhotos(newPhotos);
  };


  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.filter(photo => photo.isFavorite).length > 0 ? (
        photos.filter(photo => photo.isFavorite).map((photo, i) => (
          <div
            key={i}
            onClick={() => eraseFavorite(photo.id)}
            className="photo"
            style={{ backgroundImage: `url(${photo.src.large})` }}>
            <IconHeart filled={photo.isFavorite} />
            <section>
              <p>{photo.alt}</p>
              <h6>
                <Badge bg="success">{photo.photographer}</Badge>
              </h6>
            </section>
          </div>
        ))
      ) : (
        <h2>No photos selected :(</h2>
      )}
    </div>
  );
};

export default Favorites;