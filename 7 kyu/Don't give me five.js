function dontGiveMeFive(start, end)
{
  let arr = []
  for (let i = start; i <= end; i++) {
    arr.push(i)
  } 
  let newArr = arr.filter(x => !x.toString().split('').includes('5'))
  return newArr.length
}