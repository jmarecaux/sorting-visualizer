import {swap} from './sortHelperFunctions';

export default function getInsertionSortAnimations(array) {
    var animations = [];
    if(array.length<=1) return animations;
    console.log("unsort",array);
    insertSort(array, animations);
    console.log("sort",array);
    console.log("animations",animations);
    return animations;
}

function insertSort(array, animations) {
    for(let i = 1; i < array.length; i++) {
        const key = array[i];
        let j = i-1;
        while(j>=0 && array[j] > key) {
            animations.push([i,j,'c']);
            animations.push([j,array[j+1],'s']);
            animations.push([j+1,array[j],'s']);
            animations.push([i,j,'r']);
            array[j+1] = array[j];
            j--;
        }
        animations.push([j+1,key,'s']);
        array[j+1] = key;
    }
}