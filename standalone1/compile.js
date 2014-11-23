function copyEditor(){
		document.getElementById("formContent").innerHTML =  editor.getValue();
		/*
			var strInput=editor.getValue();
			mySplitResult = strInput.split("\n");
			document.getElementById("outputText").innerHTML =  mySplitResult.join(" ");
		*/
	
		//var lines = $('#formContent').val().split(/\n/);
		var parts = $('#formContent').val().split(/.data/);
		
		commands=parts[0];
		data =parts[1];
		
		var dataArray=data.split(/\n/);
		var texts = [];
		for (var i=0; i < dataArray.length; i++) {
		  // only push this line if it contains a non whitespace character.
		  if (/\S/.test(dataArray[i])) {
			texts.push($.trim(dataArray[i]));
		  }
		}
		document.getElementById("outputText").innerHTML = texts.join('\n');
		
	
		//var myHash = new Hash('one', 'sdsfd', 'two', 'dfdf', 'three','ererer');
		//document.getElementById("outputText").innerHTML =myHash.getItem('one');		
		
}

