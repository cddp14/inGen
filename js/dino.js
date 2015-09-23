//do a light box for each dinosaur profile.  This way the user can view a picture before clicking on the profile.
//Problem: User when clicking on image goes to a dead end.
//Solution:  Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
//var $profiles = ("#profiles");
var $image = $("<img>");
var $caption = $("<p></p>");

var $close =$("<button>Close</button>");
var $profileLink =$("<button>See Profile</button>");


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



//$overlay.append("button");

//Hide popups
//$("button").hide();
// $(".close").hide();
  
  
//Capture theclick event on a link to an immage
$("#profiles a").click(function(event){
  event.preventDefault();
var imageLocation =  $(this).attr("href");
//Update overlay with the image linked in the link 
  $image.attr("src",imageLocation);

   // var closeButton = $(this).children("button").attr("href");
   // $close.attr("src",closeButton);


  //Show overlay
    $overlay.show();
    //("button").show();


  //Get child's alt attribute and set caption
  var captionText= $(this).children("img").attr("alt");
  $caption.text(captionText);

  // var closeButton = $(this).children("button");
  // $close.button(closeButton);

  
});


// When mouse leaves overlay
$close.click(function(){
  //hide overlay image
  $overlay.hide();

});


// When mouse leaves overlay
$profileLink.click(function(){
  //hide overlay image
  $overlay.hide();

//Update overlay with the image linked in the link 
  

  


});




//Capture the click event on a link to an immage
//$overlay.click(function(){
  //event.preventDefault();
//$overlay.(this).attr("href2");


  
//});
