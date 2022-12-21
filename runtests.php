<html>
    <head>
    <title> Advent of Code - 2022</title>
<?php 
    $answerFiles = glob('./*-data.js');
    foreach ($answerFiles as $line){ 
        $val = explode("-",$line)[0];
        echo '<script src="./'.$val.'-data.js"></script>'; 
        echo '<script src="./'.$val.'.js"></script>';
    }
?>
    <script src="./tests.js"></script>
    </head>
    <body><pre>
    <ul id='results'></ul><br>
    <summary></summary>
    </pre>
    <button id="run" onclick="runTests(tests)">Re-Run Tests</button>
    <script>
    test=(func,data,expected)=>{
        return new Promise((resolve) => {
            let t0= performance.now()
            let status=(func(data)==expected)?"Passed":"Failed"
            let t1= performance.now()
            let exectime=t1-t0
            resolve([status,exectime]);
        });
    }
    drawSummary=(p,f,c,t)=>{
        document.getElementsByTagName("summary")[0].innerHTML=`
    Passed: ${p}    Failed: ${f}    Running: ${c-(p+f)}     Not Run: ${notrun}

        Finished ${p+f} tests in ${t} seconds
`
    }
    drawTest=(div,result)=>{
        (result[0]=="Passed")?passed++:failed++
        totaltime+=result[1]
        document.getElementById(div).innerHTML = result[0]+' in <time>'+(result[1]).toFixed(2)+'</time> ms'
        drawSummary(passed,failed,count,(totaltime/1000).toFixed(2))
    }
    (runTests=(t)=>{
        totaltime=passed=failed=count=notrun=0
        document.getElementById('results').innerHTML=""
        t.forEach(x=>{
            if (x[3]) {
                let id='t'+count++
                drawSummary(0,0,count,"0.00")
                a=document.createElement('li')
                a.innerHTML=x[0]+" -- <test id='"+id+"'>Running</test>"
                document.getElementById('results').appendChild(a)
                setTimeout(()=>{ 
                    test( x[1], x[2], x[3]).then(result=> drawTest(id,result) )
                },5)
            } else notrun++
        })
    })(tests)
    </script>
    </body>
</html>
