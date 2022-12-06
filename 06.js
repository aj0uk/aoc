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
q06=(data,uniqueLength)=>{
    marker=0
    b=data.split("")
    for(c=uniqueLength;c<=b.length;c++){
        if (marker) continue
        if (allUnique(data.substring(c-uniqueLength,c))) marker=c
    }
    return marker
}
q06a=(x)=>{ return q06(x,4) }
q06b=(x)=>{ return q06(x,14) }
