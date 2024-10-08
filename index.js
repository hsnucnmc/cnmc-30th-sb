CurrentCount = 1;
console.log(
  "          _______  _                   _______  _        _______  _______ \r\n|\\     /|(  ____ \\( (    /||\\     /|  (  ____ \\( (    /|(       )(  ____ \\\r\n| )   ( || (    \\/|  \\  ( || )   ( |  | (    \\/|  \\  ( || () () || (    \\/\r\n| (___) || (_____ |   \\ | || |   | |  | |      |   \\ | || || || || |      \r\n|  ___  |(_____  )| (\\ \\) || |   | |  | |      | (\\ \\) || |(_)| || |      \r\n| (   ) |      ) || | \\   || |   | |  | |      | | \\   || |   | || |      \r\n| )   ( |/\\____) || )  \\  || (___) |  | (____/\\| )  \\  || )   ( || (____/\\\r\n|/     \\|\\_______)|/    )_)(_______)  (_______/|/    )_)|/     \\|(_______/"
);
console.log("If you can read this text, you are a great man. Welcome to CNMC.");
console.log(
  "Scroll down to the bottom of register list find B02 網管小組 and put it on your first priority."
);
realwin = false;

const numConfetti = 100; // Number of confetti pieces
let totalConfetti = 0;
const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6'];

function createConfetti() {
  const container = document.querySelector('.confetti-container');
  for (let i = 0; i < numConfetti; i++) {
    if (totalConfetti > 2000)
      return;
    const confetti = document.createElement('div');
    totalConfetti++;
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = `${Math.random() * 100}vh`;
    confetti.style.width = `${Math.random() * 15 + 5}px`; // Random width between 5px and 20px
    confetti.style.height = `${Math.random() * 15 + 5}px`; // Random height between 5px and 20px
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration between 2s and 5s
    confetti.style.animationDelay = `${Math.random() * 5}s`; // Random delay between 0s and 5s
    container.appendChild(confetti);
  }
}

cc = true;
warm = true;
bool123 = true;
password123 = "";
clickbtn = false;
weather = '';
fake = false;
modal1 = document.getElementById("alert1");
s1 = true;
c1 = false;
modal2 = document.getElementById("alert2");
s2 = true;
c2 = false;
modal3 = document.getElementById("alert3");
s3 = true;
c3 = false;
function share1() {
  modal1.style.display = "block";
  clickbtn = true;
  s1 = false;
  verify();
}
function close1() {
  modal1.style.display = "none";
  c1 = true;

}
document.getElementsByClassName("close")[0].onclick = function () {
  modal1.style.display = "none";
  c1 = true;
};

window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};
function share2() {
  modal2.style.display = "block";
  clickbtn = true;
  s2 = false;
  verify();
}
function close2() {
  modal2.style.display = "none";
  c2 = true;

}
document.getElementsByClassName("close")[0].onclick = function () {
  modal2.style.display = "none";
  c2 = true;
};

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
function share3() {
  modal3.style.display = "block";
  clickbtn = true;
  s3 = false;
  verify();
}
function close3() {
  modal3.style.display = "none";
  c3 = true;

}
document.getElementsByClassName("close")[0].onclick = function () {
  modal3.style.display = "none";
  c3 = true;
};

window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}// public function
document.addEventListener('DOMContentLoaded', (event) => {
  const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=25.0269&longitude=121.5367&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,precipitation,rain,showers,weather_code,wind_speed_10m&timezone=Asia%2FSingapore&forecast_days=1';

  // WMO weather codes interpretation
  const weatherDescriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail"
  };

  async function fetchWeather() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      const times = data.hourly.time;
      const weatherCodes = data.hourly.weather_code;
      const precipitations = data.hourly.precipitation;
      const windSpeeds = data.hourly.wind_speed_10m;

      // Get current time and convert to ISO string format
      const currentTime = new Date().toISOString().slice(0, 16);

      // Find the closest time entry in the data
      let closestTimeIndex = 0;
      let smallestDiff = Math.abs(new Date(times[0]) - new Date(currentTime));

      for (let i = 1; i < times.length; i++) {
        const time = times[i];
        const diff = Math.abs(new Date(time) - new Date(currentTime));
        if (diff < smallestDiff) {
          smallestDiff = diff;
          closestTimeIndex = i;
        }
      }

      // Get weather data for the closest time
      const closestWeatherCode = weatherCodes[closestTimeIndex];
      const closestPrecipitation = precipitations[closestTimeIndex];
      const closestWindSpeed = windSpeeds[closestTimeIndex];

      // Determine weather description
      let weatherDescription = weatherDescriptions[closestWeatherCode] || "Unknown";

      if (closestPrecipitation > 0) {
        weatherDescription = "Rainy";
      } else if (closestWindSpeed > 15) {
        weatherDescription = "Windy";
      } else if (closestWeatherCode >= 95 && closestWeatherCode <= 99) {
        weatherDescription = "Lightning";
      } else if (closestWeatherCode === 0 || closestWeatherCode === 1) {
        weatherDescription = "Sunny";
      } else if (closestWeatherCode >= 2 && closestWeatherCode <= 3) {
        weatherDescription = "Cloudy";
      }

      // Output the resulting weather description
      console.log(weatherDescription);
      weather = weatherDescription.toLowerCase();
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  fetchWeather();
});

const editor = document.getElementById('thebox');

// 監聽鍵盤事件
editor.addEventListener('keydown', function (event) {
  // 檢查是否按下了 Ctrl 和 Z 鍵
  if (event.ctrlKey && event.key === 'z') {
    // 取消事件的默認行為（即撤銷操作）
    event.preventDefault();
  }
});

function verify(e) {
  totalflag = true;
  //this is just to expand the box based on input
  document.getElementById("thebox").style.height = "1px";
  document.getElementById("thebox").style.height =
    25 + document.getElementById("thebox").scrollHeight + "px";
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
    one.classList.remove("greencolor"); totalflag = false;
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
      two.classList.remove("greencolor"); totalflag = false;
      two.classList.add("redcolor");
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
      three.classList.remove("greencolor"); totalflag = false;
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
      four.classList.remove("greencolor"); totalflag = false;
      four.classList.add("redcolor");
    }
  }
  //section 5
  five = document.getElementById("5");
  if (CurrentCount >= 5) {
    if (valueofinputbox.toLowerCase().includes("cnmc")) {
      //fit req
      five.classList.add("greencolor");
      five.classList.remove("redcolor");
      if (CurrentCount == 5) {
        CurrentCount++;
      }
    } else {
      five.classList.remove("greencolor"); totalflag = false;
      five.classList.add("redcolor");
    }
  }
  //section 6
  six = document.getElementById("6");
  if (CurrentCount >= 6) {
    if (valueofinputbox.toLowerCase().includes("west") || valueofinputbox.includes("西")) {
      //fit req
      six.classList.add("greencolor");
      six.classList.remove("redcolor");
      if (CurrentCount == 6) {
        CurrentCount++;
      }
    } else {
      six.classList.remove("greencolor"); totalflag = false;
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
      seven.classList.remove("greencolor"); totalflag = false;
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
      eight.classList.remove("greencolor"); totalflag = false;
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
      nine.classList.remove("greencolor"); totalflag = false;
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
      ten.classList.remove("greencolor"); totalflag = false;
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
        if (2 <= finalnum && finalnum <= 15) {
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
      eleven.classList.remove("greencolor"); totalflag = false;
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
      twelve.classList.remove("greencolor"); totalflag = false;
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
      thirteen.classList.remove("greencolor"); totalflag = false;
      thirteen.classList.add("redcolor");
    }
  }
  //section 14
  fourteen = document.getElementById("14");
  if (CurrentCount >= 14) {
    if (s1) {
      share1();
    }
    if (bool123 == true && c1) {
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
  fiften = document.getElementById("15");
  if (CurrentCount >= 15) {
    if (
      valueofinputbox.includes("dQw4w9WgXcQ")
    ) {
      //fit req
      fiften.classList.add("greencolor");
      fiften.classList.remove("redcolor");
      if (CurrentCount == 15) {
        clickbtn = false;
        CurrentCount++;
      }
    } else {
      fiften.classList.remove("greencolor"); totalflag = false;
      fiften.classList.add("redcolor");
    }
  }
  //section 16
  sixten = document.getElementById("16");
  if (CurrentCount == 16) {
    sixten.classList.add("redcolor");
    if (clickbtn) {
      CurrentCount++;
      sixten.classList.add("greencolor");
      sixten.classList.remove("redcolor");
    }
  }
  //section 17
  seventeen = document.getElementById("17");
  if (CurrentCount >= 17) {
    numberlist = valueofinputbox.match(/\d+/g);
    flag = false;
    if (numberlist != null) {
      for (i = 0; i < numberlist.length; i++) {
        if (numberlist[i] == 30) flag = true;
      }
    }
    if (valueofinputbox.includes("三十"))
      flag = true;
    if (flag) {
      //fit req
      // TODO
      seventeen.classList.add("greencolor");
      seventeen.classList.remove("redcolor");
      if (CurrentCount == 17) {
        CurrentCount++;
      }
    } else {
      seventeen.classList.remove("greencolor"); totalflag = false;
      seventeen.classList.add("redcolor");
    }
  }
  //section 18
  eighteen = document.getElementById("18");
  if (CurrentCount >= 18) {
    if (s2 && cc == false) {
      share2();
    } if (c2) {
      if (warm) {
        chilongangry = document.getElementById("thebox").value + "🐛";
        document.getElementById("thebox").value = chilongangry;
        valueofinputbox = document.getElementById("thebox").value;
        warm = false;
      }
      if (valueofinputbox.includes("🐛")) {
        //fit req
        eighteen.classList.add("greencolor");
        eighteen.classList.remove("redcolor");
        if (CurrentCount == 18) {
          CurrentCount++;
        }
      } else if (CurrentCount < 24) {
        var chilongangry = "🤓".repeat(valueofinputbox.length / 2);
        document.getElementById("thebox").value = chilongangry;
        eighteen.classList.remove("greencolor"); totalflag = false;
        eighteen.classList.add("redcolor");
      }
    }
  }
  //section 19
  nineten = document.getElementById("19");
  if (CurrentCount >= 19) {
    if (valueofinputbox.toLowerCase().includes("#fff")) {
      //fit req
      nineten.classList.add("greencolor");
      nineten.classList.remove("redcolor");
      if (CurrentCount == 19) {
        CurrentCount++;
      }
    } else {
      nineten.classList.remove("greencolor"); totalflag = false;
      nineten.classList.add("redcolor");
    }
  }
  //section 20
  twozero = document.getElementById("20");
  if (CurrentCount >= 20) {
    if (valueofinputbox.toLowerCase().includes(weather)) {
      //fit req
      twozero.classList.add("greencolor");
      twozero.classList.remove("redcolor");
      if (CurrentCount == 20) {
        CurrentCount++;
      }
    } else {
      twozero.classList.remove("greencolor"); totalflag = false;
      twozero.classList.add("redcolor");
    }
  }
  //section 21
  twoone = document.getElementById("21");
  if (CurrentCount >= 21) {
    let greek_count = 0;
    if (valueofinputbox.toLowerCase().includes("Συνδεδεμένο".toLowerCase()))
      greek_count++;
    if (valueofinputbox.toLowerCase().includes("Εθνικού".toLowerCase()))
      greek_count++;
    if (valueofinputbox.toLowerCase().includes("Κανονικού".toLowerCase()))
      greek_count++;
    if (valueofinputbox.toLowerCase().includes("Πανεπιστημίου".toLowerCase()))
      greek_count++;
    if (valueofinputbox.toLowerCase().includes("Ταϊβάν".toLowerCase()))
      greek_count++;
    if (valueofinputbox.toLowerCase().includes("Γυμνάσιο".toLowerCase()))
      greek_count++;
    if (valueofinputbox.toLowerCase().includes("Εθνικό".toLowerCase()))
      greek_count++;
    if (valueofinputbox.toLowerCase().includes("Πανεπιστήμιο".toLowerCase()))
      greek_count++;
    if (valueofinputbox.toLowerCase().includes("Κανονικό".toLowerCase()))
      greek_count++;

    if (greek_count >= 3) {
      //fit req
      twoone.classList.add("greencolor");
      twoone.classList.remove("redcolor");
      if (CurrentCount == 21) {
        CurrentCount++;
      }
    } else {
      twoone.classList.remove("greencolor"); totalflag = false;
      twoone.classList.add("redcolor");
    }
  }
  //section 22
  twotwo = document.getElementById("22");
  if (CurrentCount >= 22) {
    if (valueofinputbox.toLowerCase().includes("password")) {
      //fit req
      twotwo.classList.add("greencolor");
      twotwo.classList.remove("redcolor");
      if (CurrentCount == 22) {
        CurrentCount++;
      }
    } else {
      twotwo.classList.remove("greencolor"); totalflag = false;
      twotwo.classList.add("redcolor");
    }
  }
  //section 23
  twothree = document.getElementById("23");
  if (CurrentCount >= 23) {
    if (valueofinputbox.includes('ac/V@EyMzkBrS">L')) {
      //fit req
      twothree.classList.add("greencolor");
      twothree.classList.remove("redcolor");
      if (CurrentCount == 23) {
        CurrentCount++;
      }
    } else {
      twothree.classList.remove("greencolor"); totalflag = false;
      twothree.classList.add("redcolor");
    }
  }
  //section 24
  twofour = document.getElementById('24');
  if (CurrentCount == 24) {
    password123 = valueofinputbox;
    twofour.classList.add("redcolor");
    //replace words with emoji bomb;
    let arr = valueofinputbox.split('');
    const len = arr.length;
    // n = Math.min(n, len);//safe check
    n = len / 10;
    let indices = Array.from(Array(len).keys());
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    for (let i = 0; i < n; i++) {
      arr[indices[i]] = '💣';
    }
    document.getElementById("thebox").value = arr.join('');
    sleep(500).then(() => {
      console.log('start explosion');
      t.classList.add("shake");//explode
      //change all to underline
      let arr = valueofinputbox.split('');
      const len = arr.length;
      // n = Math.min(n, len);//safe check
      n = len - (len / 20);
      let indices = Array.from(Array(len).keys());
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      for (let i = 0; i < n; i++) {
        arr[indices[i]] = '_';
      }
      document.getElementById("thebox").value = arr.join('');
    });
    twofour.classList.remove("redcolor");
    twofour.classList.add("greencolor");
    CurrentCount++;
    share3();
  }
  //first replace some words with emoji bomb and then shake the textarea, then change the text to _ and some random text
  //section 25
  //finally
  twofive = document.getElementById('25');
  document.getElementById('displayText').textContent = password123;
  if (CurrentCount == 25) {
    twofive.classList.add("redcolor");
    if (totalflag == true) {
      if (fake == false) {
        fake = true;
      } else {
        twofive.classList.add("greencolor");
        twofive.classList.remove("redcolor");
        realwin = true;
        createConfetti();
        //win

      }
      console.log("Passed you win");
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
    // for (let i = 0; i < modifiedString.length; i++) {
    //   // 確保不超出範圍
    //   if (
    //     i + 1 < modifiedString.length &&
    //     areEmojisEqual(modifiedString[i + 1], "🐛")
    //   ) {
    //     // 將前一個字元替換為 '🐛'
    //     modifiedString[i] = "";
    //   }
    // }


    // 將修改後的字符陣列轉回字串並更新到輸入框
    document.getElementById("thebox").value = modifiedString.join("");
  }
  verify();
}, 1500);
//shareing modal part
modal = document.getElementById("myModal");

function share() {
  modal.style.display = "block";
  clickbtn = true;
  cc = false;
  verify();
}
function close() {
  modal.style.display = "none";
  cc = true;
}
document.getElementsByClassName("close")[0].onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

};
document.body.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    modal.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
  }
});
// document.body.addEventListener("keydown", function (e) {
//   if (e.key == "Escape") {
//     if (modal.style.display == "block") {
//       modal.style.display = "none";
//     }
//   }
// });
setInterval(function warmeat() {
  let valueofinputbox = document.getElementById("thebox").value;

  if (valueofinputbox.length != 0) {
    // 將字串轉換為字符陣列，以便進行修改
    let modifiedString = [...valueofinputbox];


    for (let i = 0; i < modifiedString.length; i++) {
      // 確保不超出範圍
      if (
        i + 1 < modifiedString.length &&
        areEmojisEqual(modifiedString[i + 1], "🐛")
      ) {
        // 將前一個字元替換為 '🐛'
        modifiedString[i] = "";
      }
    }


    // 將修改後的字符陣列轉回字串並更新到輸入框
    document.getElementById("thebox").value = modifiedString.join("");
  }
  verify();
}, 5000);
// setInterval(function warmeat() {
//   console.log("exec");
//   warmlocation = 0;
//   let valueofinputbox = document.getElementById("thebox").value;
//   if (valueofinputbox.length != 0) {
//     if (valueofinputbox.includes("🐛")) {
//       for (i = valueofinputbox.length - 2; i > 0; i--) {
//         if (areEmojisEqual(valueofinputbox[i + 1], "🐛")) {
//           document.getElementById("thebox").value =
//             valueofinputbox.substring(0, i) + valueofinputbox.substring(i + 1);
//           break;
//         }
//       }
//     }
//   }
//   verify();
// }, 1500);

