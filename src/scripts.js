function onClick() {
    const collapsibleMenu = document.getElementById("collapsible-menu");
    const collapsibleButton = document.getElementById("collapsible-btn");
    collapsibleButton.classList.toggle("highlighted");
    
    if(collapsibleMenu.style.display === "block"){
        collapsibleMenu.style.display = "none";
    }else{
        collapsibleMenu.style.display = "block";
    }
}