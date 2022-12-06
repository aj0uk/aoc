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
    <ul id='results'></ul><button onclick="runtests(tests)">Re-Run Tests</button>
    <script>
    test=(func,data,result)=> {
       return func(data)==result
    }
    (runtests=(t)=>{
        document.getElementById('results').innerHTML=""
        t.map(x=>{
            if (x[3]) {
                let t0= performance.now()
                status=test(x[1],x[2],x[3])?"Passed":"Failed"
                let t1= performance.now()
                exectime=(t1-t0).toFixed(10) 
                a=document.createElement('li')
                a.innerHTML=x[0]+' -- '+status+' in '+exectime+' milliseconds'
                document.getElementById('results').appendChild(a)
            }
        })
    })(tests)
    </script>
    </body>
</html>
