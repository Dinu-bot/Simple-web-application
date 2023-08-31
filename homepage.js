const navigation = document.querySelector('.navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = navigation.getAttribute('data-visible');

    if(visibility === "false") {
        navigation.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        navigation.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})

function showTable(tableType) {
    var lapTable = document.getElementById('lap-table');
    var monitorTable = document.getElementById('monitor-table');
    var geartable = document.getElementById('gaming-gear');
    var pccomponents = document.getElementById('pc-components');

    

    if (tableType === "lap-table") {
        if (lapTable.style.display === "none") {

            
            monitorTable.style.display = "none";
            geartable.style.display = "none";
            pccomponents.style.display = "none";



            lapTable.style.display = "table";
        } else { 
            lapTable.style.display = "none";
            
        }
    }
    else if (tableType === "monitor-table") {
        if (monitorTable.style.display === "none") {

            lapTable.style.display = "none";
            geartable.style.display = "none";
            pccomponents.style.display = "none";


            monitorTable.style.display = "table";
        } else {
            monitorTable.style.display = "none";
        }  
    }
    else if (tableType === "gaming-gear"){
        if (geartable.style.display === "none") {

            lapTable.style.display = "none";
            monitorTable.style.display = "none";
            pccomponents.style.display = "none";


            geartable.style.display = "table";
        } else {
            geartable.style.display = "none";
        }  
    }
    else if (tableType === "pc-components"){
        if (pccomponents.style.display === "none") {

            lapTable.style.display = "none";
            monitorTable.style.display = "none";
            geartable.style.display = "none";
            


            pccomponents.style.display = "table";
        } else {
            pccomponents.style.display = "none";
        }  
    }
}