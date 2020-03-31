const numberSuffix = (input: number): string => {
    const exp = Math.floor(Math.log(input) / Math.log(100));
    const abs = Math.abs(input);
    if (abs >= (10 ** 9)) {
        return `${(input / (10 ** exp)).toFixed(1)}`;
    }
    if (abs < (10 ** 9) && abs >= (10 ** 7)) {
        return `${(input / (10 ** 7)).toFixed(1)} Cr `;
    }
    if (abs < (10 ** 7) && abs >= (10 ** 5)) {
        return `${(input / (10 ** 5)).toFixed(1)} L `;
    }
    if (abs < (10 ** 5) && abs >= (10 ** 3)) {
        return `${(input / (10 ** 3)).toFixed(1)} K `;
    }
    return String(input);
};

export default numberSuffix;
