import {swap, randomIntFromInterval} from './sortHelperFunctions';

export default function getShuffleArrayAnimations(array) {
    const animations = [];
    if(array.length<=1) return array;
    shuffle(array, animations);
    return animations;
};

function shuffle(array, animations) {
    for (let i = 0; i < array.length; i++) {
        const j = randomIntFromInterval(i, array.length-1);
        animations.push([i,j, 'c']);
        animations.push([i,array[j],'s']);
        animations.push([j,array[i],'s']);
        animations.push([i,j,'r']);
        swap(array, i, j);
    }
};