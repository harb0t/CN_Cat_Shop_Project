import React, { useEffect } from "react";
import "./Modal.css";
import markx from "./images/xcross.png";

const Modal = props => {

const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
        props.onClose()
    }
}

useEffect(() => {
document.body.addEventListener('keydown', closeOnEscapeKeyDown)
return function cleanup() {
    document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
}
}, [])


return(
<div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
    <div className='modal-content' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
            <h4 className='modal-title'>{props.title}</h4>
        </div>
        <div className='modal-body'> {props.children}</div>
        <div className='modal-footer'>
            <button onClick={props.onClose} className='button'><img id="closeModal" src={markx}/></button>
        </div>
    </div>
</div>

  )
};

export default Modal;