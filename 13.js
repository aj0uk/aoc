
inOrder=(a,b)=>{
    console.log('- Compare',a,'vs',b, a.length, b.length)
    
    
    longestarray=(a.length>b.length)?a.length:b.length

    
    if(a.length==0&&(!(b.length==0))) {
        console.log('left side ran out of items return true')
        return true
    }
    
    if(b.length==0&&(!(a.length==0))) {
        console.log('right side ran out of items return false')
        return false
    }
    for (let c=0;c<longestarray;c++){
        console.log('  -checking element no.',c,a[c],b[c])
        if (a==undefined) return true
        if (b==undefined) return false
        if (a[c]==undefined) return true
        if (b[c]==undefined) return false
        if(Number.isInteger(a[c])&&Number.isInteger(b[c])) {
            console.log('  - Compare',a[c],'vs',b[c],(a[c]<b[c])?"return true":(a[c]>b[c])?"return false":"equal")

            if(a[c]<b[c]) return true
            if(a[c]>b[c]) return false
        }else if(Array.isArray(a[c])&&Array.isArray(b[c])){
            console.log('  -both are arrays',a[c],b[c])
            if (a[c]==undefined) return true
            if (b[c]==undefined) return false
            let f=a[c].toString()
            let g=b[c].toString()
            if(f==g) console.log('    identical,so skip')
            if(!(f==g)||a[c][0]==undefined||b[c][0]==undefined) return inOrder(a[c],b[c])
        }else {
            console.log('  - Mixed Types; ',a,b)
            
            if(Number.isInteger(a[c])) {
                let f=a[c]
                let h=[]
                h.push(parseInt(f))
                console.log('a[c] is int',a[c],b[c],h,(b[c].toString()==h.toString()))
                if(!(b[c].toString()==h.toString())) return inOrder(h,b[c])
                else console.log('   but will be identical once converted, so move to next')
            } 
            if(Number.isInteger(b[c])){
                let g=b[c].toString()
                let h=[]
                h.push(parseInt(g))
                console.log('a[c] is int',a[c],b[c],h,(a[c]==h))
                if(!(a[c].toString()==h.toString())) return inOrder(a[c],h)
                else console.log('   but will be identical once converted, so move to next')
            }
        }
    }
    console.log('return ',(a.length<b.length)?false:true)
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
        console.log('== Pair',index,'==')
        if (inOrder(a,b)) pairsinrightorder.push(index)
        index++
    }
    console.log('pairsinrightorder',pairsinrightorder)
    pairsinrightorder.forEach(y=> sum+=y )
    return sum
}
q13b=(x)=>{
    return 0
}
