noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;


function setup(){
video = createCapture(VIDEO);
video.size(500, 500);

canvas = createCanvas(500, 500);
canvas.position(600, 100);

posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses)

}

function modelLoaded(){
    console.log("Model is Loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX + "nose Y =" + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftwrist = " + leftWristX + "rightwrist  =" + rightWristX + " difference = " + difference);
    }
}

function preload(){
      



}

function draw(){

background('whitesmoke');
document.getElementById("square-side").innerHTML = "Width and Height of a square will be = "+ difference + "px";
fill('#F90093');
stroke('#F90093');
square(noseX, noseY, difference);



}