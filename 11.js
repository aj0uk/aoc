/*
Day 11 q1 (test data) -- Passed in 0.30 ms
Day 11 q1 (full data) -- Passed in 0.30 ms
Day 11 q2 (test data) -- Failed in 0.10 ms
*/
makeInt=(x,big)=>{ return (big)?BigInt(x):parseInt(x) }

setupMonkeys=(x,big)=>{
    monkeys=[]
    let y=x.split("\n")
    for (let c=6;c<=y.length;c+=7){
        thismonkey=[[],[],0]
        y[c-5].split(":")[1].split(",").forEach(i=>{
            thismonkey[0].push(makeInt(i,big))
        })
        op=y[c-4].split(":")[1].split(" ")
        thismonkey[1].push(op[4])
        if(op[5]=="old"){
            thismonkey[1].push(makeInt(0,big))
        } else {
            thismonkey[1].push(makeInt(op[5],big))
        }
        thismonkey[1].push(makeInt(y[c-3].split(":")[1].split(" ")[3],big))
        thismonkey[1].push(makeInt(y[c-2].split(":")[1].split(" ")[4],big))
        thismonkey[1].push(makeInt(y[c-1].split(":")[1].split(" ")[4],big))
        monkeys.push(thismonkey)
    }
    return monkeys
}

q11=(x,rounds,reduceworry = false)=>{  
    monkeys=setupMonkeys(x,reduceworry)
    for(let c=0;c<rounds;c++){  
        for(let d=0;d<monkeys.length;d++){ 
            for(let e=0;e<monkeys[d][0].length;e++){
                item = makeInt(monkeys[d][0].shift(),reduceworry)
                e--
                monkeys[d][2]++
                let newworrylevel = 0
                switch(monkeys[d][1][0]){
                case "*":
                    if (monkeys[d][1][1]) newworrylevel=item*monkeys[d][1][1]
                    else newworrylevel=item*item
                    break
                case "+":
                    if (monkeys[d][1][1]) newworrylevel=item+monkeys[d][1][1]
                    else newworrylevel=item+item
                }
                newworrylevel=(reduceworry)?newworrylevel:newworrylevel=Math.floor(newworrylevel/3)
                
                if(newworrylevel%monkeys[d][1][2]==0) monkeys[monkeys[d][1][3]][0].push(newworrylevel)
                else monkeys[monkeys[d][1][4]][0].push(newworrylevel)                    
            }
        }
    }
    inspectcount=[]
    for(c=0;c<=monkeys.length-1;c++) inspectcount.push(monkeys[c][2])
    inspectcount.sort(function(a, b){return b - a})
    return inspectcount[0]*inspectcount[1]
}
q11a=(x)=>{ return q11(x,20) }
q11b=(x)=>{ return q11(x,10,true) }
