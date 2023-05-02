Webcam.set({
  width:350,
  height:300,
  image_format:"png",
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("camera");
function takeSnapshot(){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="imagemcapiturada" src="'+data_uri+'">';
  });
}
console.log("ml5",ml5.version);
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pOH5jaNpP/model.json",modelLoaded);
function modelLoaded(){
  console.log("CAVALO")
}
function check(){
  img=document.getElementById("imagemcapiturada");
  classifier.classify(img,gotResult);
}
function gotResult(error,results){
  if(error){
    console.error(error)
  }else{
    document.getElementById("resultObjectName").innerHTML=results[0].label;
document.getElementById("resultObjectAccuracy").innerHTML=results[0].confidence
  }
}