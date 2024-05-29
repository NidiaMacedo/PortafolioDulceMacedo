let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor:"<span style='color:#fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#ff23ac;">Soy Ingeniera en Sistemas Computacionales y desarrollo aplicaciones web.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
