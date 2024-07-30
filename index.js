CurrentCount = 1;
console.log(
  "          _______  _                   _______  _        _______  _______ \r\n|\\     /|(  ____ \\( (    /||\\     /|  (  ____ \\( (    /|(       )(  ____ \\\r\n| )   ( || (    \\/|  \\  ( || )   ( |  | (    \\/|  \\  ( || () () || (    \\/\r\n| (___) || (_____ |   \\ | || |   | |  | |      |   \\ | || || || || |      \r\n|  ___  |(_____  )| (\\ \\) || |   | |  | |      | (\\ \\) || |(_)| || |      \r\n| (   ) |      ) || | \\   || |   | |  | |      | | \\   || |   | || |      \r\n| )   ( |/\\____) || )  \\  || (___) |  | (____/\\| )  \\  || )   ( || (____/\\\r\n|/     \\|\\_______)|/    )_)(_______)  (_______/|/    )_)|/     \\|(_______/"
);
console.log("If you can read this text, you are a great man. Welcome to CNMC.");
console.log(
  "Scroll down to the bottom of register list find B02 網管小組 and put it on your first priority."
);
function verify() {
  t = document.getElementById("thebox");
  valueofinputbox = document.getElementById("thebox").value;
  one = document.getElementById("1");
  if (valueofinputbox.length > 0) {
    //yes
    one.classList.add("greencolor");
    one.classList.remove("redcolor");
  } else {
    one.classList.add("redcolor");
    one.classList.remove("greencolor");
  }
  //section 2
  two = document.getElementById("2");
  let specialChars = /[!@#$%^&*(),.?":{}|<>]/;
  if (CurrentCount == 1) {
    if (specialChars.test(valueofinputbox)) {
      //yes
      two.classList.add("greencolor");
      two.classList.remove("redcolor");
      CurrentCount++;
    } else {
      two.classList.add("redcolor");
      two.classList.remove("greencolor");
    }
  }
  //section 3
  three = document.getElementById("3");

  if (CurrentCount == 2) {
    if (/\d/.test(valueofinputbox) && CurrentCount == 2) {
      //fit req
      three.classList.add("greencolor");
      three.classList.remove("redcolor");
      CurrentCount++;
    } else {
      three.classList.remove("greencolor");
      three.classList.add("redcolor");
    }
  }
  //section 4
  four = document.getElementById("4");
  let BigChars = /[ABCDEFGHIJKLMNOPQRSTUVWYXZ]/;
  if (BigChars.test(valueofinputbox)) {
    //fit req
    four.classList.add("greencolor");
    four.classList.remove("redcolor");
  } else {
    four.classList.remove("greencolor");
    four.classList.add("redcolor");
  }
  //section 5
  five = document.getElementById("5");
  if (valueofinputbox.includes("cnmc")) {
    //fit req
    five.classList.add("greencolor");
    five.classList.remove("redcolor");
  } else {
    five.classList.remove("greencolor");
    five.classList.add("redcolor");
  }
  //section 6
  six = document.getElementById("6");
  if (valueofinputbox.includes("west") || valueofinputbox.includes("West")) {
    //fit req
    six.classList.add("greencolor");
    six.classList.remove("redcolor");
  } else {
    six.classList.remove("greencolor");
    six.classList.add("redcolor");
  }
  //section 7
  seven = document.getElementById("7");
  eeee = valueofinputbox.match(/\d+/g);
  num = 0;
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
  } else {
    seven.classList.remove("greencolor");
    seven.classList.add("redcolor");
  }
  //section 8
  eight = document.getElementById("8");
  if (valueofinputbox.includes("1657")) {
    //fit req
    eight.classList.add("greencolor");
    eight.classList.remove("redcolor");
  } else {
    eight.classList.remove("greencolor");
    eight.classList.add("redcolor");
  }
  //section 9
  nine = document.getElementById("9");
  if (
    valueofinputbox.includes("王") ||
    valueofinputbox.includes("Wang") ||
    valueofinputbox.includes("wang")
  ) {
    //fit req
    nine.classList.add("greencolor");
    nine.classList.remove("redcolor");
  } else {
    nine.classList.remove("greencolor");
    nine.classList.add("redcolor");
  }

  //section 10
  ten = document.getElementById("10");

  //section 11
  //untest
  eleven = document.getElementById("11");
  if (CurrentCount == 10) {
    flag = false;
    thlistofpossibleans = valueofinputbox.match(/(0?[0-9]|[1-5][0-9])mins/g);
    for (i = 0; i < thlistofpossibleans.length(); i++) {
      number1 = thlistofpossibleans[i][0];
      number2 = thlistofpossibleans[i][1];
      finalnum = Number(number1) * 10 + Number(number2);
      if (5 <= finalnum && finalnum <= 10) {
        flag = true;
      }
    }
    if (flag) {
      eleven.classList.add("greencolor");
      eleven.classList.remove("redcolor");
      CurrentCount++;
    } else {
      eleven.classList.remove("greencolor");
      eleven.classList.add("redcolor");
    }
  }
}
valueofinputbox = document.getElementById("thebox").value;
