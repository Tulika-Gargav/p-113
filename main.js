function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    rect(30, 20, 640, 480);
    color = green;
    width = 20;

}

function take_snapshot()
{
    save('student_name.png');
}


