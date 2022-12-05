q05a=(x)=>{
    topLetters= ''
    setup = true
    firstsetup = true
    stacks = []
    x.split("\n").forEach(x=>{
        if (x=="") setup = false
        if (setup) {
            console.log('x len',x.length)
            for (y=4;y<=x.length+1;y+=4){
                if (firstsetup) {
                    a = new Array()
                    stacks.push(a)
                }
                chunk = x.substring(y-4,y)
                stacks[y/4].unshift(chunk[1])

                console.log(chunk, stacks)
            }
        //    console.log('setup ',x)
        } else {
            //do instructions 
          //pop push etc.
        }
        stacks.forEach(x=>{
            topLetters += stacks[x].pop()
        })
    })
    return topLetters
}
q05b=(x)=>{
    return 0
}
