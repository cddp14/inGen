//do a light box for each dinosaur profile.  This way the user can view a picture before clicking on the profile.
//Problem: User when clicking on image goes to a dead end.
//Solution:  Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
//var $profiles = ("#profiles");
var $image = $("<img>");
var $caption = $("<p></p>")

//An image to overlay
$overlay.append($image);

//A catpion to overlay
$overlay.append($caption);

// Add overlay
$("body").append($overlay);

//Hide popups
$("#popup").hide();
  
  
//Capture theclick event on a link to an immage
$("#profiles a").hover(function(event){
  event.preventDefault();
var imageLocation =  $(this).attr("href");
//Update overlay with the image linked in the link 
  $image.attr("src",imageLocation);
  
  //Show overlay
    $overlay.show();

  //Get child's alt attribute and set caption
 var captionText= $(this).children("img").attr("alt");
  $caption.text(captionText);
});


// When mouse leaves overlay
$overlay.mouseleave(function(){
  //hide overlay image
  $overlay.hide();

});


//Capture the click event on a link to an immage
//$overlay.click(function(){
  //event.preventDefault();
//$overlay.(this).attr("href2");


  
//});
