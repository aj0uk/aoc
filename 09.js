moveMap = [[[-1,-1],[-1,-1],[-1,0],[-1,1],[-1,1]], 
           [[-1,-1],[ 0, 0],[ 0,0],[ 0,0],[-1,1]],
           [[ 0,-1],[ 0, 0],[ 0,0],[ 0,0],[ 0,1]],
           [[ 1,-1],[ 0, 0],[ 0,0],[ 0,0],[ 1,1]],
           [[ 1,-1],[ 1,-1],[ 1,0],[ 1,1],[ 1,1]]]

q09=(x,length)=>{
    snake=[]
    snaketailhistory=[]
    for(c=0;c<length;c++) snake.push([0,0])
    x.split("\n").forEach(y=>{
        move=y.split(" ")
        for(let c=1;c<=move[1];c++){
            if(move[0]=="U") snake[0][0]++
            if(move[0]=="D") snake[0][0]--
            if(move[0]=="L") snake[0][1]--
            if(move[0]=="R") snake[0][1]++
            for(let d=1;d<snake.length;d++){
                let relx = (snake[d-1][0]-snake[d][0])
                let rely = (snake[d-1][1]-snake[d][1])
                snake[d][0]+=moveMap[relx+2][rely+2][0]
                snake[d][1]+=moveMap[relx+2][rely+2][1]
            }
            loc = snake[snake.length-1][0]+","+snake[snake.length-1][1]
            if (!(snaketailhistory.includes(loc))) snaketailhistory.push(loc)
        }
    })
    return snaketailhistory.length
}

q09a=x=>{ return q09(x,2) }
q09b=x=>{ return q09(x,10) }
