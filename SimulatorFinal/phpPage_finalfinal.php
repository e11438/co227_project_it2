<?php
	session_start();
?>
<?php

function compile_code($cmd, &$stderr, &$stdout) {

$stdoutFile = tempnam(".","temp0");
$stderrFile = tempnam(".","temp0");

$descriptorspec = array(
   0 => array("pipe", "r"),  // stdin is a pipe that the child will read from
   1 => array("file", "$stdoutFile", "w"),  // stdout is a file that the child will write to
   2 => array("file", "$stderrFile", "w") // stderr is a file to write to
);

$process = proc_open($cmd, $descriptorspec, $pipes);

if (is_resource($process)) {
    // $pipes now looks like this:
    // 0 => writeable handle connected to child stdin
    // 1 => readable handle connected to child stdout
    // Any error output will be appended to /tmp/error-output.txt

    fclose($pipes[0]);
	
    $return_value = proc_close($process);
	
	$stdout = file($stdoutFile);
	$stderr = file($stderrFile);
	
	unlink($stdoutFile);
	unlink($stderrFile);
    //echo "command returned $return_value\n";
}
}
?>

<?php
function run_code($cmd, $inputs, &$stderr, &$stdout) {

$stdoutFile = tempnam(".","temp0");
$stderrFile = tempnam(".","temp0");

$descriptorspec = array(
   0 => array("pipe", "r"),  // stdin is a pipe that the child will read from
   1 => array("file", "$stdoutFile", "w"),  // stdout is a file that the child will write to
   2 => array("file", "$stderrFile", "w") // stderr is a file to write to
);

$process = proc_open($cmd, $descriptorspec, $pipes);

if (is_resource($process)) {
    // $pipes now looks like this:
    // 0 => writeable handle connected to child stdin
    // 1 => readable handle connected to child stdout
    // Any error output will be appended to /tmp/error-output.txt

    fwrite($pipes[0], $inputs); //write stdinput to pipe[0]
    fclose($pipes[0]);

    $return_value = proc_close($process);
	
	$stdout = file($stdoutFile);
	$stderr = file($stderrFile);
	
	unlink($stdoutFile);
	unlink($stderrFile);
    //echo "command returned $return_value\n";
}
}
?>

<?php

$inputs = $_POST['inputs'];

//------------------------------

$string='abcdABCD1234';
while(true){

	$filename=rand(1000,9999).str_shuffle($string).rand(1000,9999).'.s';
		if(!file_exists($filename)){
			break;
		}
	
}



//--------------------------------------
$file = fopen($filename,'w');

fwrite($file, $_POST['formContent']); 

//$compile_cmd = 'javac Test1.java';
function printResult($arrayName){
	foreach($arrayName as &$value){
		echo $value;
	}
}

$string1='arm-linux-gnueabi-gcc -Wall -o '.substr($filename,0,-2).' '.$filename;
compile_code($string1, $stderr1, $stdout1);
//compile_code('javac Test1.java', $stderr1, $stdout1);

if(count($stderr1)!=0){
	echo "Compilation error!!\n\n";
	printResult($stderr1);
}else{
$string2='qemu-arm -L /usr/arm-linux-gnueabi '.substr($filename,0,-2);
run_code($string2, $inputs, $stderr, $stdout);
//run_code('java Test1', $inputs, $stderr, $stdout);

if(count($stderr)!=0){
	echo "Runtime error!!\n\n";
	printResult($stderr);
}
	printResult($stdout);
	
	unlink($filename);
	unlink(substr($filename,0,-2));
}

?> 








