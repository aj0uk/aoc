/*
Day 1 q1 (test data) -- Passed in 0.10 ms
Day 1 q1 (full data) -- Passed in 0.60 ms
Day 1 q2 (test data) -- Passed in 0.00 ms
Day 1 q2 (full data) -- Passed in 0.50 ms
*/

q01=([a,b],f=parse(a))=> f.sort((a,b)=>b-a).slice(0, b).reduce((s,v)=> s+v,0)

parse=x=>{
    let f=[]
    y.forEach(l=>{
            if(l==""){
                f.push(c)
                c=0
            }else c+=parseInt(l)
        })
    return f
}

q1Tests=[
    ['Day 01 q1 (test data)',q01,[q01test,1],24000],
    ['Day 01 q1',            q01,[q01data,1],67622],
    ['Day 01 q2 (test data)',q01,[q01test,3],45000],
    ['Day 01 q2',            q01,[q01data,3],201491]
]
