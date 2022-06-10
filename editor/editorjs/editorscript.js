function myFunction(x) {
    if (x.matches) { // If media query matches
      document.getElementById("html-code").innerHTML=
      `<body> \n\n\n
    <style>\n\n\n
    </style>
      \n\n\n
      <script>\n\n\n
      </script>\n
</body>
      `
      
      // "<body>"+"\n\n\n"+"  <style>"++"  </style>"
      //     + "\n\n\n" + "<script>"+ "\n\n\n" + "</"+"script>" +"\n\n\n" + "</body>" ;

              document.getElementById("fst").innerHTML="html+css+js";
    } 
    else {
      document.getElementById("html-code").innerHTML="<body>" +"\n\n\n\n\n\n\n\n\n\n\n\n" + "</body>";
    }
  }
  
  var x = window.matchMedia("(max-width: 768px)");
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction); // Attach listener function on state changes


//   import {prvafunkcija} from "./smnrsjs.js"

// const output=document.getElementById("html-code");

// input.addEventListener("input" ,(e)=>{
// output.textContent=prvafunkcija(event.currentTarget.value);});