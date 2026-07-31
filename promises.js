function order(food){
    return new promises((resolve,reject)=>{
        setTimeout(()=>{reject("pizza not delivered due to heavy rain")},4000)
    })
}
order("pizza").then((res)=>{
    console.log("res");

}).catch((err)=>{
    console.log(err);
})
console.log("watch a TV");
