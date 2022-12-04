q04a=(x)=>{
    let count = 0
    x.split("\n").forEach(y=>{
        pairs = y.split(",")
        pair1 = pairs[0].split("-")
        pair2 = pairs[1].split("-")
        a = parseInt(pair1[0])
        b = parseInt(pair1[1])
        c = parseInt(pair2[0])
        d = parseInt(pair2[1])
        if ((a>=c)&&(b<=d)||(c>=a)&&(d<=b)) count++
    })
    return count
}

q04b=(x)=>{
    let count = 0
    x.split("\n").forEach(y=>{
        pairs = y.split(",")
        pair1 = pairs[0].split("-")
        pair2 = pairs[1].split("-")
        a = parseInt(pair1[0])
        b = parseInt(pair1[1])
        c = parseInt(pair2[0])
        d = parseInt(pair2[1])
        if ((a >= c && a <=d )||(b >= c && b <= d)||(a <= c && b >=d)) count++
    })
    return count
}
