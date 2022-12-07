getSize=fs=>{
    let size=0
    if (Number.isInteger(fs[1])) size+=fs[1]
    else fs[1].forEach(y=> size+=getSize(y) )
    return size
}

getSumofSmall=(fs,max)=>{
    let sumsize=0
    if (!Number.isInteger(fs[1])) {
        let s=getSize(fs)
        if(s<=max) sumsize+=s
        fs[1].forEach(y=> sumsize+=getSumofSmall(y,max) )
    }
    return sumsize
}

getSmallestabove=(fs, min, max)=>{
    if (!Number.isInteger(fs[1])) {
        let s=getSize(fs)
        if(s>=min&&s<max) max=s
        fs[1].forEach(y=> max=getSmallestabove(y,min,max) )
    }
    return max
}

buildfs=(data)=>{
    let commands=data.split("\n")
    depth=0
    filesystem=""
    for(let c=0;c<commands.length;c++){
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
        } else if(!(line[0]=="dir")) filesystem+="['"+line[1]+"',"+line[0]+"],"
    }
    for(;depth>0;depth--) filesystem+="]]"
    return eval(filesystem)
}

q07a=(data, maxsize=100000)=>{ return getSumofSmall(buildfs(data),maxsize) }

q07b=(data, spaceneeded=30000000,fscapacity=70000000)=>{ 
    fs = buildfs(data)
    freespace = fscapacity - getSize(fs)
    needtofree = (spaceneeded - (fscapacity - getSize(fs)))
    return getSmallestabove(fs,needtofree,fscapacity)
}
