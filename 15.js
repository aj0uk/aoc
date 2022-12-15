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
    return [poss,(diff)?diff+1:1]
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
    for(let c=data[2];c<data[3];) {
        let e=possible(data[0],c,line)
        if(!e[0]) count+=e[1]
        c+=e[1]
    }
    data[1].forEach(z=>{ if(!(beacons.includes(z))) beacons.push(z) })
    beacons.forEach(z=>{ if(z.split(",")[1]==line)  count--         })
    return count
}

q15b=(input)=>{
    let data=parseInput(input[0])
    let maxxy=input[1]
    let x=y=0
    for(let c=maxxy;c>0;c--){
        for(let d=maxxy;d>0;){
            e = possible(data[0],c,d)
            if(e[0]){
                x=c
                y=d
                break;
            }
            d-=e[1]
        }
        if(x!=0) break;
    }
    return (x*4000000)+y
}
