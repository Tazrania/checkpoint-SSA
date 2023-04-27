function insertionSort(array){
    for (let i = 1; i< array.length; i++) {
        let value = array[i];
        let j;
        for (j = i - 1; j >= 0 && array[j] > value; j--) {
            array[j + 1] = array[j];  
        }
        array[j + 1] = value
    }
    return array;
}

let array = [ 8, 5, 3, 9, 1];
console.log(insertionSort(array))