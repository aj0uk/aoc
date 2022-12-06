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
        if (marker) continue
        if (allUnique(x.substring(c-14,c))) marker=c
    }
    return marker
}
allUnique=a=>{
    matchcount=0
    len=a.length
    for (let c=0;c<len;c++){
        for(let d=0;d<len;d++){
            if(a[c]==a[d]) matchcount++
        }
    }
    return matchcount == len
}
