function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/V9ReOnzkM/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;
var cow = 0;
var parrot = 0;

function gotResults(error,results)
{
    if (error)
    {
        console.error(error);
    }
    else 
    {
        console.log(results);

    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

        
    document.getElementById("result_voice").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_times").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat+ ' Detected Cow - '+cow+ ' Detected Parrot - '+parrot ;
    document.getElementById("result_voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_times").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    
    if (results[0].label == "dog") 
      {
        img.src = 'dog-dribbble.gif';
        dog = dog + 1;
      } 
    else if (results[0].label == "cat") 
      {
        img.src = 'NAk7.gif';
        cat = cat + 1;
      }
      else if (results[0].label == "cow") 
      {
        img.src = 'cute-cow.gif';
        cow = cow + 1;
      }
      else if (results[0].label == "parrot") 
      {
        img.src = 'tt.gif';
        parrot = parrot + 1;
      }
    else{
        img.src = 'ear-gif.gif';
      }
    
    }
}
