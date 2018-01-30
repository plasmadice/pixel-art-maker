let method = '';

function makeGrid() {
    $('#pixelCanvas').children().remove();

    let width = $('#inputWidth').val();
    let height = $('#inputHeight').val();

    for (let i = 0; i < height; i++) {
      $('#pixelCanvas').append(`<tr id='row${i}'></tr>`);
      for (let x = 0; x < width; x++) {
        $(`#row${i}`).append('<td></td>');
      }
    }
  }

function colorSquare() {
    $(this).css('background-color', $('#colorPicker').val())
}

function drawType(a) {
    // Picks the method of drawing and prevents combining them
    if (a === 1) {
        $('#pixelCanvas').off('mouseenter', 'td', colorSquare);
        $('#pixelCanvas').on('click', 'td', colorSquare);
    } else if (a === 2) {
        $('#pixelCanvas').off('click', 'td', colorSquare);
        $('#pixelCanvas').on('mouseenter', 'td', colorSquare);
    }
}

$('input[type="button"]').click(function(e) {
    e.preventDefault();
    makeGrid();
  });

