q05a=(x)=>{
    topLetters= ''
    setup = true
    firstsetup = true
    stackcount = 0
    x.split("\n").forEach(x=>{
        if (x=="") {
            setup = false
        } else {
            if (setup) {
                for (y=4;y<=x.length+1;y+=4){
                    chunk = x.substring(y-4,y)
                    if (firstsetup) {
                        this['stack'+y/4] = []
                        stackcount++
                    }
                    if (!(chunk[1]==" ")) this['stack'+y/4].unshift(chunk[1])
                }
                firstsetup = false
            } else {
                line = x.split(" ")
                for (let c=line[1];c>0;c--){
                    this['stack'+line[5]].push(this['stack'+line[3]].pop())
                }
            }
        }
    })
    for(c=1;c<=stackcount;c++){
        topLetters += this['stack'+c].pop()
    }
    return topLetters
}
q05b=(x)=>{
    topLetters= ''
    setup = true
    firstsetup = true
    stackcount = 0
    x.split("\n").forEach(x=>{
        if (x=="") {
            setup = false
        } else {
            if (setup) {
                for (y=4;y<=x.length+1;y+=4){
                    chunk = x.substring(y-4,y)
                    if (firstsetup) {
                        this['stack'+y/4] = []
                        stackcount++
                    }
                    if (!(chunk[1]==" ")) this['stack'+y/4].unshift(chunk[1])
                }
                firstsetup = false
            } else {
                line = x.split(" ")
                movestack=[]
                for (let c=line[1];c>0;c--){
                    movestack.unshift(this['stack'+line[3]].pop())
                }
                this['stack'+line[5]].push(...movestack)
            }
        }
    })
    for(let c=1;c<=stackcount;c++){
        topLetters += this['stack'+c].pop()
    }
    return topLetters
}
