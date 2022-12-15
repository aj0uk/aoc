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
    <ul id='results'></ul><summary></summary><br><button onclick="runtests(tests)">Re-Run Tests</button>
    <script>
    test=(func,data,result)=> {
       return func(data)==result
    }
    (runtests=(t)=>{
        totaltime=passed=failed=0
        document.getElementById('results').innerHTML=""
        t.map(x=>{
            if (x[3]) {
                let t0= performance.now()
                status=test(x[1],x[2],x[3])?"Passed":"Failed"
                let t1= performance.now()
                exectime=t1-t0
                a=document.createElement('li')
                a.innerHTML=x[0]+' -- '+status+' in '+(exectime).toFixed(2) +' milliseconds'
                totaltime+=exectime
                if(status=="Passed") passed++
                else failed++
                document.getElementById('results').appendChild(a)
            }
        })
        document.getElementsByTagName("summary")[0].innerHTML=`Executed ${passed+failed} tests in ${(totaltime/1000).toFixed(2)} seconds. Passed: ${passed}, Failed: ${failed}`
    })(tests)
    console.log('Tests Complete')
    </script>
    </body>
</html>
