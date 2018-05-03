const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];



function init() {
  let step = 0;
  
  const body = document.getElementsByTagName("BODY")[0];

  body.addEventListener("keydown", press => {
    const button = parseInt(press.which);

    if (button == code[step]) {
      step++;
      if (step == 10) {
        window.alert("Konami Code entered!");
        step = 0;
      }
    } else {
      step = 0;
    }
  });
}
