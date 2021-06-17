function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload)["opn"];
}

window.onload = function () {
  checkinTime();
  var token =
    "eyJhbGciOiJFUzI1NiIsImtpZCI6IllycWVMVHE4ei1vZkg1bnpsYVNHbllSZkI5YnU5eVBsV1lVXzJiNnFYT1EifQ.eyJpZCI6IlI5SllZNFdQIiwib3BuIjoiVGVzdCBRUiBwb3N0ZXIgZm9yIFdhbGVzIiwidnQiOiIwMTIiLCJwYyI6IkNGMjQ0VE4ifQ.AKTiwwXLAx6rDkxDhVbRncM1uhOchpJqBAZ-PjY1IAjW3Wihi8ji-sQ-mFbzjhLL5mnrz5Ep8d7MnOHkf0MBEQ";

  document.getElementById("home").onclick = function () {
    document.getElementById("venue").innerText = window.prompt(
      "",
      parseJwt(token)
    );
  };

  document.getElementById("app").onclick = function () {
    var newVenue = document.getElementById("venue").innerText;
    var newTime = document.getElementById("time").innerText;
  };
};

function resize(element) {
  var bodyFontSize = parseFloat(
    window.getComputedStyle(document.body).fontSize
  );
  var computedFontSize = parseFloat(window.getComputedStyle(element).fontSize);
  element.style.fontSize =
    window.prompt("REM", computedFontSize / bodyFontSize) * bodyFontSize + "px";
}

function rebottom(element) {
  var bodyFontSize = parseFloat(window.getComputedStyle(document.body).height);
  var computedFontSize = parseFloat(window.getComputedStyle(element).bottom);
  element.style.bottom =
    window.prompt("Ratio", computedFontSize / bodyFontSize) * bodyFontSize +
    "px";
}

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
