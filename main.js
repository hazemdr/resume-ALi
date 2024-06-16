var typed = new Typed('.input', {
    strings: ['<i></i> Personal Trainer.', 'Soccer Coach.' , 'physical education teacher'],
    typeSpeed: 50,
  });
  let menu = document.querySelector("#menu-icon");
  let navlist=document.querySelector(".navlist");
  menu.onclick=() =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')

   }


   const header = document.querySelector("header");
   window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 90 )

   });




  //  contact forum
  function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    const templateID = "template_g37ow1x";
    const serviceID = "service_yo7vkt4";
    
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")
    
      })
      .catch(err=>console.log(err));
    }