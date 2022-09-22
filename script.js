// let teamNav = ;
// let experienceNav = ;
let contactNav = document.getElementById("nav-contact");
let contactFields = document.getElementsByClassName('contact-field');


function hoverNavItems() {
    if (window.pageYOffset < 1710) {
        document.getElementById("nav-team").classList.remove("hover")
      
       
    }else if (window.pageYOffset > 1710 && window.pageYOffset < 4719 ) {
        document.getElementById("nav-team").classList.add("hover");
    document.getElementById("nav-experience").classList.remove("hover");

} else if (window.pageYOffset > 4719 && window.pageYOffset < 5256) {
    document.getElementById("nav-team").classList.remove("hover")
    document.getElementById("nav-experience").classList.add("hover");
    document.getElementById("nav-contact").classList.remove("hover");

} else if (window.pageYOffset > 5256) {
    document.getElementById("nav-contact").classList.add("hover");
    document.getElementById("nav-experience").classList.remove("hover");



}
}

function sendForm() {
    alert('Sent!')
for (let i =0; i < contactFields.length; i++) {
    contactFields[i].value = "";
}
}