// Do the below programs in anonymous function & IIFE
// Print odd numbers in an array
 var a=[1,2,3,4,5,6];
 (function(){
    const result= a.filter((b)=>{
        if (b%2!==0){
            return b;
        }

    });
    console.log('ODD numbers =',result);
 })();

// Remove duplicates from an array

let brr=[10,20,30,10,20,30,40];

(function(){
 const indexx=brr.filter((value,index)=>{
     if(brr.indexOf(value)===index){
         return value;
     }
     
 })
 console.log('Remove duplicates = ',indexx);
})();

//Sum of all numbers in an array

let c=[1,5,6,7,3,5];

(function(){
    const sum=c.reduce((accumulator,currentvalue)=>{
        return accumulator+currentvalue;

    });
    console.log('sum= ',sum)
})();

//Convert all the strings to title caps in a string array
 let str='hellow how are you';
(function(){
    const cap=str.split(' ').map((word)=>{
        return word.charAt(0).toUpperCase()+word.slice(1)

    })
    console.log('all the strings to title caps = ',cap.join(' '))

})();
//Return all the prime numbers in an array

var prime=[1,2,3,4,5,6,7,8,9,10];

(function(){
  const primenum =  prime.filter((num)=>{
    for(i=2;i<num;i++){
        if(num%2===0){
        return false;
        }
        
        }
        return num>1;

    });
     console.log('all the prime numbers=',primenum);
})();

//Return all the palindromes in an array

var pal=['aba','kkl','mom','vtv','ktv'];

(function(){
    const palindrom=pal.filter((letter)=>{
        for(i=0;i< letter.length;i++){
            if(letter[0]!==letter[2]){
                return false
            }
        }
        return letter

    });
    console.log('all the palindromes =',palindrom);
})();

// //Rotate an array by k times
let  krr=[1,2,3,4,5,6];
let k=3;

(function(){
    const rotate=krr.forEach((num,k)=>{
        for(let i=0;i<k;i++){
            } 
             let  element=num.pop();
             num.unshift(element)
             return num
         
     })
 
console.log('rotate',rotate)

})();



// 
// Return median of two sorted arrays of the same size.
  
let sa=[8,2,-9,-3,5];
let si=[7,8,9,10,11];
const concat=[...sa,...si];

(function (){
   const same=concat.sort((a,b)=>{
    return a-b;
   
 })
   let med1=concat[concat.length/2];
   let med2=concat[concat.length/2-1];
   let values= parseFloat(med1+med2)/2;
   console.log('median =',values)
  })();
// -------------------------------------------------------------------------
// Do the below programs in arrow functions.
// Print odd numbers in an array
let oddnum=[1,2,3,4,5,6] ;
const numberval=oddnum.filter((value2)=>{
    if(value2%2!==0)
{
    return value2
}
})

console.log('odd in arrow=',numberval)

// Convert all the strings to title caps in a string array

let cap2='hellow how are you all';

const capitaliz=cap2.split(' ').map((word1)=>{
           return word1.charAt(0).toUpperCase()+word1.slice(1) 
})
console.log('capitalizeing in arrow==',capitaliz.join(' '));
// Sum of all numbers in an array

let sum2=[1,5,6,10,11,8];

const add=sum2.reduce((a,b)=>{
     return a+b;

})
console.log('sum of given array in arrow=',add)
// Return all the prime numbers in an array
let prime1=[1,2,3,4,5,6,7]

const primen= prime1.filter((prim)=>{
    for(let i=2;i< prim;i++){
        if(prim %2===0){
            return false;
        }
       
    }
    return prim>1;
})
console.log('prime in arrow=',primen)

// Return all the palindromes in an array

let palindrom2=['aba','kkl','mom','vtv','ktv'];

const paldrome3=palindrom2.filter((values)=>{
          for(i=0;i<values.length;i++){
        if(values[0]!==values[2]){
            return false;
        }
       return values;
    }
   

});
console.log('palindrome in arrow=',paldrome3)
