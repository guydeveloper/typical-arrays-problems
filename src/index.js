
exports.min = function min (array) {
    if(!array || array.length === 0) return 0;

    let minValue = array[0];

    array.forEach((item) => {
        if(item < minValue) {
            minValue = item;
        }
    });

    return minValue;
}

exports.max = function max (array) {
    if(!array || array.length === 0) return 0;

    let maxValue = array[0];

    array.forEach((item) => {
        if(item > maxValue) {
            maxValue = item;
        }
    });

    return maxValue;
}

exports.avg = function avg (array) {
    if(!array || array.length === 0) return 0;

    return array.reduce((result, item) => (result + item), 0) / array.length;
}
