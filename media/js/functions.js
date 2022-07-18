window.addEventListener("DOMContentLoaded", function(){
});

window.addEventListener("load", function() {
    
});

function imageToBase64(url) {
    
    const reader = new FileReader();
    reader.addEventListener("loadend", function(){
        console.log(reader.result);
    });
    
    fetch(url)
        .then(response => response.blob())
        .then(blob     => { return reader.readAsDataURL(blob) });
}
