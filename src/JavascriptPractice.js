const testString = "The quickaaaa brown fox jumps over the lazy dog";
const duplicateArr = [1, 1, 2, 2, 3, 4, 5];
const minMaxArray= [10,2,13,14,1];
const flatArr=[[1,2],3,4,[5,6]];
let   count={};


function JavaScriptPractice(testString,duplicateArr,minMaxArray,flatArr) {

//Remove nested array
//return flatArr.reduce((acc,cur)=>acc.concat(Array.isArray(cur)? flattern(cur):cur ),[])

// Find Min/Max number in array using for loop
//   for (let i=0;i<array.length;i++){
//     if(array[i]<minimum){
//          minimum=array[i]
//     }
//      if(array[i]>maximum){
//          maximum=array[i]
//     }
//      duplicate count
//      count[array[i]]=count[array[i]] ? count[array[i]]+1: 1
// }
// return {minimum,maximum,count}


// Find duplicate number in array
//   const findDuplicate= arr.filter((ele,index,array)=>{
//     return array.indexOf(ele) !== index
// }).sort((a,b)=>a-b)
// return findDuplicate

  
// Find Min/Max number in array
// return array.reduce((a,b)=>{
//   return a < b ? a : b
// })


// Reverse complete testString with exact letter
// let str=testtestString.split(" ").reverse().join(" ")
// return str


// Make first letter as Capital
// let arr=[]
// let str=testString.split(' ').map((testString1)=>{
//       return testString1.charAt(0).toUpperCase() + testString1.slice(1);
// })
//   return str.join(" ")


// Find largest word in testString
// let str=testString.split(' ');
//             let maxtestString=''
// for (let word of str){
//     if(word.length >= maxtestString.length ){
//         maxtestString=word;
//     }
// }
// return maxtestString;
}

// console.log(JavaScriptPractice(testString));

export default JavaScriptPractice;
