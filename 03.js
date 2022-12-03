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
    sum=0
    bags = x.split("\n")
    for(c=2;c<bags.length;c+=3){
        teambadge=0
        firstbag = bags[c].split("")
        firstbag.forEach(x=>{
            if (bags[c-1].includes(x)&&bags[c-2].includes(x)&&!teambadge) {
                teambadge=x
                sum+=q3letterValue(x)
            }
        })
    }
    return sum
}
