/*
Day 3 q1 (test data) -- Passed in 0.20 ms
Day 3 q1 (full data) -- Passed in 0.70 ms
Day 3 q2 (test data) -- Passed in 0.10 ms
Day 3 q2 (full data) -- Passed in 0.30 ms
*/
q3letterValue=(char)=>{
    val = char.charCodeAt(0)
    if (val > 95){
        return val-96
    }else{
        return val-38 
    }
}
q3a=(x)=>{
    let sum = 0
    x.split("\n").forEach(x=>{
        bagcontents = []
        len = x.length
        firsthalf = x.substr(0,(len/2))
        secondhalf = x.substr((len/2),len)
        firsthalf.split("").forEach(x=>{
            if (secondhalf.includes(x) && !bagcontents.includes(x)) {
                bagcontents.push(x)
                sum+=q3letterValue(x)
            }
        })
    })
    return sum
}
q3b=(x)=>{
    let sum = 0
    bags = x.split("\n")
    for(c=2;c<bags.length;c+=3){
        teambadge=0
        bags[c].split("").forEach(x=>{
            if (bags[c-1].includes(x)&&bags[c-2].includes(x)&&!teambadge) {
                teambadge=sum+=q3letterValue(x)
            }
        })
    }
    return sum
}
