import { useState, useEffect } from 'react';

const getWinH = (): number => (
    Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
);

const useVh = (vh: number): number => {
    const [winH, setWinH] = useState(getWinH());

    useEffect(() => {
        window.addEventListener('resize', () => {
            // https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions
            setWinH(getWinH());
        });
    });

    return Math.floor((winH * vh) / 100);
};

export default useVh;
