$(document).ready(function () {
  var page = document.location.hash.split('#')[1]
  if (page === 'projects') {
    console.log("Projects Page");
    // $('#basepage').css({ left: '100%' });
  } else if (page === 'contact') {
    console.log("Contact Page");
    // $('#basepage').css({ left: '-100%' });
  }

  $('#link_projects').on('click', function () {

  })
});

function goToProjects() {
  $('#basepage').animate({ left: '0%', scrollTop: 0 });
  $('#rightBackButton').css({ display: 'inline-block' });
}

function goToCover() {
  $('#basepage').animate({ left: '-100%', scrollTop: 0 });
}

function goToContact() {
  $('#basepage').animate({ left: '-200%', scrollTop: 0 });
  $('#leftBackButton').css({ display: 'inline-block' });
}

function backButton(position) {
  if (position === 'left') {

  } else if (position === 'right') {

  } else {

  }

}
