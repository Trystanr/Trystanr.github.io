document.getElementById('watson-input').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
      // Enter pressed

      var inputValue = document.getElementById('watson-input');
      var inputText = inputValue.value;

      if ((inputText.length) > 0 ) {
      	console.log(inputText);

        document.getElementById('watson-convo').appendChild('hello');
      }

      inputValue.value = '';

      return false;
    }
  }