import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";
var style = window.getComputedStyle(document.body);
var themeColor = style.getPropertyValue('--theme');



const k = kaplay({
    canvas: document.getElementById("kaplay-bg"),
    background: [0,0,0,0],
});

let mouse = vec2(window.innerWidth/2,window.innerHeight/2);

window.addEventListener("mousemove", (e) => {
    mouse = vec2(e.clientX, e.clientY);
});


window.addEventListener("touchmove", (e) => {
    mouse = vec2(e.touches[0].clientX, e.touches[0].clientY);
});
     

// virtual:/scenes/game.js

onLoading((progress) => {
    // White background
    // drawRect({
    //     width: width(),
    //     height: height(),
    //     color: rgb,
    // });
});


loadSprite("bean","/imgs/beanChara.png");

loadSprite("bourgeon", "/imgs/bourgeon.png");
loadSprite("flower1", "/imgs/flower1.png");
loadSprite("flower2", "/imgs/flower2.png");
loadSprite("flower3", "/imgs/flower3.png");
loadSprite("flower4", "/imgs/flower4.png");
loadSprite("flower5", "/imgs/flower5.png");
loadSprite("flower6", "/imgs/flower6.png");
/*loadSprite("cloud1", "/imgs/cloud1.png");
loadSprite("cloud2", "/imgs/cloud2.png");
loadSprite("cloud3", "/imgs/cloud3.png");
loadSprite("cloud4", "/imgs/cloud4.png");
loadSprite("cloud5", "/imgs/cloud5.png");
loadSprite("cloud6", "/imgs/cloud6.png");
loadSprite("cloud7", "/imgs/cloud7.png");
loadSprite("cloud8", "/imgs/cloud8.png");*/

// variables
let timer = 0;
let timerMult = 2;
//let ctimer = 0;
let mouseGPos = vec2(0, 0);

function flowerComponent() {

    let ftimer = 0;
    let flifeSpan = 10000;
    let fpoints = [];
    let fpointsmax = 0;
    let fbasecolor = hsl2rgb(rand(0.2, 0.4), 0.6, 0.6);
    let ftype = randi(1, 7);
    let fsprite = "bourgeon";
    let fangle = randi(0, 360);


    return {
        id: "flower",
        require: [],

        add() {
            //console.debug("fspawn");
            fpointsmax = randi(5, 25);
            fpoints.push(Vec2.ZERO);
            ftimer = randi(0, 50);
        },

        update() {

            if (ftimer > 100 && fpoints.length < fpointsmax) {

                ftimer = randi(0, 50);
                let p = fpoints[fpoints.length - 1].add(randi(-1, 2) * fpoints.length / 4, randi(-1, -2));
                fpoints.push(p);
                //console.debug("pous")
            } else {
                if (ftimer < flifeSpan) {
                    ftimer += 1 * timerMult;
                    //fbasecolor = Color.fromHSL(ftimer / 1000, 90, 50)
                    if (fsprite == "bourgeon" && fpoints.length >= fpointsmax) {
                        this.bloom();
                    }
                } else {
                    destroy(this)
                }

            }

        },

        draw() {
            drawCircle({
                pos: vec2.ZERO,
                radius: 3,
                color: rgb(191, 137, 70),
                outline: 0,
            })
            drawLines({
                pts: fpoints,
                join: "bevel",
                width: 1 + fpoints.length / 4,
                opacity: 1,
                color: fbasecolor,
            });
            drawSprite({
                sprite: fsprite,
                pos: fpoints[fpoints.length - 1],
                scale: new Vec2(fpoints.length / 50, fpoints.length / 50),
                anchor: Vec2.ZERO,
                angle: fangle * Math.sin(ftimer / 4000)
            })
        },

        destroy() {
        },

        inspect() {
        },

        bloom() {
            fsprite = "flower" + ftype.toString();
        },
    };
}

/*function cloudComponent() {
    let ctimer = 0;
    let clifeSpan = 5000;
    let cspeed = randi(1000, 4000);
    let csprite = "cloud" + randi(1, 8).toString();
    let copacity = 0;

    return {
        id: "cloud",
        require: [],

        add() {
        },

        draw() {
            drawSprite({
                sprite: csprite,
                pos: new Vec2(ctimer / clifeSpan * cspeed, 0),
                scale: new Vec2(3, 3),
                anchor: Vec2.ZERO,
                opacity: copacity,
            });
        },

        update() {
            ctimer += 1 * timerMult;
            if (ctimer < clifeSpan / 2) {
                copacity = (ctimer / (clifeSpan / 2)) * 0.3
            } else {
                copacity = (1 - (ctimer - clifeSpan / 2) / (clifeSpan / 2)) * 0.3
            }
            if (ctimer >= clifeSpan) {
                this.destroy()
            }
        },

        destroy() {

        },

    }

}*/

const player = add([
    sprite("bean"),

    pos(innerWidth/2, innerHeight/2),

    rotate(0),

    anchor("center"),
]);

/*add([
    pos(0, randi(0, innerHeight)),
    rotate(0),
    anchor("center"),
    z(10000),
    cloudComponent(),
]);*/

player.onUpdate(() => {

    player.pos = lerp(
        player.pos,
        mouseGPos,
        0.02
    );

    if (mouseGPos.x > player.pos.x) {
        player.flipX = true;
    } else {
        player.flipX = false;
    }

    player.z = player.pos.y;

    mouseGPos = mousePos();
});

onUpdate(() => {

    if (timer > 100) {

        timer = randi(0, 50);

        add([
            pos(player.pos.add(randi(-10, 10), 25 + randi(-5, 5))),
            rotate(0),
            anchor("center"),
            z(player.pos.y),
            flowerComponent(),
        ]);
        /*if (ctimer > 6) {
            add([
                pos(0, randi(0, innerHeight)),
                rotate(0),
                anchor("center"),
                z(10000),
                cloudComponent()
            ])
            ctimer = 0;
        } else {
            ctimer += 1;
        };*/
    } else {

        timer += 1 * timerMult;

    }
    mouseGPos = mouse;
});





