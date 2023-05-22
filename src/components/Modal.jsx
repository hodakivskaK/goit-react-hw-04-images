import PropTypes from 'prop-types';
import { useEffect } from 'react'
import c from './Modal.module.css'

export const Modal = ({onClose, src, discr}) => { 
 useEffect(() => {
    window.addEventListener('keydown', handlePressEsp);

    return () => {
      window.removeEventListener('keydown', handlePressEsp);
    };
 });
  
   const handlePressEsp = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

 const handleClickBackdrop = (e) => {
  if (e.currentTarget === e.target) {
      onClose();
    }  }
  
  return (
    <div className={c.Overlay} onClick={handleClickBackdrop}>
      <div className={c.Modal}>
        <img src={src} alt={discr} />
      </div>
    </div>
    
  );
  
}

Modal.propTypes = {
  onClose: PropTypes.func,
  src: PropTypes.string,
  discr: PropTypes.string
};
