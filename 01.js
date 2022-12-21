/*
Day 1 q1 (test data) -- Passed in 0.10 ms
Day 1 q1 (full data) -- Passed in 0.60 ms
Day 1 q2 (test data) -- Passed in 0.00 ms
Day 1 q2 (full data) -- Passed in 0.50 ms
*/

q01=(data,topThree=false)=>{
    runningSum=highestSum=currentValue=0
    sums=[]
    data.split("\n").forEach(x=>{
        currentValue = parseInt(x)
        if(x==""){
            (topThree)?sums.push(runningSum):highestSum=(runningSum>highestSum)?runningSum:highestSum
            runningSum=0
        } else { 
            runningSum += currentValue
        }
    })
    if(topThree) sums.sort(function(a, b){return b - a})
    return topThree?sums[0]+sums[1]+sums[2]:highestSum
}
q01a=(x)=>{ return q01(x) }
q01b=(x)=>{ return q01(x,true) }
