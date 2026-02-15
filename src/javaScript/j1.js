// function countOccurrences(arr){
//   let count = {};
//   for(let i=0;i<arr.length;i++){
//     let val = arr[i];
//     if(count[val]) count[val]++;
//     else count[val]=1;
//   }
//   return count;
// }
// console.log(countOccurrences(["a","b","a"])); // { a:2, b:1 }


// const occur = (str) => {
//     const count = {}; 
//     let maxCount = 0;
//     let mostFreqChar = '';

//     for (let char of str) {
//         if (char === ' ') continue; // skip spaces

//         count[char] = (count[char] || 0) + 1;

//         if (count[char] > maxCount) {
//             maxCount = count[char];
//             mostFreqChar = char;
//         }
//     }

//     return {
//         counts: count,
//         mostFrequent: mostFreqChar,
//         frequency: maxCount
//     };
// }

// // Test
// console.log(occur("alia raza"));
const arr = [12, 8, 12, 15, 8, 8];
const target = 20;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
    //   console.log("Indexes:", i, j);
      console.log("Values:", arr[i], arr[j]);
    }
  }
}
