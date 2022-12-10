moveMap = [[[-1,-1],[-1,-1],[-1,0],[-1,1],[-1,1]], 
           [[-1,-1],[ 0, 0],[ 0,0],[ 0,0],[-1,1]],
           [[ 0,-1],[ 0, 0],[ 0,0],[ 0,0],[ 0,1]],
           [[ 1,-1],[ 0, 0],[ 0,0],[ 0,0],[ 1,1]],
           [[ 1,-1],[ 1,-1],[ 1,0],[ 1,1],[ 1,1]]]

moveSnake=(direction,number,len)=>{
    for(let c=1;c<=number;c++){
        if(direction=="U") snake[0][0]++
        if(direction=="D") snake[0][0]--
        if(direction=="L") snake[0][1]--
        if(direction=="R") snake[0][1]++
        for(let d=1;d<len;d++){
            let relx = (snake[d-1][0]-snake[d][0])
            let rely = (snake[d-1][1]-snake[d][1])
            snake[d][0]+=moveMap[relx+2][rely+2][0]
            snake[d][1]+=moveMap[relx+2][rely+2][1]
        }
        if (!(snaketailhistory.includes(snake[len-1][0]+","+snake[len-1][1]))){
            snaketailhistory.push(snake[len-1][0]+","+snake[len-1][1])
        } 
    }
}

buildSnake=(length)=>{
    snake=[]
    for(c=0;c<length;c++) snake.push([0,0])
    return snake
}

q09=(x,length)=>{
    snake=buildSnake(length)
    snaketailhistory=[]
    x.split("\n").forEach(y=>{
        d=y.split(" ")[0]
        n=y.split(" ")[1]
        moveSnake(d,n,snake.length)
    })
    return snaketailhistory.length
}

q09a=x=>{ return q09(x,2) }
q09b=x=>{ return q09(x,10) }
