
    document.addEventListener("click", isVisible("js-toggle-visibility"))
    var isVisible = function(element){
        document.getElementsByClassName(element).className += " isVisible";
    }