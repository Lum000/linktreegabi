document.addEventListener("DOMContentLoaded", () =>{
    const gmailhref = document.getElementById("gmailhref");
    if(!gmailhref) return;

    if (window.matchMedia("(max-width: 768px)").matches) {
        gmailhref.href = "mailto:contatogabiromancini@gmail.com";
    }
    else{
        gmailhref.href = "https://mail.google.com/mail/?view=cm&to=contatogabiromancini@gmail.com&su=Contato%20pelo%20site&body=Olá%20vim%20do%20seu%20site%20e%20gostaria%20de%20fazer%20contato%20para%20uma%20parceria";

    }
});