import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';


export const ImageGalleryItem = ({ smallImg, onToggleModal, largeImgL, alt }) => {
    return <li  onClick={() => onToggleModal(largeImgL, alt)}  className={s.ImageGalleryItem}>
        <img src={smallImg} alt={alt} className={s.ImageGalleryItemImage}/>
    </li>
}



ImageGalleryItem.propTypes = {
    smallImg: PropTypes.string,
    largeImgL: PropTypes.string,
    onToggleModal: PropTypes.func,
    alt: PropTypes.string,
};


