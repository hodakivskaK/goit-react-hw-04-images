import { useState } from 'react';
import PropTypes from 'prop-types';
import {Button} from './Button';
import { ImageGalleryItem } from './ImageGalleryItem';
import {Modal} from './Modal';
import { Loader } from './Loader';
import s from './ImageGallery.module.css';

export function ImageGallery({
  images,
  error,
  fetchImages,
    total,
  status
}) {

  const [showModal, setShowModal] = useState(false);
    const [largeImageURL, setLargeImageURL] = useState(null);
    const [altImg, setAltImgL] = useState(null);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
    setLargeImageURL(null);
  };

  const handleModalImage = (url, tags) => {
    toggleModal();
      setLargeImageURL(url);
      setAltImgL(tags);
  };



  return (
      <>
           {status === "idle" && (<h1>Start search</h1>)}
       {status === "pending" && (<Loader />)}
        {status === "rejected" && (<h1> {error} </h1>)}
        
        
          <ul className={s.ImageGallery}>

       
       
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            smallImg={webformatURL}
            onToggleModal={handleModalImage}
                largeImgL={largeImageURL}
                alt ={tags}
          />
        ))}
      </ul>

    {total >= 12 && images.length < total && <Button onConsole={fetchImages} />}
      
          {showModal && (
              <Modal onClose={toggleModal} src={ largeImageURL} discr ={altImg}>
         
        </Modal>
      )}
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  error: PropTypes.string,
  fetchImages: PropTypes.string,
    total: PropTypes.number,
  status: PropTypes.string,
};