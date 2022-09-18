$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#arrow1').toggleClass('fas fa-chevron-left');
        document.getElementById('arrow1').setAttribute("data-icon", "chevron-right");
    });
});
