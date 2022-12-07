getSize=x=>{
    let size=0
    if (Number.isInteger(x[1])) size+=x[1]
    else x[1].forEach(y=>size+=getSize(y))
    return size
}

getSumofSmall=(x,max)=>{
    let sumsize=0
    if (!Number.isInteger(x[1])) {
        let s=getSize(x)
        if(s<=max)sumsize+=s
        x[1].forEach(y=>sumsize+=getSumofSmall(y,max))
    }
    return sumsize
}

getSmallestabove=(x, min, max)=>{
    if (!Number.isInteger(x[1])) {
        let s=getSize(x)
        if(s>=min&&s<max)max=s
        x[1].forEach(y=>max=getSmallestabove(y,min,max))
    }
    return max
}

buildfs=(data)=>{
    let commands=data.split("\n")
    depth=0
    filesystem=""
    for (let c=0;c<commands.length;c++){
        line=commands[c].split(" ")
        if(line[0]=="$"){
            if(line[1]=="cd"){
                if(line[2]==".."){
                    filesystem+="]],"
                    depth--
                }else{
                    depth++
                    filesystem+="['"+line[2]+"',["
                }
            }
        } else if(!(line[0]=="dir"))filesystem+="['"+line[1]+"',"+line[0]+"],"
    }
    for(;depth>0;depth--)filesystem+="]]"
    return eval(filesystem)
}


q07a=(x)=>{ return getSumofSmall(buildfs(x),100000) }

q07b=(x)=>{ 
    fs = buildfs(x)
    spaceneeded = 30000000
    fscapacity = 70000000
    freespace = fscapacity - getSize(fs)
    needtofree = spaceneeded - freespace 
    return getSmallestabove(fs,needtofree,fscapacity)
}
