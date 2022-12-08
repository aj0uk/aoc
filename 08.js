buildForest=data=>{
    let c=0
    forest=[]
    data.split("\n").forEach(row=>{
        forest.push(new Array)
        row.split("").forEach(tree=>{
            tree++
            tree--
            forest[c].push(tree)
        })
        c++
    })
    return forest
}

isVisible=(forest,x,y)=>{
    visible = 15
    len=forest.length
    x++;x--;y++;y--
    for(let c=y-1;c>=0;c--){
        if (forest[y][x]<=forest[c][x]){
            visible -= 1
            break;
        }
    }
    for(let c=x-1;c>=0;c--){
        if (forest[y][x]<=forest[y][c]){
            visible -= 2
            break;
        }
    }
    for(let c=y+1;c<len;c++){
        if (forest[y][x]<=forest[c][x]){
            visible -= 4
            break;
        }
    }
    for(let c=x+1;c<len;c++){
        if (forest[y][x]<=forest[y][c]){
            visible -= 8
            break;
        }
    }
    return visible>0
}

scenicScore=(forest,x,y)=>{
    len=forest.length
    t=l=b=r=0
    x++;x--;y++;y--
    if (y==0||x==0||y==len-1||x==len-1) return 0
    else {
        for(let c=y-1;c>=0;c--){
            if (c==0||forest[y][x]<=forest[c][x]){
                t = y-c
                break;
            }
        }
        for(let c=x-1;c>=0;c--){
            if (c==0||forest[y][x]<=forest[y][c]){
                l = x-c
                break;
            }
        }
        for(let c=y+1;c<len;c++){
            if (c==len-1||forest[y][x]<=forest[c][x]){
                b = c-y
                break;
            }
        }
        for(let c=x+1;c<len;c++){
            if (c==len-1||forest[y][x]<=forest[y][c]){
                r = c-x
                break;
            }
        }
    }
    return t*l*b*r
}

q08a=(x)=>{
    let visable = 0
    forest = buildForest(x)
    len=forest.length
    for(let c=0;c<len;c++){
        for(let d=0;d<len;d++){
            if (isVisible(forest,c,d)) visable++
        }
    }
    return visable
}
q08b=(x)=>{
    let bestscore = 0
    forest = buildForest(x)
    len=forest.length
    for(let c=0;c<len;c++){
        for(let d=0;d<len;d++){
            score = scenicScore(forest,c,d)
            if(score>bestscore) bestscore=score
        }
    }
    return bestscore
}
