var Inventory = {
    toggle: function() {
        var items = document.getElementById("items");
        if (items.style.display) {
            items.style.display = "";
        }
        else {
            items.style.display = "none";
        }
    },
    hide: function() {
        document.getElementById("items").style.display = "none";
    },
    setup: function() {
        Inventory.hide();
        document.addEventListener("click", function(event) {
            if (!document.getElementById("items").contains(event.target)
            && event.target.id != MENU.INVENTORY.id
            && event.target.id != MENU.PERCEPTION.id) {
                Inventory.hide();
            }
        });
    }
}