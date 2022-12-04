<html>
    <head>
    <title> Advent of Code - 2022</title>
<?php 
    $answerFiles = glob('./2022-*-answer.js');
    foreach ($answerFiles as $line){ 
        $val = explode("-",$line)[1];
        echo '<script src="./2022-'.$val.'-data.js"></script>'; 
        echo '<script src="./2022-'.$val.'-answer.js"></script>';
    }
?>
    <script src="./tests.js"></script>
    </head>
    <body><pre>
    <ul id='results'></ul></pre>
    <script>
        test=(func,data,result)=>{
            return func(data) == result
        }
        tests.forEach(x=>{
            status = (test(x[1],x[2],x[3])) ?  "Passed" :  "Failed"
            a = document.createElement('li')
            a.innerHTML = x[0]+' -- '+status
            document.getElementById('results').appendChild(a)
        })
    </script>
    </body>
</html>
