var API_ENDPOINT = "https://ibi665qoi8.execute-api.us-east-1.amazonaws.com/dev/data";

document.getElementById("sayButton").onclick = function() {
  var inputData = {
    "voice": $('#voiceSelected option:selected').val(),
    "text" : $('#postText').val()
  };

  $.ajax({
    url: API_ENDPOINT,
    type: 'POST',
    data:  JSON.stringify(inputData),
    contentType: 'application/json; charset=utf-8',
    success: function (response) {
      document.getElementById("postIDreturned").textContent = "✅ Message: " + response;
    },
    error: function () {
      alert("❌ Something went wrong!");
    }
  });
};

document.getElementById("searchButton").onclick = function() {
  $.ajax({
    url: API_ENDPOINT,
    type: 'GET',
    success: function (response) {
      $('#posts tbody').empty();
      jQuery.each(response, function(i, data) {
        let player = data.url ? `<audio controls><source src="${data.url}" type="audio/mpeg"></audio>` : "";
        $("#posts tbody").append(`<tr>
          <td>${data['selected voice']}</td>
          <td>${data['input text']}</td>
          <td>${data['status']}</td>
          <td>${player}</td>
        </tr>`);
      });
    },
    error: function () {
      alert("❌ Error loading audio posts!");
    }
  });
};

document.getElementById("postText").onkeyup = function() {
  let length = $('#postText').val().length;
  document.getElementById("charCounter").textContent = "Characters: " + length;
};
