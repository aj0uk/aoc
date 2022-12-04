q04a=(x)=>{
    let count = 0
    x.split("\n").forEach(y=>{
        pairs = y.split(",")
        pair1 = pairs[0].split("-")
        pair2 = pairs[1].split("-")
        if ((pair1[0]>=pair2[0])&&(pair1[1]<=pair2[1])||(pair2[0]>=pair1[0])&&(pair2[1]<=pair1[1])) count++
    })
    return count
}
