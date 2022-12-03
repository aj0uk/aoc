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
                c = x.charCodeAt(0)
                if (c > 95){
                    sum+=c-96
                }else{
                    sum+=c-38 
                }
            }
        })
    })
    return sum
}

q3b=(x)=>{
    sum=0
    bags = x.split("\n")
    for(c=2;c<bags.length;c=c+3){
        teambadge=0
        firstbag = bags[c].split("")
        firstbag.forEach(x=>{
            if (!teambadge){
                if (bags[c-1].includes(x)&&bags[c-2].includes(x)) {
                    teambadge=x
                    if (x.charCodeAt(0) > 95){
                        sum+=x.charCodeAt(0)-96
                    }else{
                        sum+=x.charCodeAt(0)-38 
                    }
                }
            }
        })
    }
    return sum
}
