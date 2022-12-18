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
q18b=x=>{ return 0 }
