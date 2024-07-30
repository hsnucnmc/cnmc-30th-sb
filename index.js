CurrentCount = 1;
console.log(
    "          _______  _                   _______  _        _______  _______ \r\n|\\     /|(  ____ \\( (    /||\\     /|  (  ____ \\( (    /|(       )(  ____ \\\r\n| )   ( || (    \\/|  \\  ( || )   ( |  | (    \\/|  \\  ( || () () || (    \\/\r\n| (___) || (_____ |   \\ | || |   | |  | |      |   \\ | || || || || |      \r\n|  ___  |(_____  )| (\\ \\) || |   | |  | |      | (\\ \\) || |(_)| || |      \r\n| (   ) |      ) || | \\   || |   | |  | |      | | \\   || |   | || |      \r\n| )   ( |/\\____) || )  \\  || (___) |  | (____/\\| )  \\  || )   ( || (____/\\\r\n|/     \\|\\_______)|/    )_)(_______)  (_______/|/    )_)|/     \\|(_______/"
);
console.log("If you can read this text, you are a great man. Welcome to CNMC.");
console.log(
    "Scroll down to the bottom of register list find B02 網管小組 and put it on your first priority."
);
warm = true
bool123 = true;
clickbtn = false;
function verify(e) {
    //this is just to expand the box based on input
    document.getElementById("thebox").style.height = "1px";
    document.getElementById("thebox").style.height = (25 + document.getElementById("thebox").scrollHeight) + "px";
    //endl
    t = document.getElementById("thebox");
    valueofinputbox = document.getElementById("thebox").value;
    //section one
    one = document.getElementById("1");
    if (valueofinputbox.length > 0) {
        //yes
        one.classList.add("greencolor");
        one.classList.remove("redcolor");
        if (CurrentCount == 1) {
            CurrentCount++;
        }
    } else {
        one.classList.add("redcolor");
        one.classList.remove("greencolor");
    }
    //section 2
    if (CurrentCount >= 2) {
        two = document.getElementById("2");
        let specialChars = /[!@#$%^&*(),.?":{}|<>]/;
        if (specialChars.test(valueofinputbox)) {
            //yes
            two.classList.add("greencolor");
            two.classList.remove("redcolor");
            if (CurrentCount == 2) {
                CurrentCount++;
            }
        } else {
            two.classList.add("redcolor");
            two.classList.remove("greencolor");
        }
    }
    //section 3
    three = document.getElementById("3");
    if (CurrentCount >= 3) {
        if (/\d/.test(valueofinputbox)) {
            //fit req
            three.classList.add("greencolor");
            three.classList.remove("redcolor");
            if (CurrentCount == 3) {
                CurrentCount++;
            }
        } else {
            three.classList.remove("greencolor");
            three.classList.add("redcolor");
        }
    }
    //section 4
    four = document.getElementById("4");
    if (CurrentCount >= 4) {
        let BigChars = /[ABCDEFGHIJKLMNOPQRSTUVWYXZ]/;
        if (BigChars.test(valueofinputbox)) {
            //fit req
            four.classList.add("greencolor");
            four.classList.remove("redcolor");
            if (CurrentCount == 4) {
                CurrentCount++;
            }
        } else {
            four.classList.remove("greencolor");
            four.classList.add("redcolor");
        }
    }
    //section 5
    five = document.getElementById("5");
    if (CurrentCount >= 5) {
        if (valueofinputbox.includes("cnmc")) {
            //fit req
            five.classList.add("greencolor");
            five.classList.remove("redcolor");
            if (CurrentCount == 5) {
                CurrentCount++;
            }
        } else {
            five.classList.remove("greencolor");
            five.classList.add("redcolor");
        }
    }
    //section 6
    six = document.getElementById("6");
    if (CurrentCount >= 6) {
        if (valueofinputbox.includes("west") || valueofinputbox.includes("West")) {
            //fit req
            six.classList.add("greencolor");
            six.classList.remove("redcolor");
            if (CurrentCount == 6) {
                CurrentCount++;
            }
        } else {
            six.classList.remove("greencolor");
            six.classList.add("redcolor");
        }
    }
    //section 7
    seven = document.getElementById("7");
    if (CurrentCount >= 7) {
        eeee = valueofinputbox.match(/\d+/g);
        num = 0;
        if (eeee != null) {
            for (i = 0; i < eeee.length; i++) {
                num += parseInt(eeee[i], 10); // 將字串轉換為整數並加總到 num
            }
        }
        if (num == 1947) {
            //fit req
            seven.classList.add("greencolor");
            seven.classList.remove("redcolor");
            if (CurrentCount == 7) {
                CurrentCount++;
            }
        } else {
            seven.classList.remove("greencolor");
            seven.classList.add("redcolor");
        }
    }

    //section 8
    eight = document.getElementById("8");
    if (CurrentCount >= 8) {
        if (valueofinputbox.includes("1657")) {
            //fit req
            eight.classList.add("greencolor");
            eight.classList.remove("redcolor");
            if (CurrentCount == 8) {
                CurrentCount++;
            }
        } else {
            eight.classList.remove("greencolor");
            eight.classList.add("redcolor");
        }
    }
    //section 9
    nine = document.getElementById("9");
    if (CurrentCount >= 9) {
        if (
            valueofinputbox.includes("王") ||
            valueofinputbox.includes("Wang") ||
            valueofinputbox.includes("wang")
        ) {
            //fit req
            nine.classList.add("greencolor");
            nine.classList.remove("redcolor");
            if (CurrentCount == 9) {
                CurrentCount++;
            }
        } else {
            nine.classList.remove("greencolor");
            nine.classList.add("redcolor");
        }
    }
    //section 10
    ten = document.getElementById("10");
    if (CurrentCount >= 10) {
        if (valueofinputbox.includes("B02") || valueofinputbox.includes("b02")) {
            //fit req
            ten.classList.add("greencolor");
            ten.classList.remove("redcolor");
            if (CurrentCount == 10) {
                CurrentCount++;
            }
        } else {
            ten.classList.remove("greencolor");
            ten.classList.add("redcolor");
        }
    }
    //section 11
    eleven = document.getElementById("11");
    if (CurrentCount >= 11) {
        flag = false;
        thlistofpossibleans = valueofinputbox.match(/(0?[0-9]|[1-5][0-9])mins/g);
        if (thlistofpossibleans != null) {
            for (i = 0; i < thlistofpossibleans.length; i++) {
                if (thlistofpossibleans[i].length == 6) {
                    number1 = thlistofpossibleans[i][0];
                    number2 = thlistofpossibleans[i][1];
                    finalnum = Number(number1) * 10 + Number(number2);
                } else {
                    finalnum = Number(thlistofpossibleans[i][0]);
                }
                if (5 <= finalnum && finalnum <= 10) {
                    flag = true;
                }
            }
        }
        if (flag) {
            eleven.classList.add("greencolor");
            eleven.classList.remove("redcolor");
            if (CurrentCount == 11) {
                CurrentCount++;
            }
        } else {
            eleven.classList.remove("greencolor");
            eleven.classList.add("redcolor");
        }
    }
    //section 12
    twelve = document.getElementById("12");
    if (CurrentCount >= 12) {
        if (true) {
            //fit req
            twelve.classList.add("greencolor");
            twelve.classList.remove("redcolor");
            if (CurrentCount == 12) {
                CurrentCount++;
            }
        } else {
            twelve.classList.remove("greencolor");
            twelve.classList.add("redcolor");
        }
    }
    //section 13
    thirteen = document.getElementById("13");
    if (CurrentCount >= 13) {
        if (valueofinputbox.includes("🚺")) {
            //fit req
            thirteen.classList.add("greencolor");
            thirteen.classList.remove("redcolor");
            if (CurrentCount == 13) {
                CurrentCount++;
            }
        } else {
            thirteen.classList.remove("greencolor");
            thirteen.classList.add("redcolor");
        }
    }
    //section 14
    fourteen = document.getElementById("14");
    if (CurrentCount >= 14) {
        if (bool123 == true) {
            //add 啟龍
            var randomIndex1 = Math.floor(Math.random() * valueofinputbox.length);
            var randomIndex2 = Math.floor(Math.random() * valueofinputbox.length);
            var modifiedString =
                valueofinputbox.substring(0, randomIndex1) +
                "🤓" +
                valueofinputbox.substring(randomIndex1 + 1);
            var modifiedString2 =
                modifiedString.substring(0, randomIndex2) +
                "🤓" +
                modifiedString.substring(randomIndex2 + 1);
            document.getElementById("thebox").value = modifiedString2;
            bool123 = false;
        }
        //fit req
        fourteen.classList.add("greencolor");
        fourteen.classList.remove("redcolor");
        if (CurrentCount == 14) {
            CurrentCount++;
        }
    }
    //section 15
    fiften = document.getElementById('15');
    if (CurrentCount >= 15) {
        if (valueofinputbox.includes("https://www.youtube.com/watch?v=dQw4w9WgXcQ")) {
            //fit req
            fiften.classList.add("greencolor");
            fiften.classList.remove("redcolor");
            if (CurrentCount == 15) {
                clickbtn = false;
                CurrentCount++;
            }
        } else {
            fiften.classList.remove("greencolor");
            fiften.classList.add("redcolor");
        }
    }
    //section 16
    sixten = document.getElementById('16');
    if (CurrentCount == 16) {
        sixten.classList.add("redcolor");
        if (clickbtn) {
            CurrentCount++;
            sixten.classList.add("greencolor");
            sixten.classList.remove("redcolor");
        }
    }//haven't test yet
    //section 17
seventeen = document.getElementById('17');
if (CurrentCount >= 17) {
    if (true) {
        //fit req
        seventeen.classList.add("greencolor");
        seventeen.classList.remove("redcolor");
        if (CurrentCount == 17) {
            CurrentCount++;
        }
    } else {
      seventeen.classList.remove("greencolor");
      seventeen.classList.add("redcolor");
    }
}
//section 18
eighteen = document.getElementById('18');
if (CurrentCount >= 18) {
    if(warm){
      chilongangry = document.getElementById("thebox").value + "🐛";
    }
    if (valueofinputbox.includes("🐛")) {
        //fit req
        eighteen.classList.add("greencolor");
        eighteen.classList.remove("redcolor");
        if (CurrentCount == 18) {
            CurrentCount++;
        }
    } else {
      for(i=0;i<valueofinputbox.length;i++){
        var chilongangry = '🤓'.repeat(valueofinputbox.length);
      }
      document.getElementById("thebox").value = chilongangry;
      eighteen.classList.remove("greencolor");
      eighteen.classList.add("redcolor");
    }
}
}
function getEmojiCodePoints(emoji) {
    const codePoints = [];
    for (let i = 0; i < emoji.length;) {
        // 獲取單個 Unicode 代碼點
        const codePoint = emoji.codePointAt(i);
        codePoints.push(codePoint);
        // 移動到下一個字符
        i += codePoint > 0xffff ? 2 : 1; // 擴展字符占用兩個索引位置
    }
    return codePoints;
}

function areEmojisEqual(emoji1, emoji2) {
    const codePoints1 = getEmojiCodePoints(emoji1);
    const codePoints2 = getEmojiCodePoints(emoji2);

    // 比較數組是否相等
    return JSON.stringify(codePoints1) === JSON.stringify(codePoints2);
}
setInterval(function chilong() {
    let valueofinputbox = document.getElementById("thebox").value;

    if (valueofinputbox.length != 0) {
        // 將字串轉換為字符陣列，以便進行修改
        let modifiedString = [...valueofinputbox];

        for (let i = 0; i < modifiedString.length; i++) {
            // 確保不超出範圍
            if (
                i + 1 < modifiedString.length &&
                areEmojisEqual(modifiedString[i + 1], "🤓")
            ) {
                // 將前一個字元替換為 '🤓'
                modifiedString[i] = "🤓";
            }
        }
        for (let i = modifiedString.length - 1; i > 0; i--) {
            // 確保不超出範圍
            if (areEmojisEqual(modifiedString[i - 1], "🤓")) {
                // 將當前字符替換為 '🤓'
                modifiedString[i] = "🤓";
            }
            // console.log(modifiedString);
        }

        // 將修改後的字符陣列轉回字串並更新到輸入框
        document.getElementById("thebox").value = modifiedString.join("");
    }
    verify();
}, 1500);
//shareing modal part
modal = document.getElementById('myModal');

function share() {
    modal.style.display = "block";
    clickbtn = true;
    verify();
}
function close() {
    modal.style.display = "none";
}
document.getElementsByClassName("close")[0].onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.body.addEventListener('keydown', function (e) {
    if (e.key == "Escape") {
        if (modal.style.display == "block") {
            modal.style.display = "none";
        }
    }
});
