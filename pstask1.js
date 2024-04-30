// 1)Write a program that takes number as input, print the sum of odd digits in the given number.

input: 54213
num=prompt("enter a number:")
odd_sum=0;
for(i=0;i<num.length;i++){
if(num[i]%2!=0){
odd_sum=odd_sum+Number(num[i]);
}
}
console.log(odd_sum);
output:9

// 2) Write a program to print the sum of even digits in the given numbers.

input:542
num1=prompt("enter a number1:")
even_sum=0;
 for(i=0;i<num1.length;i++){
    if(num1[i]%2==0){
        even_sum+=even_sum+Number(num1[i]);
     }
 }
 console.log(even_sum);
 output:10

// 3) Write a program to print the differnc between even sum and odd sum in the given number.

input: 16534
num=prompt("enter the number:")
odd_sum=0
 even_sum=0
for(i=0;i<num.length;i++)
    if(num[i]%2==0){
          even_sum=even_sum+Number(num[i])
    }
else{
      odd_sum=odd_sum+Number(num[i])
}
console.log(even_sum-odd_sum) 
output:1

// 4) Write a program to print the largest sum between odd sum and even sum.

num=prompt("enter the number:")
odd_sum=0
even_sum=0
for(i=0;i<num.length;i++)
    if(num[i]%2==0){
         even_sum=even_sum+Number(num[i])
    }
else{
        odd_sum=odd_sum+Number(num[i])
 }
 if(even_sum>odd_sum){
    console.log(`even sum ${even_sum} is largest`)
 }
 else{
    console.log(`odd sum ${odd_sum} is largest`) };

input: 9474
output: 16 Odd sum is bigger
input: 1658
output: 14 Even sum is bigger

