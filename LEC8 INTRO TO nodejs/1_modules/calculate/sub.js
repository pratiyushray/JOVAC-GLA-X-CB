// console.log("I AM MJS MODULE");

// var name = "Pratiyush"

// export function calculateSub(xx,yy){
//     var ans = xx-yy;
//     console.log(ans);
// }


// var myName = "Pratiyush Bhiya"

function subOfTwoNumbers(x,y){
    const sum = x+y;
    console.log(sum);
}


module.exports = {
    // myName: myName,
    subOfTwoNumbers: subOfTwoNumbers
}
