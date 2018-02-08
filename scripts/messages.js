var messages = {
    addMessage: function(messageString) {
        var msgBox = document.getElementById("messages");
        msgBox.innerHTML += "<br>" + messageString;
        msgBox.scrollTop = msgBox.scrollHeight;
    }
}