//***********************************
//Testing my script if it is linked
//***********************************

console.log('js');

//********************************************************
// Displaying using loop
//********************************************************

var i = 250; //global variable means, active everywhere
console.log('global value: ' , i);
//for (i = 0 ; i <  10 ; i++){
  //document.getElementById('result').innerHTML += ' ' + parseInt(i+1) + '. ' + 'Yoobee' + '<br>';
//}




//********************************************************
// Displaying details of user who lives in Wellington city
//********************************************************


// document.getElementById('submit').addEventListener('click', function(){

    //var x; //I did not say whether it is  a string or numeric
    var i = 0; //local to this function
    console.log('local: ', i);

    console.log('local: ', i+10);
  //  var name = '';
  //  var place = '';
    //var name, place;

    //trim removes extra spaces before and after the value in the text box
    //var name = (document.getElementById('name').value).trim();
  //  console.log(name);
    //var place = (document.getElementById('place').value);
  //  console.log(place.trim().toUpperCase());

  ///  var result = '';
    //var x = 10;// numeric data type
    //var x = '10'; // string data type

     /* loop is to repeat, need to initialize the variable, check for final value
      and increment or decrement as per the need*/
  //  for (i=0; i<2; i++) {

      // prompt is to take input from the user
      //name = prompt('Enter your name: ');
      //place = prompt('Enter your place: ');




      // == operator will only check for equivalence after converting its data type
      // === operator checks if both sides are equivalent and same data type
      //if (place.trim().toUpperCase() === 'WELLINGTON') {
       //alert('Name ' + name);

      //document.getElementById('result').innerHTML += '<br>' + name + '<br>' + place;
    //}; //end of if
  //}; //end of for

// });//end of addEvenListener



//showing  global i value

console.log('global value: ' , i+10);
