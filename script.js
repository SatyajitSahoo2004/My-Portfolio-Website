// document.addEventListener("DOMContentLoaded", function () {
//     const sidebar = document.getElementById("sidebar");
//     const modeToggle = document.getElementById("modeToggle");

//     modeToggle.addEventListener("change", function () {
//         if (modeToggle.checked) {
//             // Toggle sidebar on
//             sidebar.style.right = "0";
//         } else {
//             // Toggle sidebar off
//             sidebar.style.right = "-250px";
//         }
//     });
// });


document.getElementById('downloadcv').addEventListener('click', function() {
    var link = document.createElement('a');
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('modeToggle');
    const modeLabel = document.getElementById('modeLabel');

    modeToggle.addEventListener('change', function () {
        if (modeToggle.checked) {
            document.body.classList.remove('day-mode');
            document.body.classList.add('night-mode');
            
        } else {
            document.body.classList.remove('night-mode');
            document.body.classList.add('day-mode');
        }
    });
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'night') {
        modeToggle.checked = true;
        modeToggle.dispatchEvent(new Event('change'));
    }
});
window.addEventListener('beforeunload', function () {
    const currentMode = document.body.classList.contains('night-mode') ? 'night' : 'day';
    localStorage.setItem('mode', currentMode);
});

let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}