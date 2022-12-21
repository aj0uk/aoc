/*
Day 6 q1 (test data) -- Passed in 0.10 ms
Day 6 q1 (full data) -- Passed in 1.10 ms
Day 6 q2 (test data) -- Passed in 0.10 ms
Day 6 q2 (full data) -- Passed in 4.70 ms
*/
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
        if (allUnique(data.substring(c-uniqueLength,c))) {
            marker=c
            break
        }
    }
    return marker
}
q06a=(x)=>{ return q06(x,4) }
q06b=(x)=>{ return q06(x,14) }
