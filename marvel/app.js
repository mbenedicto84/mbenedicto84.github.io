

$(() => {

//---------------------------------------------------------------Modal
const $openBtn = $('#openModal');

// Grabbing modal element
const $modal = $('#modal');

// Grabbing close button
const $closeBtn = $('#close');


const openModal = () => {
  $modal.css('display', 'block');
}
const closeModal = () => {
  $modal.css('display', 'none');
}

$openBtn.on('click', openModal);
$closeBtn.on('click', closeModal);


//---------------------------------------------------------------


//--------------------------------------------------------------Ajax form submission
  $('form').on('submit',(event) => {
  const character = $('input[type="text"]').val();
  event.preventDefault()


  $.ajax({
      url:'http://gateway.marvel.com/v1/public/characters?ts=thesoed&apikey=d46dd7f46b99a19182859d3ef5c9b862&hash=f34a04018516c1859aec3fcd30d5b44d&name=' + character,
      success: (data)=>{
        for (var i = 0; i < 20; i++) {
             $div = $('<div>');
             $div.addClass('eve');
             $div2 = $('<div>');
             $div2.addClass('ser');
             $div3 = $('<div>');
            $('#events').append($div);
            $('#series').append($div2);
            $('#comics').append($div3);
          $('#name').html(data.data.results[0].name);
          $('#bio').html(data.data.results[0].description);
          $div3.append( '<div>' ).html(data.data.results[0].comics.items[i].name);
          $div2.append( '<div>' ).html(data.data.results[0].series.items[i].name);
          $div.append( '<div>' ).html(data.data.results[0].events.items[i].name);



      }
      error: ()=>{
          console.log('bad request');
      }
          }
  })



  })





})
