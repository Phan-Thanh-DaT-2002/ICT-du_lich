// var greeting = document.getElementById("greeting");
// greeting.firstChild.nodeValue = "Hello everyone!";
// console.log([greeting])
// document.write("hhh")
// var welcome = document.getElementById("welcome");
// welcome.innerHTML = "wc"
// var horiRule = document.createElement("hr");
// welcome.appendChild(horiRule);
// welcome.removeChild(horiRule);
// var element = document.getElementById("element");
// element.addEventListener("click", callback)
// function callback() {
//   welcome.style.color = "white";
//   alert("hello")
// }
// element.removeEventListener("click", callback)
var myEvent = new customEvent("myevent", {
  detail: {
    name: "Wilson"
  },
  bubbles: true,
  cancelable: false
});
myEvent.addListener("myevent", function (event) {
  alert("hello" + event.detail.name)
})