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

q2a=(data)=>{
    let score = 0
    data.split("\n").forEach(x=>{
        moves = x.split(" ")
        score += q2gameScore[moves[1]][moves[0]]
    })
    return score
}

q2b=(data)=>{
    let score = 0
    data.split("\n").forEach(x=>{
        moves = x.split(" ")
        score += q2gameScore[q2move[moves[1]][moves[0]]][moves[0]]
    })
    return score
}
