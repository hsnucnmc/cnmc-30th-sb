CurrentCount = 1;
function verify() {
    t = document.getElementById('thebox');
    valueofinputbox = document.getElementById('thebox').value;
    one = document.getElementById('1');
    if (valueofinputbox.length > 0) {
        //yes
        one.classList.add('greencolor');
        one.classList.remove('redcolor');
    } else {
        one.classList.add('redcolor');
        one.classList.remove('greencolor');
    }
    //section 2
    two = document.getElementById('2');
    let specialChars = /[!@#$%^&*(),.?":{}|<>]/;
    if (CurrentCount == 1) {
        if (specialChars.test(valueofinputbox)) {
            //yes
            two.classList.add('greencolor');
            two.classList.remove('redcolor');
            CurrentCount++;
        } else {
            two.classList.add('redcolor');
            two.classList.remove('greencolor');
        }
    }
    //section 3
    three = document.getElementById('3');

    if (CurrentCount == 2) {
        if (/\d/.test(valueofinputbox) && CurrentCount == 2) {
            //fit req
            three.classList.add('greencolor');
            three.classList.remove('redcolor');
            CurrentCount++;
        } else {
            three.classList.remove('greencolor');
            three.classList.add('redcolor');
        }
    }
    //section 4
    four = document.getElementById('4');
    let BigChars = /[ABCDEFGHIJKLMNOPQRSTUVWYXZ]/;

    if (CurrentCount == 3) {
        if (BigChars.test(valueofinputbox) && CurrentCount == 3) {
            //fit req
            four.classList.add('greencolor');
            four.classList.remove('redcolor');
            CurrentCount++;
        } else {
            four.classList.remove('greencolor');
            four.classList.add('redcolor');
        }
    }


}
valueofinputbox = document.getElementById('thebox').value;
