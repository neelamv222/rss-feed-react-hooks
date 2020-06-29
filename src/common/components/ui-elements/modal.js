import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './backdrop';
import './modal.css';

const ModalOverlay = props => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-n-loader-hook'));
};

// Modal component
const Modal = props => {
  return (
    <div className="modal">
      {
        props.show && (
          <>
            <Backdrop onClick={props.onCancel} />
            <ModalOverlay {...props} />
          </>
        )
      }  
    </div>
  );
};

export default Modal;
