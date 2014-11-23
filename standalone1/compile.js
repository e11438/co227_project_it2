function copyEditor(){
		document.getElementById("formContent").innerHTML =  editor.getValue();
		/*
			var strInput=editor.getValue();
			mySplitResult = strInput.split("\n");
			document.getElementById("outputText").innerHTML =  mySplitResult.join(" ");
		*/
		
		var lines = $('#formContent').val().split(/\n/);
		var texts = [];
		for (var i=0; i < lines.length; i++) {
		  // only push this line if it contains a non whitespace character.
		  if (/\S/.test(lines[i])) {
			texts.push($.trim(lines[i]));
		  }
		}
		document.getElementById("outputText").innerHTML =  texts.join("\n");
}