
map00=[".","#"]

propose=(map,X,Y,r)=>{
    let c=0
    let Ylen=map.length-1
    let Xlen=map[Y].length-1
    let NW=(map[Y-1][X-1]==map00[0]) ? true:false
    let N =(map[Y-1][X]  ==map00[0]) ? true:false
    let NE=(map[Y-1][X+1]==map00[0]) ? true:false
    let SW=(map[Y+1][X-1]==map00[0]) ? true:false
    let S =(map[Y+1][X]  ==map00[0]) ? true:false
    let SE=(map[Y+1][X+1]==map00[0]) ? true:false
    let W =(map[Y]  [X-1]==map00[0]) ? true:false
    let E =(map[Y]  [X+1]==map00[0]) ? true:false
    if(!(NW&&N&&NE&&SW&&S&&SE&&W&&E)){
        while(++c<5) switch(r++%4){
            case 0: if(NW&&N&&NE) return [X,Y-1]
            case 1: if(SW&&S&&SE) return [X,Y+1]
            case 2: if(NW&&W&&SW) return [X-1,Y]
            case 3: if(NE&&E&&SE) return [X+1,Y]
        }
    }
    return 0
}

q23=([x,rounds])=>{
    stopatstopped=false
    if(!rounds){ rounds=9999; stopatstopped=true }
    let round=0
    let map=parse(x)
    while(round<rounds){
        let movesperround=0
        let proposals=[]
        for(let c=0;c<map.length;c++)for(let d=0;d<map[c].length;d++){
            if(map[c][d]==map00[1])if(move=propose(map,d,c,round)) proposals.push([[d,c],move])
        }
        proposals.forEach(proposal=>{
            let temp=[]
            proposals.filter(each=>{
                return each[0][0]+","+each[0][1]!=proposal[0][0]+","+proposal[0][1]
            }).forEach(one=>{
                temp.push(one[1][0]+","+one[1][1])
            })
            if(!(temp.includes(proposal[1][0]+","+proposal[1][1]))){
                map[proposal[0][1]][proposal[0][0]]=map00[0]
                map[proposal[1][1]][proposal[1][0]]=map00[1]
                movesperround++
            }
        })
        round++
        if(stopatstopped&&!movesperround) return round
    }
    return countempty(map)
}

parse=x=>{
        let y=x.split("\n")
        y.forEach(l=>{
        let line=[]
        l.split("").forEach(z=> line.push(z) )
            map.push(line)
        })
        for(let c=0;c<20;c++){
            let line=[]
            for (let d=0;d<map[0].length;d++) line.push(map00[0])
            map.unshift(line)
        }
        for(let c=0;c<100;c++){
            let line=[]
            for (let d=0;d<map[0].length;d++) line.push(map00[0])
            map.push(line)
        }
        for(let c=0;c<20;c++) for(let d=0;d<map.length;d++) map[d].unshift(map00[0])
        for(let c=0;c<100;c++) for(let d=0;d<map.length;d++) map[d].push(map00[0])
        return map
}
