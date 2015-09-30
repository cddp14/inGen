//do a light box for each dinosaur profile.  This way the user can view a picture before clicking on the profile.
//Problem: User when clicking on image goes to a dead end.
//Solution:  Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

var $close =$("<button>Close</button>");
var $profileLink =$("<button>See Profile</button>");

var $theProfile =$("<a></a>");
var link;


//An image to overlay
$overlay.append($image);

//A catpion to overlay
$overlay.append($caption);

//An close button to overlay
$overlay.append($close);

//Append  profile link to button
$overlay.append($profileLink);

// Add overlay
$("body").append($overlay);

  
  
//Capture theclick event on a link to an immage
$("#profiles a").click(function(event){
  event.preventDefault();
var imageLocation =  $(this).attr("href");
//Update overlay with the image linked in the link 
  $image.attr("src",imageLocation);

     //Show overlay
    $overlay.show();
    

  //Get child's alt attribute and set caption
  var captionText= $(this).children("img").attr("alt");
  $caption.text(captionText);

link =  $(this).children("img").attr("href"); 

  
});


// Click the close button
$close.click(function(){
  //hide overlay image
  $overlay.hide();

});


// When clicking the See profile button
$profileLink.click(function(){
  
//load profile page
 $("body").load(link);
 
  

});

//**************************************************************************************************

// // 1. Create XML object
// var xhr = new XMLHttpRequest();

// //2. Call back function
// xhr.onreadystatechange = function(){
//   if(xhr.readyState ===4){
//      var dinosaur = JSON.parse(xhr.responseText);
//      for(i=0; i<dinosaur.length; i++){
//       if(dinosaur[i].name === captionText){
//          link = dinosaur[i].link;
//       }


//      }
//    }
    
// };

// //3. Opening a request
// xhr.open('GET', 'dino.json');

// //4. Send request
// xhr.send();











//***************************************************************************************************
//Capture the click event on a link to an immage
//$overlay.click(function(){
  //event.preventDefault();
//$overlay.(this).attr("href2");


  
//});
