move=(direction,number)=>{
    for(c=1;c<=number;c++){
        if(direction=="U") headx++
        if(direction=="D") headx--
        if(direction=="L") heady--
        if(direction=="R") heady++
        relx = headx-tailx
        rely = heady-taily
        if(relx==2&&rely==1) {taily++;tailx++}
        if(relx==2&&rely==-1) {taily--;tailx++}
        if(relx==-2&&rely==1) {taily++;tailx--}
        if(relx==-2&&rely==-1) {taily--;tailx--}
        if(relx==1&&rely==2) {taily++;tailx++}
        if(relx==-1&&rely==2) {taily++;tailx--}
        if(relx==1&&rely==-2) {taily--;tailx++}
        if(relx==-1&&rely==-2) {taily--;tailx--}
        if(relx==0&&rely==2) taily++
        if(relx==0&&rely==-2) taily--
        if(relx==2&&rely==0) tailx++
        if(relx==-2&&rely==0) tailx--
        if (!(tailhistory.includes(tailx+","+taily))) tailhistory.push(tailx+","+taily)
    }
}

q09a=(x)=>{
    headx=heady=tailx=taily=0
    tailhistory=[]
    x.split("\n").forEach(y=>{
        d=y.split(" ")[0]
        n=y.split(" ")[1]
        move(d,n)
    })
    return tailhistory.length
}
q09b=(x)=>{
    return 0
}
