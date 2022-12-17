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

q17=(x)=>{
    let p=y=0
    let runs=2022
    let world=[[".",".",".",".",".",".","."],[".",".",".",".",".",".","."],[".",".",".",".",".",".","."],["#","#","#","#","#","#","#"]]
    let jets=x.split("")
    while(p<runs){
        let line3isempty=true
        while(line3isempty){
            for(let c=0;c<7;c++) if(!(world[3][c]==".")) line3isempty=false
            if (line3isempty) world.shift()
        }
        let next=newPiece(p++)
        for(let c=next.length-1;c>=0;c--) world.unshift(next[c])
        stopped=false
        while(!stopped){
            let canmoveright=true
            let canmoveleft=true
            for(let c=0;c<world.length;c++){
                if(world[c][6]=="@") canmoveright=false
                if(world[c][0]=="@") canmoveleft=false
                for(let d=0;d<7;d++){
                    if(canmoveright&&world[c][d]=="@"&&world[c][d+1]=="#") canmoveright=false
                    if(canmoveleft &&world[c][d]=="@"&&world[c][d-1]=="#") canmoveleft =false
                }
            }  
            if(canmoveright&&jets[y%(jets.length)]==">") for(let c=0;c<world.length;c++) for(let d=5;d>=0;d--) if(world[c][d]=="@"){
                        world[c][d] ="."
                        world[c][d+1] ="@"
                    }
            if(canmoveleft&&jets[y%(jets.length)]=="<") for(let c=world.length-1;c>=0;c--) for(let d=1;d<7;d++) if(world[c][d]=="@"){
                        world[c][d] ="."
                        world[c][d-1] ="@"
                    }
            y++
            let canmovedown=true
            for(let c=0;c<world.length;c++) for(let d=0;d<7;d++)if(world[c][d]=="@")if(world[c+1][d]=="#") canmovedown=false
            if(canmovedown){
                for(let c=world.length-1;c>=0;c--) for(let d=0;d<7;d++) if(world[c][d]=="@"){
                    world[c][d]="."
                    world[c+1][d]="@"
                }
            }else{
                for(let c=0;c<world.length-1;c++) for(let d=0;d<7;d++) if(world[c][d]=='@') world[c][d]='#'
                stopped=true
            }
        }
    }
    toplineempty=true
    while(toplineempty){
        for(let c=0;c<7;c++) if(!(world[0][c]==".")) toplineempty=false
        if (toplineempty) world.shift()
    }
    console.log(world)
    return world.length-1
}

q17a=(x)=>{ return q17(x) }
