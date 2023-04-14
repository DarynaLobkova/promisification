const promise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
        if (success) {
            resolve('success') 
        }
        reject('error')
    }, 1000)
});

promise.then(result => console.log(result)).catch(error => console.log(error));