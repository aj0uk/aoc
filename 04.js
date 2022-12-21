/*
Day 4 q1 (test data) -- Passed in 0.00 ms
Day 4 q1 (full data) -- Passed in 1.60 ms
Day 4 q2 (test data) -- Passed in 0.00 ms
Day 4 q2 (full data) -- Passed in 0.60 ms
*/
q04=(data,rules=0)=>{
    let count = 0
    data.split("\n").forEach(y=>{
        pairs = y.split(",")
        pair1 = pairs[0].split("-")
        pair2 = pairs[1].split("-")
        a = parseInt(pair1[0])
        b = parseInt(pair1[1])
        c = parseInt(pair2[0])
        d = parseInt(pair2[1])
        switch (rules){
            case 1:
                if ((a >= c && a <=d )||(b >= c && b <= d)||(a <= c && b >=d)||(c <=a && d >= b)) count++
                break;
            default:
                if ((a>=c && b<=d)||(c>=a && d<=b)) count++
        }
    })
    return count
}
q04a=(x)=>{ return q04(x) }
q04b=(x)=>{ return q04(x,1) }
