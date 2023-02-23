song1 = "";
song2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function setup(){
    canvas.createCanvas (550, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on ('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if (results.length > 0){
    
        leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " +leftWristX+ "leftWristY" +leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " +rightWristX+ "rightWristY" +rightWristY);
}
    }

function preLoad(){
    song1 = loadSound("Charlie Puth - Light Switch.mp3");
    song2 = loadSound("Ed Sheeran - Perfect.mp3");
}

function play(){
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
    
    song2.play();
    song2.setVolume(1);
    song2.rate(1);
    
}

function draw(){
    image (video, 0, 0, 550, 600);
}