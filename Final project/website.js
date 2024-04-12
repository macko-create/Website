document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('year').textContent = new Date().getFullYear();
});

function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    var isExpanded = dropdown.style.display === "block";

   
    document.querySelectorAll('.dropdown-content').forEach(function(content) {
        content.style.display = 'none';
        content.style.maxHeight = null;
    });

    if (!isExpanded) {
        dropdown.style.display = "block";
        dropdown.style.maxHeight = dropdown.scrollHeight + "px";
    }
}


