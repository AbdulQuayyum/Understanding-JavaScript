// COPYRIGHT © 2022 Alao Abdul-Quayyum, All rights Reserved.



(function () {
    let element = document.getElementsByTagName('p');
    setInterval(function () {
        if ((element[0].clientWidth) == 380) {
            element[1].classList.add('f1');
        }

    }, 1000)
}());
