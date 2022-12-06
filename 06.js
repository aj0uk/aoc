q06a=(x)=>{
    b = x.split("")
    markerfollows =0
    for(c=4;c<=b.length;c++){
        if (markerfollows) continue
        if (b[c-4]!=b[c-3]&&b[c-4]!=b[c-2]&&b[c-4]!=b[c-1]&&b[c-4]!=b[c]&&
        b[c-3]!=b[c-2]&&b[c-3]!=b[c-1]&&b[c-3]!=b[c]&&
        b[c-2]!=b[c-1]&&b[c-2]!=b[c]&&b[c-1]!=b[c]) markerfollows = c 
    }
    return markerfollows
}
q06b=(x)=>{
    markerfollows = uniquecount= 0
    chunk = []
    b = x.split("")
    for (c=0;c<b.length;c++){
        if (uniquecount==14){
            markerfollows = c
            console.log(markerfollows)
        }
        if(chunk.includes(b[c])){
            uniquecount = 0
        }else{
            uniquecount++
        }
        if (chunk.length=14) chunk.pop()
        chunk.unshift(b[c])
        console.log(chunk,b[c],uniquecount,markerfollows)
    }
    return markerfollows  //not working
}
