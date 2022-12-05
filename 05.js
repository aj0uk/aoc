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
                        window['stack'+y/4] = []
                        stackcount++
                    }
                    if (!(chunk[1]==" ")) window['stack'+y/4].unshift(chunk[1])
                }
            firstsetup = false
            } else {
                line = x.split(" ")
                for (numberoftimes=line[1];numberoftimes>0;numberoftimes--){
                    window['stack'+line[5]].push(window['stack'+line[3]].pop())
                }
            }
        }
    })
    for(c=1;c<=stackcount;c++){
        topLetters += window['stack'+c].pop()
    }
    return topLetters
}
q05b=(x)=>{
    return 0
}
