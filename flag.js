const intervalTime = 1000;
const flagsID = ["China", "Solomon Islands", "Germany"];
let currentFlagIndex = 0;
function switchFlags() {
  document.getElementById(flagsID[currentFlagIndex]).style.opacity = 0;
  currentFlagIndex = (currentFlagIndex + 1) % flagsID.length;
  document.getElementById(flagsID[currentFlagIndex]).style.opacity = 1;
}
setInterval(switchFlags, intervalTime);
