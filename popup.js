var myCodeMirror;

function refresh(){
    var textContent = myCodeMirror.getValue();
    document.getElementById('viewer').srcdoc = textContent;
}


document.addEventListener ('DOMContentLoaded', function(){
    var btn = document.getElementById("refresh");
    btn.onclick = function(){
        refresh();
    }
    myCodeMirror = CodeMirror.fromTextArea(document.getElementById("editor-textarea"), {
        theme: "monokai",
        lineNumbers: true, 
        mode: "text/html"
    });
}, false);


