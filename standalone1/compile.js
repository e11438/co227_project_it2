



var instest=['sub	sp, sp, #4','str	lr, [sp, #0]','ldr	r0, =hello','bl  	printf','ldr	lr, [sp, #0]','add	sp, sp, #4','mov	pc, lr'];


function copyEditor(){
	exfunction();
	document.getElementById("outputText").innerHTML =registers.getItem('sp');	
		document.getElementById("formContent").innerHTML =  editor.getValue();
		/*
		var parts = $('#formContent').val().split(/.data/);
		
		commandsPart=parts[0];
		dataPart =parts[1];
		
		var instructions = sepStr(commandsPart);
		var data = sepStr(dataPart);
		
		document.getElementById("outputText").innerHTML =pc;
		*/
		/*
		var myHash = new Hash();
		myHash.setItem('hello','lets do this');
		myHash.setItem('comm','this is a number.');
		
		document.getElementById("outputText").innerHTML =myHash.getItem('comm');		
		*/
}

function sepStr(data){
	var dataArray=data.split(/\n/);
		var texts = [];
		for (var i=0; i < dataArray.length; i++) {
		  // only push this line if it contains a non whitespace character.
		  if (/\S/.test(dataArray[i])) {
			texts.push($.trim(dataArray[i]));
		  }
		}
	return texts;
}

function getInst(input){

var parts = input.split(/main:/);



}

function getKeyword(input){


}

