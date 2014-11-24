/*
var r0=0;
var r1=0;
var r2=0;
var r3=0;
var r4=0;
var r5=0;
var r6=0;
var r7=0;
var r8=0;
var r9=0;
var r10=0;
var r11=0;
var r12=0;
var sp=1000;
var lr=567;
var pc=0;
*/
//var myHash = new Hash('one', 1, 'two', 2, 'three', 3);

var registers = new Hash('r0',0,'r1',0,'sp',1000,'lr',234,'pc',34);
function exfunction(){

registers.setItem('sp',234);
//sp++;
}