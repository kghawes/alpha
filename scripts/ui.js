var MENU = {
    NONE : {unselectedId: "", selectedId: ""},
    INVENTORY : {unselectedId: "inventory", selectedId: "inventorySelected"}, 
    PERCEPTION: {unselectedId: "perception", selectedId: "perceptionSelected"}
};

var selectedMenuItem = MENU.NONE;

function selectClickableMenuItem(menuItem) {
    if (selectedMenuItem == MENU.NONE) {
        selectedMenuItem = menuItem;
        document.getElementById(menuItem.unselectedId).id = menuItem.selectedId;
    }
}

function deselectMenuItem() {
    if (selectedMenuItem != MENU.NONE) {
        document.getElementById(selectedMenuItem.selectedId).id = selectedMenuItem.unselectedId;
        selectedMenuItem = MENU.NONE;
    }
}

function setUpEventListeners() {
    document.addEventListener("click", doSelectedOrCancel, false);
    document.getElementById("inventory").addEventListener("click", selectInventory, false);
    document.getElementById("perception").addEventListener("click", selectPerception, false);
}

// Event Listeners

function doSelectedOrCancel(event) {
    if (event.target.id == selectedMenuItem.selectedId) {
        return;
    }
    if (selectedMenuItem != MENU.NONE) {
        
    }
    deselectMenuItem();
}

function selectInventory() {

}

function selectPerception() {
    selectClickableMenuItem(MENU.PERCEPTION);
}

// Run upon loading

window.onload = function() {
    
setUpEventListeners();

};
