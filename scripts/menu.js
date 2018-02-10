var MENU = {
    NONE: {id: ""},
    INVENTORY: {id: "inventory"}, 
    PERCEPTION: {id: "perception"}
};

var selectedMenuItem = MENU.NONE;

function selectClickableMenuItem(menuItem) {
    if (selectedMenuItem == MENU.NONE) {
        selectedMenuItem = menuItem;
    }
}

function deselectMenuItem() {
    if (selectedMenuItem != MENU.NONE) {
        selectedMenuItem = MENU.NONE;
    }
    Mouse.hideCursorInfo();
}

function setUpMenuEventListeners() {
    document.addEventListener("click", doSelectedOrCancel, false);
    document.getElementById("inventory").addEventListener("click", selectInventory, false);
    document.getElementById("perception").addEventListener("click", selectPerception, false);
}

function doSelectedOrCancel(event) {
    if (event.target.id == selectedMenuItem.id) {
        return;
    }
    switch(selectedMenuItem) {
        case MENU.PERCEPTION:
            GameActions.lookAt(event.target.id);
    }
    deselectMenuItem();
}

function selectInventory() {
    Inventory.toggle();
}

function selectPerception() {
    selectClickableMenuItem(MENU.PERCEPTION);
    Mouse.showCursorInfo("Look At");
}
