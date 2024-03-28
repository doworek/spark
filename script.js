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
    console.log(backgroundString)
    if (numSelected == 1) {
      console.log("option 1");
      document.body.style.background = backgroundString;
    } else {
      console.log("option 2");
      document.body.style.backgroundImage = "linear-gradient(" + backgroundString + ")";
    }
 }

 function hideElem() {
   document.getElementById("hideme").style.visibility = "hidden";
 }
 
 function showElem() {
   document.getElementById("hideme").style.visibility = "visible";
 } 

 function showHide(){
   if (document.getElementById("hideme").style.visibility == "hidden"){
      showElem()
   }else{
      document.getElementById("hideme").style.visibility == "visible"
      hideElem()
      }
 }