const sidebar2 = document.getElementById("sidebar")
const openmenu = document.getElementById("openmenu")
const closemenu = document.getElementById("closemenu")

openmenu.addEventListener("click", () => {
    sidebar.style.display = 'block'
})

closemenu.addEventListener("click", () => {
    sidebar.style.display = "none"
})


const menuButton = document.querySelector(".menu");
        const closeButton = document.querySelector(".close");
        const sidebar = document.querySelector(".sidebar");

        // Function to open the sidebar
        function openSidebar() {
            sidebar.classList.add("sidebar-open");
        }

        // Function to close the sidebar
        function closeSidebar() {
            sidebar.classList.remove("sidebar-open");
        }

        // Add event listeners to the menu and close buttons
        menuButton.addEventListener("click", openSidebar);
        closeButton.addEventListener("click", closeSidebar);
  
  
  
  