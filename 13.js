inOrder=(a,b)=>{
    longestarray=(a.length>b.length)?a.length:b.length
    if(a.length==0&&(!(b.length==0))) return true 
    if(b.length==0&&(!(a.length==0))) return false
    for (let c=0;c<longestarray;c++){
        if (a==undefined) return true
        if (b==undefined) return false
        if (a[c]==undefined) return true
        if (b[c]==undefined) return false
        if(Number.isInteger(a[c])&&Number.isInteger(b[c])) {
            if(a[c]<b[c]) return true
            if(a[c]>b[c]) return false
        }else if(Array.isArray(a[c])&&Array.isArray(b[c])){
            if (a[c]==undefined) return true
            if (b[c]==undefined) return false
            let f=a[c].toString()
            let g=b[c].toString()
            if(!(f==g)||a[c][0]==undefined||b[c][0]==undefined) return inOrder(a[c],b[c])
        }else {            
            if(Number.isInteger(a[c])) {
                let f=a[c]
                let h=[]
                h.push(parseInt(f))
                if(!(b[c].toString()==h.toString())) return inOrder(h,b[c])
            } 
            if(Number.isInteger(b[c])){
                let g=b[c].toString()
                let h=[]
                h.push(parseInt(g))
                if(!(a[c].toString()==h.toString())) return inOrder(a[c],h)
            }
        }
    }
    return (a.length<b.length)?false:true
}

q13a=(x)=>{
    let pairsinrightorder=[]
    let sum=0
    let index=1
    let data=x.split("\n")
    for(let c=2;c<data.length+1;c+=3){
        a = eval(data[c-2])
        b = eval(data[c-1])
        if (inOrder(a,b)) pairsinrightorder.push(index)
        index++
    }
    pairsinrightorder.forEach(y=> sum+=y )
    return sum
}
q13b=(x)=>{
    return 0
}
