/*
Day 14 q1 (test data) -- Passed in 0.80 ms
Day 14 q1 (full data) -- Passed in 37.80 ms
Day 14 q2 (test data) -- Passed in 0.70 ms
Day 14 q2 (full data) -- Passed in 790.20 ms
*/
getLargestCords=(x)=>{
    let largestX = 2
    let largestY = 2
    x.split("\n").forEach(y=>{
        y.split("->").forEach(z=>{
            cord=z.split(",")
            let possX=parseInt(cord[0])
            let possY=parseInt(cord[1])
            largestX=(possX>largestX)?possX:largestX
            largestY=(possY>largestY)?possY:largestY
        })
    })
    return [largestX,largestY]
}

createMap=(x,floor=false)=>{
    let map = []
    edges=getLargestCords(x)
    if (floor) X=((parseInt(edges[0])+2)*2)
    else X=parseInt(edges[0])+2
    Y = parseInt(edges[1])+2
    for(let c=0;c<=Y;c++) {
        let line=[]
        for(let d=0;d<=X;d++){
            if(floor&&c==Y) line.push(["#"])
            else line.push(["."])
        }
        map.push(line)
    }
    x.split("\n").forEach(y=>{
        line=y.split("->")
        for(let c=0;c<line.length-1;c++){
            startx=parseInt(line[c].split(",")[0])
            starty=parseInt(line[c].split(",")[1])
            endx=parseInt(line[c+1].split(",")[0])
            endy=parseInt(line[c+1].split(",")[1])
            if (startx==endx){
                if(starty>endy){
                    for(let d=starty;d>=endy;d--) map[d][startx] ="#"
                } else {
                    for(let d=starty;d<=endy;d++) map[d][startx] ="#"
                }
            } else {
                if(startx>endx){//move left
                    for(let d=startx;d>=endx;d--) map[starty][d] ="#"
                }else{
                    for(let d=startx;d<=endx;d++) map[starty][d] ="#"
                }
            }
        }
    })
    return map
}

finalPosition=(map,currentX,currentY)=>{
    if(map[0][500]=="o") return 0
    if(currentY+1>=map.length) return 0
    if(map[currentY+1][currentX]==".")   return finalPosition(map,currentX,currentY+1)
    if(map[currentY+1][currentX-1]==".") return finalPosition(map,currentX-1,currentY+1)
    if(map[currentY+1][currentX+1]==".") return finalPosition(map,currentX+1,currentY+1)
    return [currentX,currentY]
}

dropSand=(map,fromX=500,drawtoscreen = false)=>{
    count=0
    while(drop=finalPosition(map,fromX,0)){
        map[drop[1]][drop[0]]="o"
        count++
        if(drawtoscreen) document.body.innerHTML=drawMap(map)
    }
    return count
}

q14a=(x)=>{ return dropSand(createMap(x)) }
q14b=(x)=>{ return dropSand(createMap(x,true)) }
