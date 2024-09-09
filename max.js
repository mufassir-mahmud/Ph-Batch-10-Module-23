function getMax(num1,num2){
    if(num1 > num2){
        return num1
    }
    else{
        return num2
    }
}
const max1 = getMax(22,33);
const max2 = getMax(44,55);
const max = getMax(max1, max2);
console.log(max);