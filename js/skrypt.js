$(document).ready(function () {
    $("#informacja").click(function () {
        alert("GitKraken to przyjazny program!");
    });
    $("#repo").click(function () {
        $('#tresc').load('repo.html'); 
    }); 
    $("#settings").click(function () { 
        $('#tresc').load('settings.html'); 
    });
});