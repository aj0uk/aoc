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
    return 0
}
