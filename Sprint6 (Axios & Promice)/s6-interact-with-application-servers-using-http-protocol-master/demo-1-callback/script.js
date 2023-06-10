const interval = 1000;

function timeout(interval, callback){
    callback(interval);
}
timeout(interval, (interval)=>{
    setTimeout(()=>{
        document.body.innerHTML += "1 sec lapsed <br/>";
        timeout(interval, (interval)=>{
            setTimeout(()=>{
                document.body.innerHTML += "2 sec lapsed <br/>";
                timeout(interval, (interval)=>{
                    setTimeout(()=>{
                        document.body.innerHTML += "3 sec lapsed <br/>";
                    },interval)
                })
            },interval)
        })
    },interval)
})