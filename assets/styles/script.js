

function menudropdown() {
  document.getElementById("dropdown").classList.toggle("daftar");
}
window.onclick = function(event) {
  if (!event.target.matches('.warna')) {
      var dropdowns = document.getElementsByClassName("konten-dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('daftar')) {
              openDropdown.classList.remove('daftar');
          }
      }
  }
}
