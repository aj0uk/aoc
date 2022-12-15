possible=(knownLocations,x,y)=>{
    let poss=true
    let diff=0
    for(b=0;b<knownLocations.length;b++){
        let taxi=Math.abs(x-knownLocations[b][0])+Math.abs(y-knownLocations[b][1])
        if(taxi<=knownLocations[b][2]) {
            diff=Math.abs(taxi-knownLocations[b][2])
            poss=false
            break;
        }
    }
    return [poss,diff]
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
        start  =(start<sensorX)?start:sensorX
        end    =(end>sensorX)  ?  end:sensorX
        maxtaxi=(taxi>maxtaxi) ? taxi:maxtaxi
    })
    return [dataArray,beaconArray,start-maxtaxi,end+maxtaxi]
}

q15a=(input)=>{
    let line=input[1]
    let count=0
    let data=parseInput(input[0])
    let beacons=[]
    for(let c=data[2];c<data[3];c++) if(!possible(data[0],c,line)[0]) count++
    data[1].forEach(z=>{ if(!(beacons.includes(z))) beacons.push(z) })
    beacons.forEach(z=>{ if(z.split(",")[1]==line)  count--         })
    return count
}

q15b=(input)=>{
    let data=parseInput(input[0])
    let maxxy=input[1]
    let x=y=0
    for(let c=0;c<=maxxy;c++){
        for(let d=0;d<=maxxy;){
            e = possible(data[0],c,d)
            if(e[0]){
                x=c
                y=d
                break;
            }
            next=(e[1])?e[1]:1
            d+=next
        }
        if(x!=0) break;
    }
    return (x*4000000)+y
}
