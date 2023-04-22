function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true, video:false});
    classifier = ml5.soundClassifier( 'https://teachablemachine.withgoogle.com/models/5xMUflANc/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}
