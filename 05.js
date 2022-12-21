/*
Day 5 q1 (test data) -- Passed in 0.20 ms
Day 5 q1 (full data) -- Passed in 0.60 ms
Day 5 q2 (test data) -- Passed in 0.10 ms
Day 5 q2 (full data) -- Passed in 0.50 ms
*/
q05=(data,CrateMover9001=false)=>{
    topLetters= ''
    setup = true
    firstsetup = true
    stackcount = 0
    data.split("\n").forEach(x=>{
        if(x==""){
            setup = false
            return;
        }
        if(setup) {
            for (y=4;y<=x.length+1;y+=4){
                chunk=x.substring(y-4,y)
                if(firstsetup){
                    this['stack'+y/4] = []
                    stackcount++
                }
                if (!(chunk[1]==" ")) this['stack'+y/4].unshift(chunk[1])
            }
            firstsetup=false
        }else{
            line=x.split(" ")
            c=line[1]
            f=this['stack'+line[3]]
            s=f.splice(f.length-c,c)
            this['stack'+line[5]].push(...(CrateMover9001)?s:s.reverse())
        }
    })
    for(c=1;c<=stackcount;c++){
        topLetters+=this['stack'+c].pop()
    }
    return topLetters
}
q05a=(x)=>{ return q05(x) }
q05b=(x)=>{ return q05(x,true) }
