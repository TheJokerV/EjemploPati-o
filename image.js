const imagen=document.getElementById("image");
            const resultado=document.getElementById("result");
            const probabilidad=document.getElementById("probability");
            
            const classifier=ml5.imageClassifier("MobileNet",function (){
                console.log("Modelo cargado");
            });
            classifier.predict(image,function (err,res){
                console.log(res);
                result.innerText=res[0].className;
                probability.innerText = res[0].probability;
            });