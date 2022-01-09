import {swap} from './sortHelperFunctions';

export default function getHeapSortArrayAnimations(array) {
    const animations = [];
    if(array.length<=1) return array;
    heapsort(array, animations);
    return animations;
};

function heapsort(array, animations) {
    let n = array.length;
    for(let i = Math.floor(n/2)-1; i>=0; i--)
        heapify(array, n, i, animations);
    
    for(let i = n - 1; i > 0; i--) {
        animations.push([0,i,'c']);
        animations.push([i,array[0],'s']);
        animations.push([0,array[i],'s']);
        animations.push([i,0,'r']);
        swap(array, 0, i);
        heapify(array, i, 0, animations);
    }
};

function heapify(array, n, i, animations) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    animations.push([i,n-1,'c']);
    animations.push([i,n-1,'r']);

    if(l < n && array[l] > array[largest])
        largest = l;
    if(r < n && array[r] > array[largest])
        largest = r;
    if(largest !== i) {
        animations.push([i,largest,'c']);
        animations.push([i,largest,'r']);
        animations.push([i,array[largest],'s']);
        animations.push([largest,array[i],'s']);
        swap(array, i, largest);
        heapify(array, n, largest, animations);
    }
};