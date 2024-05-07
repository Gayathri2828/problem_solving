// 1) Write a program to print the sum of smallest unique no and smallest duplicate number.

// input: 351886761
// output: 1+3 = 4


// num="351886761"
// dup="",uni=""
// s=""
// for(i of num){
//     if(!s.includes(i))
//     s=s+i
// }
// console.log(s)
// for(i of s){
//     c=0
//     for(j of num){
//         if(i==j)
//             c++
//     }
//     if(c>1){
//         dup=dup+i
//     mind=dup[0]
//     for(g of dup){
//         if(g<mind)
//             mind=g
//     }
// }
//     else{
//     uni=uni+i
//     minu=uni[0]
//     for(v of uni){
//         if(v<minu)
//             minu=v
//     }
//     }
// }
// sum = Number(minu) + Number(mind)
//  console.log("duplicates are",dup)
//  console.log("uniques are",uni)
//     console.log("sum of min duplicate and min unique",sum);

// 2) Write a program to print the sum of largest duplicate and largest unique number.
//     input: 2237748
//     output: 7+8 = 15

  
num="2237748"
dup="",uni=""
s=""
for(i of num){
    if(!s.includes(i))
    s=s+i
}
console.log(s)
for(i of s){
    c=0
    for(j of num){
        if(i==j)
            c++
    }
    if(c>1){
        dup=dup+i
    maxd=dup[0]
    for(g of dup){
        if(g>maxd)
            maxd=g
    }
}
    else{
    uni=uni+i
    maxu=uni[0]
    for(v of uni){
        if(v>maxu)
            maxu=v
    }
    }
}
sum = Number(maxu) + Number(maxd)
 console.log("duplicates are",dup)
 console.log("uniques are",uni)
console.log("sum of max duplicate and max unique",sum);