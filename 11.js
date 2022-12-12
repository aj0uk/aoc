setupMonkeys=(x)=>{
    monkeys=[]
    y=x.split("\n")
    for (let c=6;c<=y.length;c+=7){
        thismonkey=[[],[],0]
        y[c-5].split(":")[1].split(",").forEach(i=>{
            thismonkey[0].push(parseInt(i))
        })
        op=y[c-4].split(":")[1].split(" ")
        thismonkey[1].push(op[4])
        if(op[5]=="old"){
            thismonkey[1].push(0)
        } else {
            thismonkey[1].push(parseInt(op[5]))
        }
        thismonkey[1].push(parseInt(y[c-3].split(":")[1].split(" ")[3]))
        thismonkey[1].push(parseInt(y[c-2].split(":")[1].split(" ")[4]))
        thismonkey[1].push(parseInt(y[c-1].split(":")[1].split(" ")[4]))
        monkeys.push(thismonkey)
    }
    return monkeys
}


add=(a,b)=>{
    let sum=""
    let carry=0
    if (Number.isInteger(a)) a=a.toString()
    if (Number.isInteger(b)) b=b.toString()
    if(a.length>b.length) for(let len=(a.length-b.length);len>0;len--) b=0+b
    if(a.length<b.length) for(let len=(b.length-a.length);len>0;len--) a=0+a
    for(let c=a.length-1;c>=0;c--){
        val = (parseInt(a[c])+parseInt(b[c])+carry).toString()
        carry=0
        
        if (val.length==2){
            carry = parseInt(val[0])
            sum = (val[1].toString())+sum
        } else {
            sum = val+sum
        }
    }
    if (carry) sum = carry.toString()+sum
    return sum
}

subtract=(a,b)=>{
    //todo
}

multiply=(a,b)=>{
    let sum=""
    let counter="0"
    if (Number.isInteger(a)) a=a.toString()
    if (Number.isInteger(b)) b=b.toString()
    while(a!==counter){
        sum=add(sum,b)
        counter=add(counter,1)
    }
    return sum
}
divide=(a,b)=>{
    let sum=""
    let counter="0"
    if (Number.isInteger(a)) a=a.toString()
    if (Number.isInteger(b)) b=b.toString()
    
    //subtract b from a and count untill a<b, then return value
    
}

q11=(x,rounds,reduceworry = false)=>{  
    monkeys=setupMonkeys(x)
    for(let c=0;c<20;c++){  
        for(let d=0;d<monkeys.length;d++){ 
            for(let e=0;e<monkeys[d][0].length;e++){
                item = monkeys[d][0].shift()
                e--
                monkeys[d][2]++
                let newworrylevel = 0 
                if(reduceworry){
                    switch(monkeys[d][1][0]){
                    case "*":
                        if (monkeys[d][1][1]){
                            newworrylevel=multiply(item,monkeys[d][1][1])
                        } else {
                            newworrylevel=multiply(item,item)
                        }
                        break
                    case "+":
                        if (monkeys[d][1][1]){
                            newworrylevel=add(item,monkeys[d][1][1])
                        } else {
                            newworrylevel=add(item,item)
    
                        }
                    }
                    if(divide(newworrylevel,monkeys[d][1][2])==0){
                        monkeys[monkeys[d][1][3]][0].push(newworrylevel)
                    } else {
                        monkeys[monkeys[d][1][4]][0].push(newworrylevel)                    
                    }
                }else{
                    switch(monkeys[d][1][0]){
                    case "*":
                        if (monkeys[d][1][1]){
                            newworrylevel=item*monkeys[d][1][1]
                        } else {
                            newworrylevel=item*item
                        }
                        break
                    case "+":
                        if (monkeys[d][1][1]){
                            newworrylevel=item+monkeys[d][1][1]
                        } else {
                            newworrylevel=item+item
    
                        }
                    }
                    newworrylevel=Math.floor(newworrylevel/3)
                    if(newworrylevel%monkeys[d][1][2]==0){
                        monkeys[monkeys[d][1][3]][0].push(newworrylevel)
                    } else {
                        monkeys[monkeys[d][1][4]][0].push(newworrylevel)                    
                    }
                }

            }
        }
    }
    inspectcount=[]
    for(c=0;c<=monkeys.length-1;c++) inspectcount.push(monkeys[c][2])
    inspectcount.sort(function(a, b){return b - a})
    return inspectcount[0]*inspectcount[1]
}
q11a=(x)=>{ return q11(x,20) }
q11b=(x)=>{ return q11(x,10000,true) }

