var Mouse = {
    showCursorInfo: function(infoText) {
        var cursorInfoBox = document.getElementById("cursorInfo");
        cursorInfoBox.style.display = "";
        cursorInfoBox.innerHTML = infoText;
        document.body.style.cursor = "pointer";
    },
    hideCursorInfo: function() {
        var cursorInfoBox = document.getElementById("cursorInfo");
        cursorInfoBox.style.display = "none";
        cursorInfoBox.innerHTML = "";
        document.body.style.cursor = "default";
    },
    setup: function() {
        var x;
        var y;
        var cursorInfoBox = document.getElementById("cursorInfo");
        cursorInfoBox.style.display = "none";
        document.addEventListener('mousemove', function(event) {
    		x = event.clientX + 10;
    		y = event.clientY + 10;            
            cursorInfoBox.style.top = y + "px";
            cursorInfoBox.style.left = x + "px";
	    }, false);
    }
}
