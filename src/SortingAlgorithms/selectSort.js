import {swap} from './sortHelperFunctions';

export default function getSelectionSortAnimations(array) {
    const animations = [];
    if(array.length<=1) return animations;
    selectSort(array, animations);
    console.log("sorted",array);
    return animations;
}

function selectSort(array, animations) {
    let i, j, mini;
    for(i = 0; i < array.length-1; i++) {
        mini = i;
        for (j = i+1; j < array.length; j++) {
            animations.push([mini, j, 'c']);
            animations.push([mini,j, 'r']);
            if(array[j]<array[mini]) {
                mini = j;
            }
        }
        animations.push([mini, i, 'c']);
        animations.push([mini,array[i],'s']);
        animations.push([i,array[mini],'s']);
        animations.push([mini, i, 'r']);
        swap(array, mini, i);
    }
}