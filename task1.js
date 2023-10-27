// const stu=
// {
//     harry:45,mohan:58,rani:75
// }
// for(let key in stu)
// {
//     console.log(stu[key])
// }


let a=0
let b=1
let n=10
let c;
for(var i=0;i<n-2;i++)
{
    c=a+b;
    a=b;
    b=c;
}
console.log("fibo numner is",c)

let t=" apple banana mango"
console.log(t.slice(7,13))

let y=" apple banana mango"
console.log(y.substring(13,7))

let x="please visit microsoft"
console.log(x.replace("microsoft","google"))

let o="welcome to evryone"
console.log(o.search("to"))