q18a=x=>{
    let data=x.split("\n")
    let count=data.length*6
    data.forEach(line=>{
        x=parseInt(line.split(",")[0])
        y=parseInt(line.split(",")[1])
        z=parseInt(line.split(",")[2])
        if(data.includes((x+1)+","+y+","+z)) count--
        if(data.includes((x-1)+","+y+","+z)) count--
        if(data.includes(x+","+(y+1)+","+z)) count--
        if(data.includes(x+","+(y-1)+","+z)) count--
        if(data.includes(x+","+y+","+(z+1))) count--
        if(data.includes(x+","+y+","+(z-1))) count--
    })
    return count
}
isEdge=(world,x,y,z)=>{
    let edge = 63
    for (c=x-1;c>0;c--) if(world[c][y][z]==1)                 { edge-=1; break }
    for (c=x+1;c<world.length;c++) if(world[c][y][z]==1)      { edge-=2; break }
    for (c=y-1;c>0;c--) if(world[x][c][z]==1)                 { edge-=4; break }
    for (c=y+1;c<world[1].length;c++) if(world[x][c][z]==1)   { edge-=8; break }
    for (c=z-1;c>0;c--) if(world[x][y][c]==1)                 { edge-=16;break }
    for (c=z+1;c<world[1][1].length;c++) if(world[x][y][c]==1){ edge-=32;break }
    return edge
}
q18b=(x)=>{
    let data=x.split("\n")
    let maX=maY=maZ=0
    let count=data.length*6
    data.forEach(line=>{
        let XYZ=line.split(",")
        maX=parseInt((XYZ[0]>maX)?XYZ[0]:maX)
        maY=parseInt((XYZ[1]>maY)?XYZ[1]:maY)
        maZ=parseInt((XYZ[2]>maZ)?XYZ[2]:maZ)
    })
    let world=[]
    for(let b=0;b<=maX+2;b++){
        let plane=[]
        for(let c=0;c<=maY+2;c++){
            let row=[]
            for(let d=0;d<=maZ+2;d++){
                row.push(0)
            }
            plane.push(row)
        }    
        world.push(plane)
    }
    data.forEach(line=> { world[line.split(",")[0]][line.split(",")[1]][line.split(",")[2]]=1 })
    for(let b=1;b<=maX;b++) for(let c=1;c<=maY;c++) for(let d=1;d<=maZ;d++){
        if(!world[b][c][d]&&!isEdge(world,b,c,d)){
            world[b][c][d]=1
            count+=6
        }
    }
    for(let b=1;b<=maX;b++) for(let c=1;c<=maY;c++) for(let d=1;d<=maZ;d++){
        if(world[b][c][d]===1){
            if(world[b][c][d+1]===1) count-=2
            if(world[b][c+1][d]===1) count-=2
            if(world[b+1][c][d]===1) count-=2
        }
    }
    return count
}
