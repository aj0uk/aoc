q05=(data,CrateMover=false)=>{
    topLetters= ''
    setup = true
    firstsetup = true
    stackcount = 0
    data.split("\n").forEach(x=>{
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
                if (!CrateMover) {
                    this['stack'+line[5]].push(...this['stack'+line[3]].splice(this['stack'+line[3]].length-line[1],line[1]).reverse()) 
                }else{
                    this['stack'+line[5]].push(...this['stack'+line[3]].splice(this['stack'+line[3]].length-line[1],line[1]))
                }
            }
        }
    })
    for(c=1;c<=stackcount;c++){
        topLetters += this['stack'+c].pop()
    }
    return topLetters
}
q05a=(x)=>{ return q05(x) }
q05b=(x)=>{ return q05(x,true) }
