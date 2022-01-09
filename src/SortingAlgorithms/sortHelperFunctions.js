export { swap, isSorted, randomIntFromInterval };

function swap(arr, i, j){
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};

function isSorted(array) {
    let min = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i]<min) {
            return false;
        }
        min = array[i];
    }
    return true;
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
};

