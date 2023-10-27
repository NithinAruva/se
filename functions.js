function calculatesum(...numbers)
{
    let sum =  0;
    for(const num of numbers)
    {
    sum+=num;
    }
    return sum;
}
console.log(calculatesum(1,2,3));
console.log(calculatesum(10,20,30,40));
    

function calc(a,b,operation)
    {
    return operation(a,b);
    }
    function add(x,y)
    {
    return x+y;
    }
    function sub(x,y)
    {
    return x-y;
    }
    console.log(calc(5,3,add));
    console.log(calc(10,7,sub));

var math = [add,sub];
console.log(math[0](3,2));

var operation ={
    addition:add,
    subtraction:sub,
};
console.log(operation.addition(8,4));
console.log(operation.subtraction(15,7));

var abc=function()
{
    console.log("welcome to kmit");
};
abc()

const xtt={
    name:"hary",role:"developer",exp:30,show:function(){
        console.log(`the name is ${xtt.name}`)
    }

}
xtt.show()