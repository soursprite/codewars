function findEvenIndex(arr)
{
    let numSum = arr.reduce((a,c) => a+c) - arr[0]
    let newSum = 0

    for (let i = 0; i < arr.length; i++) {
        console.log(newSum, numSum)
        if (newSum == numSum) { return i } 
        else { numSum -= arr[i+1] 
             newSum += arr[i]}
    }

    return -1
    
};