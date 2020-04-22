$(document).ready(function () {
    console.log("Po załadowaniu strony");
    $("#informacja").click(function () {
        alert("GitKraken to przyjazny program!");
    });
    $("#repo").click(function () {
        $('#tresc').load('repo.html'); 
    }); 
    $("#settings").click(function () { 
        $('#tresc').load('settings.html'); 
    });
    //rozpoczęcie pracy nad nowym przyciskiem 
    $("#view").click(function () { 
        $('#tresc').load('view.html'); 
    });
});