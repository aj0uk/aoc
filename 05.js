q05a=(x)=>{
    topLetters= ''
    setup = true
    firstsetup = true
    stackcount = 0
    x.split("\n").forEach(x=>{
        if (x=="") setup = false
        if (setup) {
//            console.log('x len',x.length)
            for (y=4;y<=x.length+1;y+=4){
                
                chunk = x.substring(y-4,y)
                if (firstsetup) {
                    window['stack'+y/4] = []
                    stackcount++
                }
                if (!(chunk[1]==" ")) window['stack'+y/4].unshift(chunk[1])
//                console.log(chunk, stackcount)
//                for(c=1;c<=stackcount;c++){
 //                   console.log('setup stack',c,'is',window['stack'+c])
//                }
            }
        firstsetup = false
        console.log('setup')
        //    console.log('setup ',x)
        } else {
            console.log('processing',x)
            line = x.split(" ")
            for (c=line[1];c=0;c--){
                window['stack'+line[5]].push(window['stack'+line[3]].pop())
                console.log('moving',window['stack'+line[3]],'to',window['stack'+line[5]])
            }
            for(c=1;c<=stackcount;c++){
                    console.log('stack',c,'is',window['stack'+c])
            }
        }
    })
    
    console.log('processing done')
    for(c=1;c<=stackcount;c++){
        topLetters += window['stack'+c].pop()
    }
    console.log('result =',topLetters,stackcount)
    return topLetters
}
q05b=(x)=>{
    return 0
}
