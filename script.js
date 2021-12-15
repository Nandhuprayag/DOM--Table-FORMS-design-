console.log('HEllo ')

var myForm=document.createElement('form');
myForm.setAttribute('id','form');

var myFirst=document.createElement('label');
myFirst.innerText="First Name";
myForm.appendChild(myFirst)

var mySpace=document.createElement('br');
myForm.append(mySpace) 

var myinput=document.createElement('input');
myinput.setAttribute('type','text');
myinput.setAttribute("id","first");
myForm.appendChild(myinput)

var myspace_2=document.createElement('br');
myForm.appendChild(myspace_2);
//Creating the Last Name Part
var myLast=document.createElement('label');
myLast.innerText="Last Name";
myForm.appendChild(myLast);

var myspace_3=document.createElement('br');
myForm.appendChild(myspace_3);

var myinput1=document.createElement('input');
myinput1.setAttribute('type','text');
myinput1.setAttribute("id","last");
myForm.appendChild(myinput1);
//Creating the Email
var myspace_3=document.createElement('br');
myForm.appendChild(myspace_3);

var myEmail=document.createElement('label');
myEmail.innerText="Email";
myForm.appendChild(myEmail)

var myspace_4=document.createElement('br');
myForm.appendChild(myspace_4);

var myinput2=document.createElement('input');
myinput2.setAttribute('type','email');
myinput2.setAttribute("id","email");
myForm.appendChild(myinput2);

var myspace_5=document.createElement('br');
myForm.appendChild(myspace_5);
//creating Password Part

var myPassword=document.createElement('label');
myPassword.innerText="Password";
myForm.appendChild(myPassword);

var myspace_6=document.createElement('br');
myForm.appendChild(myspace_6);


var myinput3=document.createElement('input');
myinput3.setAttribute('type','number');
myinput3.setAttribute("id","number");
myForm.appendChild(myinput3);

var myspace_7=document.createElement('br');
myForm.appendChild(myspace_7);

//Creating the Button
var myButton=document.createElement('button');
myButton.innerText="Submit";
myButton.setAttribute("id",'demo')
myButton.addEventListener('click',function()
{
   var getFirst=document.getElementById('first').value
    console.log(getFirst);

     var getLast=document.getElementById('last').value
     console.log(getLast)

     var getEmail=document.getElementById('email').value
     console.log(getEmail);
     var getPass=document.getElementById('number').value;
     console.log(getPass)

    
})


myForm.appendChild(myButton)




function createSpace(elename,value)
{
    let element=document.createElement(elename);
    element.innerHTML=value;

    return  element
}























document.body.append(myForm)