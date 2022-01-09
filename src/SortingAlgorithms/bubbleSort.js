import {swap} from './sortHelperFunctions';

export default function getBubbleSortAnimations(array) {
    const animations = [];
    if(array.length<=1) return array;
    bubbleSort(array, animations);
    return animations;
};

function bubbleSort(array,animations) {
    for(let i = 0; i < array.length; i++) {
        let swapped = false;
        for(let j = 0; j < array.length-1-i; j++) {
            animations.push([j,j+1, 'c']);
            animations.push([j,j+1, 'r']);
            if(array[j] > array[j+1]) {
                animations.push([j, array[j+1], 's']);
                animations.push([j+1,array[j], 's']);
                swap(array,j,j+1);
                swapped=true;
            } else {
                animations.push([j, array[j], 's']);
                animations.push([j+1,array[j+1], 's']);
            }
        }
        if(!swapped) {
            break;
        }
    }
};