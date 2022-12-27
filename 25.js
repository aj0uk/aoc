q25=(x)=>{
    snafu2dec=snafu=>{
        s2d={
            "2":2,
            "1":1,
            "0":0,
            "-":-1,
            "=":-2
        }
        let dec=0
        for(let c=snafu.length-1;c>=0;c--){
            let current=s2d[snafu.slice(c,c+1)]
            for(let d=((snafu.length-1)-c);d>0;d--) current=current*5
            dec+=current
        }
        return dec
    }
    dec2snafu=dec=>{
        d2s=["0","1","2","=","-"]
        snafu=""
        ord=1
        while(dec>0){
            ord=ord*5
            r=dec%ord
            dec=dec-r
            cur=r/(ord/5)
            snafu=d2s[cur]+snafu
            if(cur>2) dec+=ord
        }
        return snafu
    }
    let sumofdec=0
    x.split("\n").forEach(line=> sumofdec+=snafu2dec(line) )
    return dec2snafu(sumofdec)
}
q25a=x=>{ return q25(x) }
q25b=(x)=>{ return 0 }
