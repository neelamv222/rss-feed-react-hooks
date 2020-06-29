import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './backdrop';
import './loader.css'

// HOC component to hide/show loader
const withLoader = WrappedComponent => ({ isLoading, ...props }) => {
  if (isLoading) {
    const content = (
      <div className='loader'>
        <Backdrop/>
        <div className='loader__text'>Loading...</div>
      </div>
    );
    return ReactDOM.createPortal(content, document.getElementById('modal-n-loader-hook'));
  } 
  
  return (
    <WrappedComponent {...props} />
  )
};

export default withLoader;