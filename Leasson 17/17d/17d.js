document.getElementById("hamburger-btn").addEventListener("click", function() {
    let sidebar = document.querySelector(".sidebar");
    let videoGrid = document.querySelector(".video-grid");
sidebar.classList.toggle("expanded");
videoGrid.classList.toggle("expanded");
});