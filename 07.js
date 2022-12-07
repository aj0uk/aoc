//obj = [name,size/[contents]]

//created manually to test getsize calcs,
fs = ['root',[
        ['a',[
            ['e',[
                ['i',584]
                ]
            ],
            ['f',29116],
            ['g',2557],
            ['h.lst',62596]
            ]
        ],
        ['b.txt',14848514],
        ['c.dat',8504156],
        ['d',[
            ['j',4060174],
            ['d.log',8033020],
            ['d.ext',5626152],
            ['k',7214296]
            ]
        ]
    ]
]

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

sumofsmall=(x,max)=>{
    sum = 0
    x.foreach(x=>{
        if(x[2]==notleaf???){
            s = getSize(x[3])
            if (s<=max) sum += s
        }
    })
    return sum
}

q07a=(x)=>{
    filesystem=['root',[]]
    x.foreach(x=>{
        y = x.split(" ")
        
    })
    return sumofsmall(filesytem,max)
}

q07b=(x)=>{
    return 0
}
