
window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    var content = document.getElementById('content');

    setTimeout(function() {
        preloader.style.display = 'none';
        content.style.display = 'block';
    }, 2000); // 2000 milliseconds = 2 seconds
});