$(document).ready(function($){
                  
var imageBox = $('.slider ul');
var imageWidth = $('.slider ul li').first().children('img').width();
var imageQuantity = $('slider ul').children('li').length;
var currentImage = 1;

imageBox.css('width', imageWidth*imageQuantity);

$('.nav button').on('click', function(){
    var whichButton = $(this).data('nav');
    
    if(whichButton === 'next'){
        if(currentImage === imageQuantity){
            currentImage = 0;
            transition(currentImage, imageWidth);
        }else{
            currentImage++;
            transition(currentImage, imageWidth);
        }
    }else if(whichButton === 'prev'){
    currentImage--;
    transition(currentImage, imageWidth);
}
});

function transition(currentImageInput, ImageWidthInput){
    var pxValue = -(currentImageInput -0) * ImageWidthInput
    
    imageBox.animate({
        'left':pxValue
    });
}
});
                  
              
                  
                  
                  

