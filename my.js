function asyncFunc ()  {
return new Promise((resolve, reject) => {
    setTimeout(() => {
console.log("Async function executed");
        resolve("Async function resolved");
    }, 4000);    
});
}
    
console.log("fetching data 1");

let promise = asyncFunc();
promise.then((res) => {
    console.log("Promise fulfilled:", res);
})
// this is how the pro ise works



// const  getPromise = () => {
// return  newPromise = new Promise((resolve, reject) => {
//     console.log("Promise started");
//     //resolve("success");
//     reject(" network error");
// });
// };
// let promise2 = getPromise();
//  promise2.then((res) => {
//     console.log("Promise fulfilled:", res);
//  })
//  promise2.catch((err) => {
//     console.log(" rejected", err);

 //});
    // function getData(DataId, getNextData) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             console.log("data :", DataId);
    //             if (getNextData) {
    //                 getNextData();
    //             }
    //         }, 2000);
    //     });
    // }
                