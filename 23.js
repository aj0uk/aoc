q23=(x,rounds=0)=>{
    chars=[".","#"]
    stopatstopped=false
    if(!rounds){ rounds=9999; stopatstopped=true }
    parseInput=(x)=>{
        let map=[]
        x.split("\n").forEach(y=>{
            let line=[]
            y.split("").forEach(z=>{
                line.push(z)
            })
            map.push(line)
        })
        for(let c=0;c<20;c++){
            let line=[]
            for (let d=0;d<map[0].length;d++) line.push(chars[0])
            map.unshift(line)
        }
        for(let c=0;c<100;c++){
            let line=[]
            for (let d=0;d<map[0].length;d++) line.push(chars[0])
            map.push(line)
        }
        for(let c=0;c<20;c++) for(let d=0;d<map.length;d++) map[d].unshift(chars[0])
        for(let c=0;c<100;c++) for(let d=0;d<map.length;d++) map[d].push(chars[0])
        return map
    }
    propose=(map,X,Y,r)=>{
        let c=0
        let Ylen=map.length-1
        let Xlen=map[Y].length-1
        
        let NW=((Y      && X     ) &&(map[Y-1][X-1]==".")) ? true:false
        let N =((Y               ) &&(map[Y-1][X]  ==".")) ? true:false
        let NE=((Y      && X<Xlen) &&(map[Y-1][X+1]==".")) ? true:false
        let SW=((Y<Ylen && X     ) &&(map[Y+1][X-1]==".")) ? true:false
        let S =((Y<Ylen          ) &&(map[Y+1][X]  ==".")) ? true:false
        let SE=((Y<Ylen && X<Xlen) &&(map[Y+1][X+1]==".")) ? true:false
        let W =((               X) &&(map[Y]  [X-1]==".")) ? true:false
        let E =((          X<Xlen) &&(map[Y]  [X+1]==".")) ? true:false
        
        if(!((Y===0&&SW&&S&&SE&&W&&E)||
             (X===0&&N&&NE&&S&&SE&&E)||
             (Y==Ylen&&NW&&N&&NE&&W&&E)||
             (X==Xlen&&NW&&N&&SW&&S&&W)||
             (NW&&N&&NE&&SW&&S&&SE&&W&&E))){
            while(++c<5) switch(r++%4){
                    case 0: if(NW&&N&&NE) return [X,Y-1]; break
                    case 1: if(SW&&S&&SE) return [X,Y+1]; break
                    case 2: if(NW&&W&&SW) return [X-1,Y]; break
                    case 3: if(NE&&E&&SE) return [X+1,Y]; break
                }
        }
        return 0
    }
    countempty=map=>{
        let countempty=0
        let miX=miY=map.length
        let maX=maY=0
        for(let c=0;c<map.length;c++) for(let d=0;d<map[c].length;d++) {
            if (map[c][d]=="#") {
                miX=(d<miX)?d:miX
                maX=(d>maX)?d:maX
                miY=(c<miY)?c:miY
                maY=(c>maY)?c:maY
            }
        }
        for(let c=miY;c<=maY;c++) for(let d=miX;d<=maX;d++) if(map[c][d]==".") countempty++
        return countempty
    }
    // Start here
    let round=0
    let map=parseInput(x)
    while(round<rounds){
        let movesperround=0
        let proposals=[]
        for(c=0;c<map.length;c++)for(d=0;d<map[c].length;d++){
            if(map[c][d]=="#")if(move=propose(map,d,c,round)) proposals.push([[d,c],move])
        }
        proposals.forEach(proposal=>{
            let temp=[]
            proposals.filter(each=>{
                return each[0][0]+","+each[0][1]!=proposal[0][0]+","+proposal[0][1]
            }).forEach(one=>{
                temp.push(one[1][0]+","+one[1][1])
            })
            if(!(temp.includes(proposal[1][0]+","+proposal[1][1]))){
                map[proposal[0][1]][proposal[0][0]]="."
                map[proposal[1][1]][proposal[1][0]]="#"
                movesperround++
            }
        })
        round++
        if(stopatstopped&&!movesperround) return round
    }
    return countempty(map)
} 
q23a=(x)=>{ return q23(x,10) }
q23b=(x)=>{ return q23(x) }
