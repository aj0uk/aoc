/*
Day 8 q1 (test data) -- Passed in 0.10 ms
Day 8 q1 (full data) -- Passed in 2.80 ms
Day 8 q2 (test data) -- Passed in 0.20 ms
Day 8 q2 (full data) -- Passed in 3.50 ms
*/
buildForest=data=>{
    let c=0
    forest=[]
    data.split("\n").forEach(row=>{
        forest.push(new Array)
        row.split("").forEach(tree=>{
            tree++;tree--
            forest[c].push(tree)
        })
        c++
    })
    return forest
}
q08=(forest,x,y,scenic=false)=>{
    (scenic)?t=l=b=r=0:score=15
    len=forest.length
    x++;x--;y++;y--
    if(scenic&&(y==0||x==0||y==len-1||x==len-1)) return 0
    else {
        for(let c=y-1;c>=0;c--) if((scenic&&c==0)||forest[y][x]<=forest[c][x]){
                (scenic)?t=y-c:score-=1
                break;
            }
        for(let c=x-1;c>=0;c--) if((scenic&&c==0)||forest[y][x]<=forest[y][c]){
                (scenic)?l=x-c:score-=2
                break;
            }
        for(let c=y+1;c<len;c++) if((scenic&&c==len-1)||forest[y][x]<=forest[c][x]){
                (scenic)?b=c-y:score-=4
                break;
            }
        for(let c=x+1;c<len;c++) if((scenic&&c==len-1)||forest[y][x]<=forest[y][c]){
                (scenic)?r=c-x:score-=8
                break;
            }
    }
    return (scenic)?t*l*b*r:score
}

q08a=(x)=>{
    let visible=0
    forest=buildForest(x)
    len=forest.length
    for(let c=0;c<len;c++) for(let d=0;d<len;d++) if(q08(forest,c,d)>0) visible++
    return visible
}
q08a=(x)=>{
    let vis=0
    forest=buildForest(x)
    l=forest.length
    for(let c=0;c<l;c++) for(let d=0;d<l;d++) if(q08(forest,c,d)>0) vis++
    return vis
}

q08b=(x)=>{
    let bestscore=0
    forest=buildForest(x)
    len=forest.length
    for(let c=0;c<len;c++) for(let d=0;d<len;d++) if(score=q08(forest,c,d,true),score>bestscore) bestscore=score
    return bestscore
}
