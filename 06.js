/*
Day 6 q1 (test data) -- Passed in 0.10 ms
Day 6 q1 (full data) -- Passed in 1.10 ms
Day 6 q2 (test data) -- Passed in 0.10 ms
Day 6 q2 (full data) -- Passed in 4.70 ms
*/

allUnique=(a,b=0)=>{
    for(let c=0;c<a.length;c++)for(let d=0;d<a.length;d++)if(a[c]==a[d]) b++
    return b==a.length
}

q06=([data,l])=>{ for(let c=l;c<=data.length;c++)if(allUnique(data.substring(c-l,c))) return c }

q6Tests=[
    ['Day 06 q1 (test data)',q06,[q06test,4],7],
    ['Day 06 q1',            q06,[q06data,4],1707],
    ['Day 06 q2 (test data)',q06,[q06test,14],19],
    ['Day 06 q2',            q06,[q06data,14],3697]
]
