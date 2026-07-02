import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";

const k = kaplay({
    canvas: document.getElementById("kaplay-bg"),
    background: [0, 0, 0, 0],
});

let mouse = vec2(0, 0);

window.addEventListener("mousemove", (e) => {
    mouse = vec2(e.clientX, e.clientY);
});
     

// virtual:/scenes/game.js

loadSprite("bean","/imgs/beanChara.png")
var obj = add([
  sprite("bean"),
   // it renders as a sprite
     pos(100, 100),
     rotate(0),
  // set the rotation
  anchor("center")
  // set the pivot point
]);
var mouseGPos = mouse;
onUpdate(() => {
  if (mouseGPos.x > obj.pos.x) {
    obj.flipX = true;
  } else {
    obj.flipX = false;
    }
  mouseGPos = mouse;
});
obj.onUpdate(() => {
  obj.pos = lerp(obj.pos, mouseGPos, 0.02);
  
});

// virtual:/main.js
//go("game");