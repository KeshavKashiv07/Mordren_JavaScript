let interval = 1000;
function timeoutPromise(interval) {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res();
        }, interval)
    }
    );
}

let p = timeoutPromise(interval);
p.then(()=>{
    document.body.innerHTML += "1 sec lapsed <br/>";
    return timeoutPromise(interval);
}
).then(()=>{
    document.body.innerHTML += "2 sec lapsed <br/>";
    return timeoutPromise(interval);
}
).then(()=>{
    document.body.innerHTML += "3 sec lapsed <br/>";
    timeoutPromise(interval);
}
)
.catch(()=>{

})