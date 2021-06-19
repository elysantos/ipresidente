function reddenPage() {
   
    var a = 'Bolsonaro';
    var b = 'Idiota';


    if(window.find)
    {
      while(window.find(a))
      {
        var rng=window.getSelection().getRangeAt(0);
        rng.deleteContents();
        rng.insertNode(document.createTextNode(b));
      }
    }
    else if(document.body.createTextRange)
    {
      var rng=document.body.createTextRange();
      while(rng.findText(a))
      {
        rng.pasteHTML(b);
      }
    }
    window.scrollTo(0,0);
  }
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage
    });
  });



  