

$(() => {

//---------------------------------------------------------------Modal
const $openBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('#close');
const openModal = () => {
  $modal.css('display', 'block');
}
const closeModal = () => {
  $modal.css('display', 'none');
}

$openBtn.on('click', openModal);
$closeBtn.on('click', closeModal);
  setTimeout(openModal, 100);
//---------------------------------------------------------------


//---------------------------------------------------------------Modal2
const $openBtn2 = $('#openModal2');
const $modal2 = $('#modal2');
const $closeBtn2 = $('#close2');
const openModal2 = () => {
  $modal2.css('display', 'block');
}
const closeModal2 = () => {
  $modal2.css('display', 'none');
}

$openBtn2.on('click', openModal2);
$closeBtn2.on('click', closeModal2);
  setTimeout(openModal2, 100);
//---------------------------------------------------------------



//--------------------------------------------------------------Ajax form submission
  $('form').on('submit',(event) => {

  const character = $('input[type="text"]').val();
  event.preventDefault()


  $.ajax({
      url:'https://gateway.marvel.com/v1/public/characters?ts=thesoed&apikey=d46dd7f46b99a19182859d3ef5c9b862&hash=f34a04018516c1859aec3fcd30d5b44d&name=' + character,
      success: (data)=>{


        for (var i = 0; i < 20; i++) {
             image = (data.data.results[0].thumbnail.path)
             $div = $('<div>');
             $div.addClass('eve');
             $div2 = $('<div>');
             $div2.addClass('ser');
             $div3 = $('<div>');
              $div4 = $('<div>');
            $('#events').append($div);
            $('#series').append($div2);
            $('#comics').append($div3);
            $('#stories').append($div4);
            $('#name').html(data.data.results[0].name);
            $('#bio').html(data.data.results[0].description);
            $div4.append( '<div>' ).html(data.data.results[0].stories.items[i].name);
            $div3.append( '<div>' ).html(data.data.results[0].comics.items[i].name);
            $div2.append( '<div>' ).html(data.data.results[0].series.items[i].name);
            $div.append( '<div>' ).html(data.data.results[0].events.items[i].name);
            $('#image').html('<img src="'+image+'.jpg">');
            name = (data.data.results[0].name)
//----------------------------------------------------------------- call back if there is no info dsiplay
            if (data.data.results[0].description == ""){
      $('#bio').append('<span>Biography Not Found</span>');
            }
//-----------------------------------------------------------------



      }

        error: ()=>{
            console.log('bad request');


      }
    }
  })
  })
//------------------------------------------------------------Clear input text upon click

$('input:text').focus (function(){
$(this).val('');
    });

//------------------------------------------------------------Superpower




$('form').on('submit',(event) => {

const name = $('input[type="text"]').val();

var superPower = ['Flight','Super Strength',"X Ray Vision","Invulnerability", "Super Intellect","Super Speed","Telekinisis","Psychic Ability","Healing Ability", "Master Of Machines", "The Infinity Gauntlet", "Adamantium Claws", "Super Soldier", "Super Secret Agent", "Invisibility" ]

const flight = superPower[Math.floor(Math.random()*superPower.length)];

    $('.power').html(name + ' you have recieved the super power of ' + flight );
    $('input:text').focus (function(){
    $(this).val('');
        });


  })
//----------------------------------------------------------carousel

var currentImgIndex = 0
var $currentImg = $('.marvel-images').children().eq(currentImgIndex)
var numOfImages = $('.marvel-images').children().length - 1


const $next = $('.nextphoto')
const $previous = $('.previousphoto')

$next.on('click', () => {
  $currentImg.hide()

  if(currentImgIndex < numOfImages) {

    currentImgIndex++
  } else {
    currentImgIndex = 0
  }

  $currentImg = $('.marvel-images').children().eq(currentImgIndex)
  $currentImg.show()
})
$previous.on('click', () => {
  $currentImg.hide()

  if (currentImgIndex > 0) {

  currentImgIndex--
  } else {
    currentImgIndex = numOfImages
  }
  $currentImg = $('.marvel-images').children().eq(currentImgIndex)

  $currentImg.show()
})
//-------------aded interval to photo
setInterval(function(
){
$('.nextphoto').click()
},2000)

//----------------tottle Button
$('.button').click(function() {
  $('.hawkeye').toggle( );
});


})
