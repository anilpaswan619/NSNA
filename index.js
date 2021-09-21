let arr = ["A", "a", "b","B","c"];
for(let i=0; i<arr.length; i++) {
    if(arr[i]===arr){
        console.log(arr);
    } else {
        console.log("No Capital letters")
    }
}