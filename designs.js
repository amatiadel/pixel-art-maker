var height, widht, color;

$('#sizePicker').submit(function (event) {
   event.preventDefault();
   height = $('#inputHeight').val();
   widht = $('#inputWidth').val();
   makeGrid(height,widht)

})

function makeGrid(x,y) {
   $('tr').remove();
   for (var i = 1; i <= x; i++) {
      $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
      for (var j = 1 ; j <= y ; j++){
         $('#table' +i).append('<td></td>');
      }     
   }



$('body').on('click', 'td', function() {
	var color = document.getElementById('colorPicker').value;
    $(this).css('background-color', color);
});
}
