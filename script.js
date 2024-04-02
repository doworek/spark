function changeBackground() {
   
    inputs = document.getElementsByTagName("input");
    numSelected = 0;
    rVal = 0;
    gVal = 0;
    bVal = 0;
    backgroundString = "";
    for (var i = 0; i < inputs.length; i++) {
       if (inputs[i].type == "checkbox") {
          if (inputs[i].checked) {
            if (numSelected == 0) {
               backgroundString += inputs[i].value;
            } else {
               backgroundString += "," +  inputs[i].value;
            }

             numSelected++;
             colorValue = inputs[i].value;
             rgb = colorValue.substring(4, colorValue.length - 1)
                .replace(/ /g, '')
                .split(',');
             rVal += Number(rgb[0]);
             gVal += Number(rgb[1]);
             bVal += Number(rgb[2]);
          }
       }
    }
    if (numSelected == 0) {
        numSelected = 1 // Avoid division by 0.
        // Make background white
        rVal = 255;
        gVal = 255;
        bVal = 255;
    }

    const result = [];
    if (numSelected == 1) {
      result[0] = [backgroundString];
      result[1] = [1]
      return result;
    } else {
      result[0] = [backgroundString];
      result[1] = [2];
      return result;
    }
 }

function store(){
   
   var backgroundGradient = changeBackground();

   sessionStorage.setItem("backgroundGradient", JSON.stringify(backgroundGradient));
}

function get(){

   var backgroundGradient = sessionStorage.getItem("backgroundGradient");
   backgroundGradient = JSON.parse(backgroundGradient)

   if (backgroundGradient[1] == 1){
      document.body.style.background = backgroundGradient[0];
   }else {
   document.body.style.background = "linear-gradient(" + backgroundGradient[0] + ")";
   }
   sessionStorage.clear()
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
} 
