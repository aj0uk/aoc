q10a=(x)=>{
    sumofsignals=0
    targetcycles=[20,60,100,140,180,220]
    line=0
    X=1
    instruction = x.split("\n")
    for(c=1;c<targetcycles[targetcycles.length-1]+1;){
        op=instruction[line]
        cyclecount = (op=="noop")?1:2 
        for (d=0;d<cyclecount;d++){
            if (targetcycles.includes(c)) sumofsignals+=c*X
            c++
        }
        if(!(op=="noop")){
            X+=parseInt(op.split(" ")[1])
        }
        line++
    }
    return sumofsignals
}
drawpixel=(sprite,c)=>{
    let l=c%40
    if (l==sprite-1||l==sprite||l==sprite+1) return "#"
    return "."
}
render=image=>{
    l=""
    for(let c=0;c<image.length+1;c++){
        if(c%40==0){
            console.log(l)
            l=""
        }
        if (image[c]==".") l+=" "
        if (image[c]=="#") l+="#"
    }
}
q10b=(x)=>{
    line=0
    X=1
    picture=""
    instruction = x.split("\n")
    for(c=1;c<241;){
        op=instruction[line]
        cyclecount = (op=="noop")?1:2 
        for (d=0;d<cyclecount;d++){
            picture+=drawpixel(X,c-1)
            c++
        }
        if(!(op=="noop")){
            X+=parseInt(op.split(" ")[1])
        }
        line++
    }
    return picture
}
