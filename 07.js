getSize=x=>{
    let size=0
    if (Number.isInteger(x[1])) {
        size += x[1]
    } else {
        x[1].forEach(y=>{
            size += getSize(y)
        })
    }
    return size
}


getSumofSmall=(x,max)=>{
    let sumsize=0
    if (!Number.isInteger(x[1])) {
        let s = getSize(x)
        if (s<=max) sumsize +=s
        x[1].forEach(y=>{
            sumsize += getSumofSmall(y,max)
        })
    }
    return sumsize
}

q07a=(x)=>{
    let commands=x.split("\n")
    path = []
    depth=0
    filesystem = ""
    for (let c=0;c<commands.length;c++){
        line = commands[c].split(" ")
        if (line[0]=="$"){
            if (line[1]=="cd"){
                if (line[2]==".."){
                    filesystem += "]],"
                    depth--
                } else {
                    depth++
                    filesystem += "['"+line[2]+"',["
                }
            }
        } else if (line[0]=="dir"){
            //directory
        }else{
            filesystem += "['"+line[1]+"',"+line[0]+"],"
        }
    }
    for(;depth>0;depth--){
        filesystem+="]]"
    }
    fs=eval(filesystem) // I'm sorry.
    return getSumofSmall(Array.from(fs),100000)
}

q07b=(x)=>{
    return 0
}
