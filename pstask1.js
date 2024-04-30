// 1)Write a program that takes number as input, print the sum of odd digits in the given number.

// input: 54213
// num=prompt("enter a number:")
// odd_sum=0;
// for(i=0;i<num.length;i++){
// if(num[i]%2!=0){
// odd_sum=odd_sum+Number(num[i]);
// }
// }
// console.log(odd_sum);
// output:9

// 2) Write a program to print the sum of even digits in the given numbers.

// input:542
// num1=prompt("enter a number1:")
// even_sum=0;
//  for(i=0;i<num1.length;i++){
//     if(num1[i]%2==0){
//         even_sum+=even_sum+Number(num1[i]);
//      }
//  }
//  console.log(even_sum);
//  output:10

// 3) Write a program to print the differnc between even sum and odd sum in the given number.

// input: 16534
// num=prompt("enter the number:")
// odd_sum=0
//  even_sum=0
// for(i=0;i<num.length;i++)
//     if(num[i]%2==0){
//           even_sum=even_sum+Number(num[i])
//     }
// else{
//       odd_sum=odd_sum+Number(num[i])
// }
// console.log(even_sum-odd_sum) 
// output:1

// 4) Write a program to print the largest sum between odd sum and even sum.

// num=prompt("enter the number:")
// odd_sum=0
// even_sum=0
// for(i=0;i<num.length;i++)
//     if(num[i]%2==0){
//          even_sum=even_sum+Number(num[i])
//     }
// else{
//         odd_sum=odd_sum+Number(num[i])
//  }
//  if(even_sum>odd_sum){
//     console.log(`even sum ${even_sum} is largest`)
//  }
//  else{
//     console.log(`odd sum ${odd_sum} is largest`) };

// input: 9474
// output: 16 Odd sum is bigger
// input: 1658
// output: 14 Even sum is bigger

                                                         // day-2:----
                                                         
1) Program to print 1 to num, num to 1, -1 to -num, -num to -1 by using while loop.

prints 1 to n
num=+prompt("enter upto number: ")
num=10;
let i=1;
while(!(i==num+1)){
    console.log(i)
    i++
}

prints n to 1
num=1;
let i1=10;
while(!(i1<=num-1)){
    console.log(i1)
    i1--
}

prints -1 to -10
num=-10
let i2=-1
while(!(i2==num)){
    console.log(i2)
    i2--
}

prints -10 to -1
num=-1
let i3=-10
while(!(i3>=num+1)){
    console.log(i3)
    i3++
}


2) Write a program to find the largest prime in the given number
num=prompt("enter upto number: ")
num="9742"     
max=0
for(n of num){
if(n>1){
    c=true
    for(i=2;i<n;i++){
        if(n%i==0){
        c=false
        break
    }
}
if(c)
  if(max<n)
  max=n
}
}
console.log(max)

// 3) Write a program to print the sum of largest and smallest prime digits in the given number
num="5497351"
max=0
min=num[0]
for(n of num){
if(n>1){
    c=true
    for(i=2;i<n;i++){
        if(n%i==0){
        c=false
        break
    }
}
if (c) {
    if (max < n)
        max =Number(n);
    if(min>n)
       min=Number(n);
}
}
}
console.log(max+min)

// 4) Write a program to print the largest non prime digit in the given number
num="463482"
max=0;
min=num[0];
for(n of num){
    if(n>1){
        c=true
        for(i=2;i<n;i++){
            if(n%i==0){
                c=false
                if(max<n)
                max=Number(n);
                break
            }
    }
}
}



                                                         



 