// arrays

type NumberArr = number[];      // cant do this with interface

// function maxValue(arr{ NumberArr}): number{      // this works too
function maxValue(arr: number[]): number{
    let max: number = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i] > max)
                max = arr[i];
    }
    return max;
}

maxValue([1,2,3]);