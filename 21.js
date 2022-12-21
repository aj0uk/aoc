/*
Day 21 q1 (test data) -- Passed in 0.40 ms
Day 21 q1 (full data) -- Passed in 219.30 ms
Day 21 q2 (test data) -- Failed in 0.00 ms
*/
q21a=(x)=>{
    y=x.split("\n")
    len=y.length
    c=0
    pf='v'+len
    while(typeof this[pf+'root'] == 'undefined'){
        name=y[c].split(": ")[0]
        p1=y[c].split(" ")[1]
        if(!Number.isInteger(parseInt(p1))){
            p2=y[c].split(" ")[3]
            sign=y[c].split(" ")[2]
            if(typeof this[pf+p1] !== 'undefined'&&typeof this[pf+p2] !== 'undefined'){
                switch(sign){
                    case "+":
                        this[pf+name] = this[pf+p1] + this[pf+p2]
                        break
                    case "-":
                        this[pf+name] = this[pf+p1] - this[pf+p2]
                        break
                    case "*":
                        this[pf+name] = this[pf+p1] * this[pf+p2]
                        break
                    case "/":
                        this[pf+name] = this[pf+p1] / this[pf+p2]
                        break
                }
            } 
        } else this[pf+name] = parseInt(p1); 
        if(++c==len) c=0;
    }
    return this[pf+'root']
}
q21b=(x)=>{
    return 0
}
