

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


//---------------------------------------------------------------Modal2
const $openBtn2 = $('#openModal2');

// Grabbing modal element
const $modal2 = $('#modal2');

// Grabbing close button
const $closeBtn2 = $('#close2');


const openModal2 = () => {
  $modal2.css('display', 'block');
}
const closeModal2 = () => {
  $modal2.css('display', 'none');
}

$openBtn2.on('click', openModal2);
$closeBtn2.on('click', closeModal2);


//---------------------------------------------------------------



//--------------------------------------------------------------Ajax form submission
  $('form').on('submit',(event) => {
  const character = $('input[type="text"]').val();
  event.preventDefault()


  $.ajax({
      url:'http://gateway.marvel.com/v1/public/characters?ts=thesoed&apikey=d46dd7f46b99a19182859d3ef5c9b862&hash=f34a04018516c1859aec3fcd30d5b44d&name=' + character,
      success: (data)=>{
        for (var i = 0; i < 20; i++) {
            image = (data.data.results[0].thumbnail.path)
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
            $('#image').html('<img src="'+image+'.jpg">');


            }
        error: ()=>{
            console.log('bad request');

      }
    }
  })
  })

//------------------------------------------------------------Superpower




$('button').on('click',(event) => {
const name = $('input[type="text"]').val();

var superPower = ['Flight','Super Strength',"X Ray Vision","Invulnerability", "Super Intellect","Super Speed","Telekinis","Psychic Ability","Healing Ability", "Master Of Machines", "Weilder of Infinity Stones"]
 const flight = superPower[Math.floor(Math.random()*superPower.length)];

const power = () => {
  for (var i = 0; i < superPower.length; i++) {
  return superPower[i]
  }

}

console.log(flight);

  })


})
