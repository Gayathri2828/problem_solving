// 1) Write a program to print the factorial of every digit in the number, do not consider a digit if it is repeated.

// input: 335645
// output: 6 120 720 24 

num="3355637"
 res=""
 res2=""
for(n of num){
     x=Number(n)
     if(res.includes(n)==false){
         res=res+n+""
   }
} 
console.log(res) 

for(k of res){
    fact=1
    for(i=1;i<=k;i++){
        fact=fact*Number(i)
    }
    res2=res2+fact+" "
}
console.log(res2)

// 2) Write a program to print the factorial of a number in the below format.
// input: 5
// output:
// 1*2*3*4*5=120
// input:3
// 1*2*3=6

// 3) Write a program to print the sum of prime numbers in the fibonacci series.
// input: 10
// output: 23 (0 1 1 2 3 5 8 13 21 34)

// 4) Write a program to find the nearest prime to the given number.
// input: 5
// Null
// input: 10
// 11

