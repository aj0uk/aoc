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
    marker = uniquecount= 0
    chunk = []
    b = x.split("")
    for (c=14;c<b.length;c++){
        for(d=13;d=0;d--){
            if(b[c]!=b[c-d]){
                uniquecount++
            }else{
                uniquecount=0
                return
            }
        }
        if (uniquecount==14){
            marker = c
            console.log('foundit')
        }
        console.log(uniquecount)
    }
    return markerfollows  //not working
}
