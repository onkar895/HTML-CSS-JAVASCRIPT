let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("I'm 1st promise and I'm fullfilled");
        resolve(56);
    }, 2000);
});

p3.then((val) => {
    console.log(val)

    let p4 = new Promise((resolve, reject) => {
        setTimeout(() => { resolve('Promise 2') }, 2000);
    })
    return p4;
}).then((val) => {
    console.log("I'm done here");
    return 2; // random returning
}).then((val) => {
    console.log("No we are pakka done");
})