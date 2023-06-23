
// var sum=function(a){
//  console.log("Live Viewers" +""+ a);
//   var c=4;
//  return function(b){
//     return a+b+c;
//  }
// }
// var store = sum(2)

// console.log(store(5))


var sum = function (a, b, c) {
    return {
        geSumTwo: function () {
            return a + b;
        },
        geSumThree: function () {
            return a + b+c;
        }
    }
}
var store=sum(3, 4, 5);
console.log(store.geSumTwo())
console.log(store.geSumThree())

var store1=sum(7, 8, 9);

console.log(store1.geSumTwo())
console.log(store1
    .geSumThree())
