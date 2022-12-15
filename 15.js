possible=(knownLocations,x,y)=>{
    let poss=true
    knownLocations.forEach(b=>{
        let taxi=Math.abs(x-b[0])+Math.abs(y-b[1])
        if(taxi<=b[2]) poss=false
    })   
    return poss
}

parseInput=(x)=>{
    let dataArray = []
    let beaconArray = []
    let start=1000000
    let end=0
    let maxtaxi=0
    x.split("\n").forEach(line=>{
        let sensorX=parseInt(line.split(":")[0].split(",")[0].split("=")[1])
        let sensorY=parseInt(line.split(":")[0].split(",")[1].split("=")[1])
        let beaconX=parseInt(line.split(":")[1].split(",")[0].split("=")[1])
        let beaconY=parseInt(line.split(":")[1].split(",")[1].split("=")[1])
        let taxi=Math.abs(sensorX-beaconX)+Math.abs(sensorY-beaconY)
        dataArray.push([sensorX,sensorY,taxi])
        beaconArray.push(beaconX+","+beaconY)
        start=(start<sensorX)?start:sensorX
        end  =(end>sensorX)  ?end:sensorX
        maxtaxi=(taxi>maxtaxi)?taxi:maxtaxi
    })
    return [dataArray,beaconArray,start-maxtaxi,end+maxtaxi]
}
q15a=(input)=>{
    let line=input[1]
    let count=0
    let data = parseInput(input[0])
    let beacons=[]
    for(let c=data[2];c<data[3];c++) if(!possible(data[0],c,line)) count++
    data[1].forEach(z=>{ if(!(beacons.includes(z))) beacons.push(z) })
    beacons.forEach(z=>{ if(z.split(",")[1]==line)  count--         })
    return count
}
q15b=(x)=>{
    return 0
}
