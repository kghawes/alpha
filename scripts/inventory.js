var inventory = {
    toggle: function() {
        if (document.getElementById("items").style.display) {
            document.getElementById("items").style.display = "";
        }
        else {
            document.getElementById("items").style.display = "none";
        }
    },
    hide: function() {
        document.getElementById("items").style.display = "none";
    }
};

function setUpInventoryEventListeners() {
    document.addEventListener("click", function(event) {
        if (!document.getElementById("items").contains(event.target)
        && event.target.id != MENU.INVENTORY.selectedId
        && event.target.id != MENU.INVENTORY.unselectedId
        && event.target.id != MENU.PERCEPTION.selectedId
        && event.target.id != MENU.PERCEPTION.unselectedId) {
            inventory.hide();
        }
    });
}