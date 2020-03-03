import { useEffect } from 'react';

export const useHandleOutside = (open, ref, handler) => {
    useEffect(() => {
        const listener = event => {
            console.log(ref)
            if (ref.current && !open || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    },
        [ref, handler],
    );
};