// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  var modals = document.querySelectorAll(".modal");
  for (var i = 0; i < modals.length; i++) {
    var modal = modals[i];

    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
};

function openModal(modalId) {
  var modal = document.getElementById(modalId);

  modal.style.display = "block";
}

function close(modalId) {
  var modal = document.getElementById(modalId);

  modal.style.display = "none";
}

// Mattia Sassone
