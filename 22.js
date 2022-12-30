q22a=(x)=>{
    canMove=(map,X,Y,dir)=>{
        switch(dir){
        case 0:
            if(X==map[Y].length-1) X=0
            else X++
            while(map[Y][X]==" ") if(++X>map[Y].length-1) X=0
            break
        case 1:
            if(Y==map.length-1) Y=0
            else Y++
            while(map[Y][X]==" ") if(++Y>map.length-1) Y=0
            break
        case 2:
            if(X==0) X=map[Y].length-1
            else X--
            while(map[Y][X]==" ") if(--X<0) X=map[Y].length-1
            break
        case 3:
            if(Y==0) Y=map.length-1
            else Y--
            while(map[Y][X]==" ") if(--Y<0) Y=map.length-1
            break
        }        
        if(map[Y][X]==".") return true
        if(map[Y][X]=="#") return false
    }
    newLocation=(map,X,Y,move,dir)=>{
        while(move>0&&canMove(map,X,Y,dir)){
            switch(dir){
            case 0:
                if(++X>map[Y].length-1) X=0
                break
            case 1:
                if(++Y>map.length-1) Y=0
                break
            case 2:
                if(--X<0) X=map[Y].length-1
                break
            case 3:
                if(--Y<0) Y=map.length-1
            }
            if(map[Y][X]==".") move--
        }
        return [X,Y]
    }
    newDir=(currentDir,rotation)=>{
        if(rotation=="R"){
            if(currentDir==3) return 0
            else return ++currentDir
        }else{
            if(currentDir==0) return 3
            else return --currentDir
        }
    }
    parseInput=x=>{
        let map=[]
        let moves=""
        let y=x.split("\n")
        let maxX=0
        y.forEach(line=>{ if(line.length>maxX&&line.length<1000) maxX=line.length })
        let c=0
        for(;c<y.length;c++){
            if(y[c]=="") break
            let line=[]
            for(let d=0;d<maxX;d++){
                if(d>=y[c].length) line.push(" ")
                else line.push(y[c][d])
            }
            map.push(line)
        }
        moves=y[++c]
        return [map,moves]
    }
    let input=parseInput(x)
    let map=input[0]
    let move=input[1].split("")
    let currentXY=[0,0]
    for(let c=0;map[0][c]!=".";) currentXY[0]=++c
    let count=""
    let dir=0
    for(let c=0;c<move.length;c++){
        if(move[c]=="L"||move[c]=="R"){
            currentXY=newLocation(map,currentXY[0],currentXY[1],parseInt(count),dir)
            dir=newDir(dir,move[c])
            count=""
        } else count=count+move[c]
    }
    currentXY=newLocation(map,currentXY[0],currentXY[1],parseInt(count),dir)
    return (1000*(currentXY[1]+1))+(4*(currentXY[0]+1))+dir
}

q22b=(x)=>{
    return 0
}
