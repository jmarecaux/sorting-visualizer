export default function getMergeSortAnimations(array) {
    const animations = [];
    if(array.length<=1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
};

function mergeSortHelper (mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if(startIdx===endIdx) return;
    const middleIdx = Math.floor(startIdx+(endIdx-startIdx)/2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx+1, endIdx, mainArray, animations);
    mergeSort(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
};

function mergeSort (
    mainArray, 
    startIdx, 
    middleIdx, 
    endIdx, 
    auxiliaryArray, 
    animations
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx+1;
    while (i<=middleIdx && j <= endIdx) {
        animations.push([i, j, 'c']);
        animations.push([i, j, 'r']);
        if(auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k,auxiliaryArray[i], 's']);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push([k, auxiliaryArray[j], 's']);
            mainArray[k++]=auxiliaryArray[j++];
        }
    }
    while(i<=middleIdx) {
        animations.push([i,i, 'c']);
        animations.push([k,auxiliaryArray[i], 's']);
        animations.push([i,i, 'r']);
        mainArray[k++]=auxiliaryArray[i++];
    }
    while(j<=endIdx) {
        animations.push([j,j, 'c']);
        animations.push([k,auxiliaryArray[j], 's']);
        animations.push([j,j, 'r']);
        mainArray[k++] = auxiliaryArray[j++];
    }

};