function refresh(){
    var textContent = document.getElementById('editor-textarea').value;
    document.getElementById('viewer').srcdoc = textContent;
}


document.addEventListener ('DOMContentLoaded', function(){
    var btn = document.getElementById("refresh");
    btn.onclick = function(){
        refresh();
    }
}, false);


