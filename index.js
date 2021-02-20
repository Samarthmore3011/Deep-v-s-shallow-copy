//const a={id:1,name:"Sam"} //original ubject
// cloning object a to b
//const b=a
//b.id=5
//console.log("A value ",a)
//console.log("B value ",b)

//Deep copy
//let var1=4;
//let var2=var1;
//var2=10;
//console.log("var1 value ",var1);
//console.log("var2 value ",var2);

//const a={id:1,name:"Sam",address:{flatNo:35}} //original ubject
// cloning object a to b

//using spred operator
//using assign operator
//const b=Object.assign({},a)
//const b=JSON.parse(JSON.stringify(a))
//b.address.flatNo=5
//b.id=5
//console.log("A value ",a)
//console.log("B value ",b)

//array
const arr1=[1,2,3]
const arr2=[...arr1];
arr2[0]=5
console.log("Arr1 ",arr1)
console.log("Arr2 ",arr2)