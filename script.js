window.onload = function () {
  checkinTime();
  var token =
    "eyJhbGciOiJFUzI1NiIsImtpZCI6IllycWVMVHE4ei1vZkg1bnpsYVNHbllSZkI5YnU5eVBsV1lVXzJiNnFYT1EifQ.eyJpZCI6IlI5SllZNFdQIiwib3BuIjoiVGVzdCBRUiBwb3N0ZXIgZm9yIFdhbGVzIiwidnQiOiIwMTIiLCJwYyI6IkNGMjQ0VE4ifQ.AKTiwwXLAx6rDkxDhVbRncM1uhOchpJqBAZ-PjY1IAjW3Wihi8ji-sQ-mFbzjhLL5mnrz5Ep8d7MnOHkf0MBEQ";

  const fonts = [14, 15, 16, 17, 19, 21, 23, 28, 33, 40, 47, 53];
  document.body.style.backgroundImage =
    "url('" +
    (1 +
      fonts.indexOf(
        parseInt(window.getComputedStyle(document.body).fontSize)
      )) +
    ".PNG')";

  document.getElementById("home").onclick = function () {
    document.getElementById("venue").innerText = window.prompt(
      "",
      parseJwt(token)
    );
  };
  /* text (4=default, 8+): px
1: 14
2: 15
3: 16
4: 17
5: 19
6: 21
7: 23
8: 28
9: 33
10:40
11:47
12:53
 */
  document.getElementById("top").onclick = function () {
    var newVenue = document.getElementById("venue").innerText;
    var newTime = document.getElementById("time").innerText;
  };
};

function currentTime() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var date = new Date();
  return (
    date.getDate().toString() +
    " " +
    months[date.getMonth()] +
    " " +
    date.getFullYear() +
    " at " +
    date.getHours().toString().padStart(2, "0") +
    ":" +
    date.getMinutes().toString().padStart(2, "0")
  );
}

function checkinTime() {
  document.getElementById("time").innerText = currentTime();
}

// function parseJwt(token) {
//   var base64Url = token.split(".")[1];
//   var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//   var jsonPayload = decodeURIComponent(
//     atob(base64)
//       .split("")
//       .map(function (c) {
//         return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
//       })
//       .join("")
//   );
//   return JSON.parse(jsonPayload)["opn"];
// }

function resize(element) {
  element.style = window.prompt("css", window.getComputedStyle(element));

  //   var bodyFontSize = parseFloat(
  //     window.getComputedStyle(document.body).fontSize
  //   );
  //   element.style.wordSpacing = window.prompt(
  //     bodyFontSize,
  //     window.getComputedStyle(element).wordSpacing
  //   );
  //   element.style.fontSize =
  //     window.prompt(
  //       "Font size in REM",
  //       parseFloat(window.getComputedStyle(element).fontSize) / bodyFontSize
  //     ) *
  //       bodyFontSize +
  //     "px";
  //   element.style.fontWeight = window.prompt(
  //     "Font weight",
  //     parseFloat(window.getComputedStyle(element).fontWeight)
  //   );
}
function retop(element) {
  element.style.top =
    window.prompt("Top", parseFloat(window.getComputedStyle(element).top)) +
    "px";
}
