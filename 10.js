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
q10b=(x)=>{
    return 0
}
