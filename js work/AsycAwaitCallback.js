//Async js Programming
//Callback. Promises,Async & Await

const datas = [
    { name: "Rahul", Performance: "Software Engineer" },
    { name: "rutvik", Performance: "Software Engineer" }
];
function getDatas() {
    setTimeout(() => {
        let output = "";
        datas.forEach((data, index) => {
            output+=`<li>${data.name}</li>`;
        })
        document.body.innerHTML=output
    }, 1000);
}


function createdata(newdata, callback){
    setTimeout(() => {
        datas.push(newdata)
        callback(0)
    }, 2000);
}

getDatas()
createdata({name: "vankar", Performance: "Software Engineer"}.getDatas)