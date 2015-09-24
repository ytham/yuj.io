$(document).ready(function () {
  var page = document.location.hash.split('#')[1]
  if (page === 'projects') {
    console.log("Projects Page");
  } else if (page === 'contact') {
    console.log("Contact Page");
  }

  $('#link_projects').on('click', function () {

  })
});

function goToProjects() {
  console.log("Project clicked");
  $('#basepage').animate({ left: '100%', scrollTop: 0 });
}

function goToCover() {
  $('#basepage').animate({ left: '0%', scrollTop: 0 });
}

function goToContact() {
  $('#basepage').animate({ left: '-100%', scrollTop: 0 });
}
