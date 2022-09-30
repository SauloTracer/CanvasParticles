function saveImage(canvasId){
    var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = document.getElementById(canvasId).toDataURL()
    link.target = '_blank';
    link.click();
    link.remove();
}