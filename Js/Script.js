(function () {
    var element = document.getElementsByTagName('p');
    setInterval(function () {
        if ((element[0].clientWidth) == 380) {
            element[1].classList.add('f1');
        }

    }, 1000)
}());
