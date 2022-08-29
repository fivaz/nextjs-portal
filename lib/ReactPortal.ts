import { createPortal } from 'react-dom';
import {ReactNode, useLayoutEffect, useState} from 'react';

function createWrapperAndAppendToBody(wrapperId: string) {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}

interface ReactPortalProps {
    children: ReactNode;
    wrapperId: string;
}

export default function ReactPortal({ children, wrapperId }: ReactPortalProps) {
    const [wrapperElement, setWrapperElement] = useState(null);

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;
        // if element is not found with wrapperId or wrapperId is not provided,
        // create and append to body
        if (!element) {
            systemCreated = true;
            element = createWrapperAndAppendToBody(wrapperId);
        }
        setWrapperElement(element);

        return () => {
            // delete the programmatically created element
            if (systemCreated && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        }
    }, [wrapperId]);

    // wrapperElement state will be null on the very first render.
    if (wrapperElement === null) {
        return null;
    }

    return createPortal(children, wrapperElement);
}