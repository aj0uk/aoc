/*
Day 2 q1 (test data) -- Passed in 0.00 ms
Day 2 q1 (full data) -- Passed in 0.90 ms
Day 2 q2 (test data) -- Passed in 0.00 ms
Day 2 q2 (full data) -- Passed in 1.00 ms
*/


q2gameScore = {
    X:{A:4,B:1,C:7},
    Y:{A:8,B:5,C:2},
    Z:{A:3,B:9,C:6}
}
q2move = {
    X:{A:"Z",B:"X",C:"Y"},
    Y:{A:"X",B:"Y",C:"Z"},
    Z:{A:"Y",B:"Z",C:"X"}
}

q02=(data,altmove=false)=>{
    let score = 0
    data.split("\n").forEach(x=>{
        moves = x.split(" ")
        score += q2gameScore[(altmove)?q2move[moves[1]][moves[0]]:moves[1]][moves[0]]
    })
    return score
}
q02a=(x)=>{ return q02(x) }
q02b=(x)=>{ return q02(x,true) }
