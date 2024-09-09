const largest = [11,22,54,63,33,44,23];
function getMax(numbers){
    let max = numbers[0]
    for(const num of numbers){
        if(num > max){
            max = num
        }
    }
    return max
}
const findMax = getMax(largest);
console.log(findMax);