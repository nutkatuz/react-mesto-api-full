import React from 'react';

function ImagePopup({ isOpen, card, onClose }) {

  return (
    <section className={`popup ${isOpen ? 'popup_is-opened' : ''}`}>
      <figure className='zoom'>
        <button className='popup__close popup__close_figure hover-style' type='button'
          aria-label='Закрыть картинку' onClick={onClose} />
        <img className='zoom__image' src={`${card.link}`} alt={`${card.name}`} />
        <figcaption className='zoom__caption'>{`${card.name}`}</figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;