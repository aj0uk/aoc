propose=(map,X,Y,r)=>{
//    console.log('check for propose',X,Y,r)
    let c=0
    let Ylen=map.length-1
    let Xlen=map[Y].length-1
    
    let NW=((Y      && X     ) &&(map[Y-1][X-1]==".")) ? true:false
    let N =((Y               ) &&(map[Y-1][X]  ==".")) ? true:false
    let NE=((Y      && X<Xlen) &&(map[Y-1][X+1]==".")) ? true:false
    let SW=((Y<Ylen && X     ) &&(map[Y+1][X-1]==".")) ? true:false
    let S =((Y<Ylen          ) &&(map[Y+1][X]  ==".")) ? true:false
    let SE=((Y<Ylen && X<Xlen) &&(map[Y+1][X+1]==".")) ? true:false
    let W =((X               ) &&(map[Y]  [X-1]==".")) ? true:false
    let E =((X<Xlen          ) &&(map[Y]  [X+1]==".")) ? true:false
    
    if(!((Y===0&&SW&&S&&SE&&W&&E)|| 
         (X===0&&N&&NE&&S&&SE&&E)|| 
         (Y==Ylen&&NW&&N&&SW&&S&&W)||
         (X==Xlen&&NW&&N&&NE&&W&&E)||
         (NW&&N&&NE&&SW&&S&&SE&&W&&E))){
        while(++c<5){     
            switch(r%4){
                case 0:
//                    console.log('check N of',X,Y)
                    if(NW&&N&&NE) return [X,Y-1]
                    break
                case 1: 
//                    console.log('check S of',X,Y)
                    if(SW&&S&&SE) return [X,Y+1]
                    break
                case 2:
//                    console.log('check W of',X,Y)
                    if(NW&&W&&SW) return [X-1,Y]
                    break
                case 3:
//                    console.log('check E of',X,Y)
                    if(NE&&E&&SE) return [X+1,Y]
                    break
            }   
            r++
        }
    }
   return 0
}

q23a=(x)=>{
    let countempty=round=0
    let rounds=10
    let map=[]
    x.split("\n").forEach(y=>{
        let line=[]
        y.split("").forEach(z=>{
            line.push(z)
        })
        map.push(line)
    })
/*    let check=0
    for(c=0;c<map.length;c++){
        for(d=0;d<map[c].length;d++){
                if(map[c][d]=="#") check++
        }
    }*/
    while(round<rounds){
        cc=0
//        console.log('--- start of round',round+1,'----')
        let proposals=[]
        for(c=0;c<map.length;c++){
            for(d=0;d<map[c].length;d++){
                if(map[c][d]=="#"){
//                    console.log('map c d is #',c,d)
                    move=propose(map,d,c,round)
                    if (move!==0) { 
                        proposals.push([[d,c],move])
//                        console.log('pushed',[d,c],move,round)
                    }// else console.log('candidate',d,c,'has no options')
                }
            }
        }
//        console.log(proposals)
        let cmove=0
        proposals.forEach(proposal=>{
            let temp = proposals.filter(each=>{
                return each[0][0]+","+each[0][1]!=proposal[0][0]+","+proposal[0][1]
            })
//            if(!(temp.length==proposals.length-1)) console.log('is temp not one less than proposals')
            let temp2=[]
            temp.forEach(one=>{
                temp2.push(one[1][0]+","+one[1][1])
            })
            if(!(temp2.includes(proposal[1][0]+","+proposal[1][1]))){
                map[proposal[0][1]][proposal[0][0]]="."
                map[proposal[1][1]][proposal[1][0]]="#"
//                console.log(++cmove,'-',proposal[0][1],proposal[0][0],'move to',proposal[1][1],proposal[1][0])
            }// else console.log(++cmove,'- ignored proposal',proposal[0][1],proposal[0][0],'move to',proposal[1][1],proposal[1][0])
        })

        round++
//        console.log('----',round,'----')
//       map.forEach(line=>{
//            console.log(cc++,line.join(''))
//        })
//        console.log('---- end of round',round,'----')
/*        let endcheck=0
        for(c=0;c<map.length;c++){
            for(d=0;d<map[c].length;d++){
                    if(map[c][d]=="#") endcheck++
            }
        }
        if(check!=endcheck) console.log('something is wrong ----------!',check, endcheck)*/
//        console.log('proposals',proposals)
//        console.log('temp',temp)

//        console.log('map',map)
    }
    miX=miY=map.length
    maX=maY=0
//    console.log('nins',miX,miY,maX,maY)
    for(let c=0;c<map.length;c++) for(let d=0;d<map[c].length;d++) {
        if (map[c][d]=="#") {
//            console.log('location hit',c,d)
            miX=(d<miX)?d:miX
            maX=(d>maX)?d:maX
            miY=(c<miY)?c:miY
            maY=(c>maY)?c:maY
//                console.log(miX,maX,miY,maY)

        }
    }
//    countempty = 0
    for(let c=miY;c<=maY;c++) for(let d=miX;d<=maX;d++) if(map[c][d]==".") countempty++
//    console.log(countempty)
    return countempty
} //2521 too low

q23b=(x)=>{
    return 0
}
