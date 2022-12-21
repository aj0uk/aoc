/*
Day 10 q1 (test data) -- Passed in 0.10 ms
Day 10 q1 (full data) -- Passed in 0.10 ms
Day 10 q2 (test data) -- Passed in 0.10 ms
Day 10 q2 (full data) -- Passed in 0.00 ms
*/
q10=(x,debug=false)=>{
    (debug)?sumofsignals=0:picture=""
    line=0
    X=1
    instruction = x.split("\n")
    for(c=1;c<241;){
        op=instruction[line]
        cyclecount = (op=="noop")?1:2 
        for (d=0;d<cyclecount;d++){
            if(debug){
                if(debug.includes(c)) sumofsignals+=c*X
            }else{ 
                picture+=((c-1)%40==X-1||(c-1)%40==X||(c-1)%40==X+1)?"#":"."
            }
            c++
        }
        if(!(op=="noop")){
            X+=parseInt(op.split(" ")[1])
        }
        line++
    }
    return (debug)?sumofsignals:picture
}
q10a=x=>{ return q10(x,[20,60,100,140,180,220])}
q10b=x=>{ return q10(x) }
