import {MutableRefObject} from "react";

function scrollToId(itemId: number, refElements: MutableRefObject<null>) {
    const map = getMap(refElements);
    const node = map.get(itemId);

    node.scrollIntoView({
        behavior: 'smooth',
        inline: 'end'
    });
}

function getMap(refElements: MutableRefObject<any>) {
    if (!refElements.current) {
        // Initialize the Map on first usage.
        refElements.current = new Map();
    }
    return refElements.current;
}

export {scrollToId, getMap}