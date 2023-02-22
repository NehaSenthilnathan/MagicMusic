function setup(){
    canvas.createCanvas (550, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on ('pose', gotPose);
}


function modelLoaded(){
    console.log("PoseNet is initialized");
}

function preLoad(){
    song1 = loadSound("Charlie Puth - Light Switch.mp3");
    song2 = loadSound("Ed Sheeran - Perfect.mp3");
}

function play(){
    song.play();
}

function draw(){
    image (video, 0, 0, 550, 600);
}