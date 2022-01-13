// For point mouse
let toPointEffect = document.getElementById("toPoint-effect");
let panel = document.getElementById("panel-Mihajlo");
let panelCood = panel.getBoundingClientRect();

// For rounds
let roundBox = document.getElementById("round-box");
let roundBoxCood = roundBox.getBoundingClientRect();


// If user change resolution of window
window.addEventListener("resize", function()
{
    panelCood = panel.getBoundingClientRect();
    roundBoxCood = roundBox.getBoundingClientRect();
});

// Effect for point mouse on window
document.body.addEventListener("mousemove", function(mouse)
{
    let localLeft = mouse.clientX - panelCood.left;
    let localTop = mouse.clientY - panelCood.top;

    let coodToPointTop = localTop - (toPointEffect.offsetHeight / 2);
    let coodToPointLeft = localLeft - (toPointEffect.offsetWidth / 2);

    


    toPointEffect.style.top = `${coodToPointTop}px`;
    toPointEffect.style.left = `${coodToPointLeft}px`;
});

// Effect for box
document.body.addEventListener("mousemove", function(mouse)
{
    let delta = 0.3;

    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;

    let mouseFromCenterY = centerY - mouse.clientY;
    let mouseFromCenterX = centerX - mouse.clientX;

    mouseFromCenterX *= delta;
    mouseFromCenterY * delta;

    let procentX = (mouseFromCenterX * delta) * 50 / centerX + 50;
    let procentY = (mouseFromCenterY * delta) * 50 / centerY + 50;



    roundBox.style.top = `${procentY}%`;
    roundBox.style.left = `${procentX}%`;
});