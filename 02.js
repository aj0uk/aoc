/*
Day 2 q1 (test data) -- Passed in 0.00 ms
Day 2 q1 (full data) -- Passed in 0.90 ms
Day 2 q2 (test data) -- Passed in 0.00 ms
Day 2 q2 (full data) -- Passed in 1.00 ms
*/

map02 = {
    X:{A:4,B:1,C:7},
    Y:{A:8,B:5,C:2},
    Z:{A:3,B:9,C:6}
}

map03 = {
    X:{A:"Z",B:"X",C:"Y"},
    Y:{A:"X",B:"Y",C:"Z"},
    Z:{A:"Y",B:"Z",C:"X"}
}

q02=([a,b,c=0])=> a.split("\n").reduce((s,v)=> s+b[(c)?c[v.split(" ")[1]][v.split(" ")[0]]:v.split(" ")[1]][v.split(" ")[0]] ,0)

q2Tests=[
    ['Day 02 q1 (test data)',q02,[q02test,map02],15],
    ['Day 02 q1',            q02,[q02data,map02],14264],
    ['Day 02 q2 (test data)',q02,[q02test,map02,map03],12],
    ['Day 02 q2',            q02,[q02data,map02,map03],12382]
]
