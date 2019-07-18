$(() => {

  $('form').on('submit',(event) => {
  const character = $('input[type="text"]').val();
  event.preventDefault()
  $.ajax({
      url:'http://gateway.marvel.com/v1/public/characters?ts=thesoed&apikey=d46dd7f46b99a19182859d3ef5c9b862&hash=f34a04018516c1859aec3fcd30d5b44d&name=' + character,
      success: (data)=>{
          $('#name').html(data.data.results[0].name);
          $('#bio').html(data.data.results[0].description);
          $('#comics').html(data.data.results[0].comics.items[0].name);
          $('#series').html(data.data.results[0].series.items[4].name);
          $('#events').html(data.data.results[0].events.items[4].name);



      },
      error: ()=>{
          console.log('bad request');
      }
  })



  })
})
