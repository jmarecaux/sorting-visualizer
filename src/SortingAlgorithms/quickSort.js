import {swap} from './sortHelperFunctions';

export default function getQuickSortAnimations(array) {
    const animations = [];
    if(array.length<=1) return array;
    quicksort(array, 0, array.length-1, animations);
    console.log(array);
    return animations;
};

function quicksort(array, l, h, animations) {
    // comparison (low,high)
    if(l < h) {
        const j = partition(array, l,h, animations);
        animations.push([j, -1, 'c']);
        animations.push([j, -1, 'r']);
        quicksort(array, l,j-1, animations);
        quicksort(array, j+1, h, animations);
    }
};

function partition(array, l, h, animations) {
    let pivot = array[h];
    let i = (l-1);
    animations.push([-1, h, 'c']);
    for(let j = l; j <= h-1; j++) {
        animations.push([j, -1, 'c']);
        if(array[j] < pivot) {
            i++;
            animations.push([i, j, 'c']);
            animations.push([i, array[j], 's']);
            animations.push([j, array[i], 's']);
            animations.push([i,j, 'r']);
            swap(array, i, j);
        }
        animations.push([j, -1, 'r']);
    }
    animations.push([-1, h, 'r']);
    animations.push([i+1, h, 'c']);
    animations.push([i+1, array[h], 's']);
    animations.push([h, array[i+1], 's']);
    animations.push([i+1, h, 'r']);
    swap(array, i+1, h);
    return i+1;
};