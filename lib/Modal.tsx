import {ReactNode, useEffect} from 'react';
import {createPortal} from 'react-dom';

interface ModalProps {
    isOpen: boolean;
    children: ReactNode;
    handleClose: () => void;
}

export default function Modal({ children, isOpen, handleClose }:ModalProps) {

    if (!isOpen)
        return null;

    return createPortal(
        <div className="">
            <button onClick={handleClose} className="close-btn">
                Close
            </button>
            <div className="modal-content">{children}</div>
        </div>,
        document.getElementById('portal-root') as HTMLElement
    );
};