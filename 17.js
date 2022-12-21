/*
Day 17 q1 (test data) -- Passed in 52.40 ms
Day 17 q1 (full data) -- Passed in 55.80 ms
Day 17 q2 (test data) -- Failed in 124.60 ms
*/
newPiece=p=>{
    let pieces=[
[[".",".","@","@","@","@","."]],
    
[[".",".",".","@",".",".","."],
 [".",".","@","@","@",".","."],
 [".",".",".","@",".",".","."]],
     
[[".",".",".",".","@",".","."],
 [".",".",".",".","@",".","."],
 [".",".","@","@","@",".","."]],
     
[[".",".","@",".",".",".","."],
 [".",".","@",".",".",".","."],
 [".",".","@",".",".",".","."],
 [".",".","@",".",".",".","."]],
     
[[".",".","@","@",".",".","."],
 [".",".","@","@",".",".","."]]
]
    return pieces[p%5]
}

q17=(x,cheat=false)=>{
    let p=y=dropped=0
    let jets=x.split("")
    let runs=(cheat)?(jets.length*5)+1:2022
    let world=[[".",".",".",".",".",".","."],[".",".",".",".",".",".","."],[".",".",".",".",".",".","."],["#","#","#","#","#","#","#"]]
    while(p<runs){
        for(let c=world.length-2;c>10;c--){
            if((world[c][0]=="#"||world[c+1][0]=="#")&&
               (world[c][1]=="#"||world[c+1][1]=="#")&&
               (world[c][2]=="#"||world[c+1][2]=="#")&&
               (world[c][3]=="#"||world[c+1][3]=="#")&&
               (world[c][4]=="#"||world[c+1][4]=="#")&&
               (world[c][5]=="#"||world[c+1][5]=="#")&&
               (world[c][6]=="#"||world[c+1][6]=="#")){ 
                dropped++
                world.pop()
            }
        }
        let line3isempty=true
        while(line3isempty){
            for(let c=0;c<7;c++) if(!(world[3][c]==".")) line3isempty=false
            if (line3isempty) world.shift()
        }

        if(cheat&&p==(jets.length*5)){
                    //1514285714288
                    //9007199254740992
            multiplier=(1000000000000/p)
            runs=(1000000000000%p)
            p=0
            dropped=((world.length+dropped)*multiplier)
        }
       
        let next=newPiece(p++)
        for(let c=next.length-1;c>=0;c--) world.unshift(next[c])
        stopped=false
        while(!stopped){
            let move=jets[y++%(jets.length)]
            let len=world.length
            let r=l=dn=true
            for(let c=0;c<world.length;c++){
                if(world[c][6]=="@") r=false
                if(world[c][0]=="@") l=false
                for(let d=0;d<7;d++){
                    if(r&&world[c][d]=="@"&&world[c][d+1]=="#") r=false
                    if(l&&world[c][d]=="@"&&world[c][d-1]=="#") l=false
                }
            }
            if(r&&move==">") for(let c=0;c<len;c++) for(let d=5;d>=0;d--) if(world[c][d]=="@"){
                        world[c][d] ="."
                        world[c][d+1] ="@"
                    }
            if(l&&move=="<") for(let c=0;c<len;c++) for(let d=1;d<7;d++) if(world[c][d]=="@"){
                        world[c][d] ="."
                        world[c][d-1] ="@"
                    }
            for(let c=0;c<len;c++) for(let d=0;d<7;d++) if(world[c][d]=="@")if(world[c+1][d]=="#") dn=false
            if(dn){
                for(let c=len-1;c>=0;c--) for(let d=0;d<7;d++) if(world[c][d]=="@"){
                    world[c][d]="."
                    world[c+1][d]="@"
                }
            }else{
                for(let c=0;c<len-1;c++) for(let d=0;d<7;d++) if(world[c][d]=='@') world[c][d]='#'
                stopped=true
            }
        }     
    }
    toplineempty=true
    while(toplineempty){
        for(let c=0;c<7;c++) if(!(world[0][c]==".")) toplineempty=false
        if (toplineempty) world.shift()
    }
    return ((world.length-1)+dropped)
}

q17a=(x)=>{ return q17(x) }
q17b=(x)=>{ return q17(x,true) }
