var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
console.log("width",width)

var resizeTimeout;
if(width>460){
  console.log("widttth",width)

window.addEventListener('resize', function(event) {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function(){
    window.location.reload();
  }, 500);

});
}


  window.onscroll = function() {myFunction()};
  
  // var a = document.getElementById("strict");
  var d=document.getElementById("EDITOR");

  // var b = a.offsetTop;
  var c = d.offsetTop;
var hdr=document.getElementById("hdr");
  


var holder = document.getElementById("hldr");
var distanceofhldr = holder.offsetTop;

const footerdistance1=document.getElementById("footer");
var footerdistance=footerdistance1.offsetTop;
const controls=document.getElementById("controls");



function myFunctionnn() {
  if (width>768) {
return "780";
  }
  else if (width>520){
 return "550";
}
else{
  return "400"
}
}



  function myFunction() {

    var themeheight=myFunctionnn();
console.log("themehei",themeheight)


    if (window.pageYOffset >themeheight && window.pageYOffset<c) {
      hdr.classList.add("bg");
    } else {
      hdr.classList.remove("bg");
    }


    if (window.pageYOffset > distanceofhldr && window.pageYOffset+300<footerdistance) {
      controls.style.visibility="visible";
    } 
       else {
         controls.style.visibility="hidden";
       }
  }




  function RUN(){
    var code=document.getElementById("editorr").value;
    document.getElementById("viewer").srcdoc=code;
  }
    

  let csslinks=document.querySelectorAll("#examples");
  let rightMenu=document.querySelector("#editor2");
  console.log("rightMenu",rightMenu)
  for(let i=0; i<csslinks.length ;i++)
{
  csslinks[i].addEventListener('click' , handleButtonClick);

}

   
csslinks[0].previousElementSibling.innerHTML=`
<h2>The var Element</h2>
<p>The area of a triangle is: 1/2 x 
<var>b</var> x 
<var>h</var>, where 
<var>b</var> is the base, and 
<var>h</var> is the vertical height.

</p>
`;
csslinks[1].previousElementSibling.innerHTML=`
<body style="background-color:powderblue;">

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>  `;

csslinks[2].previousElementSibling.innerHTML=`<h2>HTML Image</h2>
<img src="./slike1/isometric-developing-programming-and-coding-vector-20804873.jpg" width="100%" height=100% alt="Girl in a jacket" width="500" height="600">
`;

csslinks[3].previousElementSibling.innerHTML=`<h1 style="background-color:DodgerBlue;">Hello World
</h1>

<p style="background-color:Tomato;">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
</p>
`;

csslinks[4].previousElementSibling.innerHTML=` <h2>The transparent Keyword</h2>

<div class="ex1">This div has a light green background.</div>
<br>
<div class="ex2">This div has a transparent background.</div>
<style>

div.ex1 { 
  background-color: lightgreen;
  border: 2px solid black;
  padding: 15px;
}

div.ex2 { 
  background-color: transparent;
  border: 2px solid black;
  padding: 15px;
} 
</style>
`;

csslinks[5].previousElementSibling.innerHTML=`<style>
.flex-container {
  display: flex;
  background-color: DodgerBlue;
}

.flex-container > div {
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
}
</style>
</head>
<body>

<h1>Create a Flex Container</h1>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>

<p>A Flexible Layout must have a parent element with the <em>display</em> property set to <em>flex</em>.</p>

<p>Direct child elements(s) of the flexible container automatically becomes flexible items.</p>

</body>`;

csslinks[6].previousElementSibling.innerHTML=`<body>

<h1>HTML DOM Events</h1>
<h2>The onclick Event</h2>

<p>The onclick event triggers a function when an element is clicked on.</p>
<p>Click to trigger a function that will output "Hello World":</p>

<button onclick="myFunction()">Click me</button>

<p id="demo"></p>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
</script>

</body>`;


csslinks[7].previousElementSibling.innerHTML=`<style>
.droptarget {
  float: left; 
  width: 100px; 
  height: 35px;
  margin: 15px;
  margin-right: 100px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
</style>
</head>
<body>

<p>Drag the p element back and forth between the two rectangles:</p>

<div class="droptarget" ondrop="drop(event)" ondragenter="dragEnter(event)" ondragleave="dragLeave(event)" ondragover="allowDrop(event)">
  <p ondragstart="dragStart(event)" draggable="true" id="dragtarget">Drag me!</p>
</div>

<div class="droptarget" ondragenter="dragEnter(event)" ondragleave="dragLeave(event)" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

<p style="clear:both;"><strong>Note:</strong> drag events are not supported in Internet Explorer 8 and earlier versions or Safari 5.1 and earlier versions.</p>

<p id="demo"></p>

<script>
function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function dragEnter(event) {
  if ( event.target.className == "droptarget" ) {
    document.getElementById("demo").innerHTML = "Entered the dropzone";
    event.target.style.border = "3px dotted red";
  }
}

function dragLeave(event) {
  if ( event.target.className == "droptarget" ) {
    document.getElementById("demo").innerHTML = "Left the dropzone";
    event.target.style.border = "";
  }
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
}
</script>

</body>`;


csslinks[8].previousElementSibling.innerHTML=`<!DOCTYPE html>
<html>
<body>

<p>Write something in the text field to trigger a function.</p>

<input type="text" id="myInput" oninput="myFunction()">

<p id="demo"></p>

<script>
function myFunction() {
  var x = document.getElementById("myInput").value;
  document.getElementById("demo").innerHTML = "You wrote: " + x;
}
</script>

</body>
</html>`;


function handleButtonClick(e){
  let code;
  
   code=e.currentTarget.previousElementSibling.innerHTML;


rightMenu.classList.add("active");

createNewEditor(code);
}


function createNewEditor(x){
let editor=`<h3>EDITOR</h3>
<i class="fas fa-expand shrink"></i>
<i class="fas fa-times close"></i>
<textarea  id="editorr" oninput="RUN()">${x}</textarea>
<button id="btn">RUN</button>
<iframe id="viewer"></iframe>`;



let nova=document.getElementById('editor2');
nova.innerHTML=editor;


let Xbtn=document.querySelector("#editor2 .close");
console.log("x",Xbtn);
Xbtn.addEventListener("click", removeX)

let shrinkbtn=document.querySelector("#editor2 .shrink");
// console.log("shrinkbtn",shrinkbtn);
shrinkbtn.addEventListener("click", shrink)

let myBtn=document.getElementById("btn")
console.log("myBtn",myBtn)
myBtn.addEventListener("click",pali) 
function pali()

{
   RUN();
}

}

function shrink(){
  console.log("shrinkbtn",document.querySelector("#editor2 .shrink").parentElement.offsetWidth)
  // let editorwidth=document.querySelector("#editor2 .shrink").parentElement.offsetWidth;
  let EDITOR=document.querySelector("#editor2");

  if(EDITOR.offsetWidth<=430){
EDITOR.style.width="100%";
  }
else
EDITOR.style.width="430px";
}


function removeX(){
  rightMenu.classList.remove("active");
}



//   ////////////////////////////7 slider/////////////////////////////////////////////////7

const slider=document.querySelector("#slider");

const prev=document.querySelector(".prev");
const next=document.querySelector(".next")

console.log("test",slider);

next.addEventListener("click",function(){
slider.style.transform="translate(-0px)"
 slider.appendChild(slider.firstElementChild);

});

prev.addEventListener("click",function(){
  slider.style.transform="translate(0px)"
   slider.prepend(slider.lastElementChild);
  
  });
  



// //////////////////////login//////////////////////////

let loginblock=document.querySelector("#loginblock");
let lessons=document.querySelectorAll("#lsn");

for(let i=0; i<lessons.length ;i++)
{
  lessons[i].addEventListener('click' , openblock);

}

function openblock(e){

  loginblock.classList.add("active");

  
  createloginblock();
}


function createloginblock(){
let logincontent=`
<div id=innerblock>
<h3>Lorem Ipsum</h3>
<h5>Sign in and enjoy free online courses </h5>
<i class="fas fa-times close"></i>

<h4>Email</h4>

<input type="email" name="email" id="mail" placeholder="Email">

<h4>Password</h4>

<input type="password" name="password" id="pass" placeholder="Password">

<button id="SignIn">Sign In</button>
</div>`
;


let novi=document.getElementById('loginblock');
novi.innerHTML=logincontent;
console.log("novi" ,novi)


let closer=document.querySelector("#loginblock i");
closer.addEventListener("click", removeX2)
}


function removeX2(){
  loginblock.classList.remove("active");
}


// slider.addEventListener("transitionend",function(){

    //  slider.appendChild(slider.firstElementChild);

  //  slider.style.tansition="none";
  //  slider.style.transform="translate(0)";
    //  setTimeout(function(){
    //    slider.style.tansition="all 0.5s";
    //  });

// });


// window.onscroll = function() {myFunction1()};
  
//   var prevnextbtn = document.getElementById("hldr");
  
//   var distancefc = prevnextbtn.offsetTop;
//   const controls=document.getElementById("controls");
  
//   function myFunction1() {
//     if (window.pageYOffset > distancefc) {
//       controls.style.visibility="visible";
//     } 
//        else if(window.pageYOffset < distancefc){
//          controls.style.visibility="hidden";
//        }
//  