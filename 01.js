q1a=(data)=>{
    runningSum=highestSum=currentValue=0
    data.split("\n").forEach(x=>{
        currentValue = parseInt(x)
        if(x==""){
            if(runningSum>highestSum) highestSum = runningSum
            runningSum = 0
        } else { 
            runningSum += currentValue
        }
    })
    return highestSum
}

q1b=(data)=>{
    runningSum=currentValue=0
    sums = []
    data.split("\n").forEach(x=>{
        currentValue = parseInt(x)
        if(x==""){
            sums.push(runningSum)
            runningSum = 0
        } else {
            runningSum += currentValue
        }
    })
    sums.sort(function(a, b){return b - a})
    return sums[0]+sums[1]+sums[2]
}
