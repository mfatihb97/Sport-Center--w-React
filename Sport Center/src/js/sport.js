//Classes and activate button
function showClass(className,button){
    let classContents = document.getElementsByClassName('class-content');
    for (let i = 0; i < classContents.length; i++) {
        classContents[i].classList.remove('show');
    }

    let selectedClass = document.getElementById(className);
    if (selectedClass) {
        selectedClass.classList.add('show');
    }

    let buttons = document.getElementsByClassName('classes');
    for(let i = 0 ; i<buttons.length;i++){
        buttons[i].classList.remove('active');
    }
    
    button.classList.add('active');
}

// BMI calculator-8
function calculateBMI(){

    let height = document.getElementById('heightInput').value;
    let weight = document.getElementById('weightInput').value;

    let heightInMeters = height/100;
    let bmi = weight/(heightInMeters*heightInMeters);
    
    if(height>0 && weight>0){
        document.getElementById('result').innerHTML='Your BMI: ' + bmi.toFixed(2);
    }
    else{
        document.getElementById('result').innerHTML = 'Please enter valid height and weight.';
    }

    updateTrianglePosition(bmi);
}


// BMI Triangle Movement

function updateTrianglePosition(bmiValue){
  
  let triangle = document.querySelector(".triangle");
  
  if(bmiValue < 18.5){
    triangle.style.left = "13%";
  }
  else if(bmiValue>=18.5 && bmiValue <25){
    triangle.style.left = "29%"
  }
  else if(bmiValue>=25 && bmiValue <30){
    triangle.style.left = "45%"
  }
  else if(bmiValue>=30 && bmiValue <35){
    triangle.style.left = "62%"
  }
  else{
    triangle.style.left = "78%"
  }
}

// BMI Reset Button

function resetValues(){
    document.getElementById("heightInput").value ="";
    document.getElementById("weightInput").value ="";
    document.getElementById("result").innerHTML ="";
    
    let trianglePos = document.querySelector(".triangle");
    trianglePos.style.left = "0%";    
}

// Navbar Jump-10
function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  var navbar = document.querySelector('.navbar');
  
  document.querySelectorAll('.navbar-right .nav-item').forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      var targetId = this.getAttribute('href').substring(1);
      scrollToElement(targetId);
    });
  });
  

// Navbar-Scroll
window.onload = function() {
    let navbar = document.getElementById('navbar');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  };




  