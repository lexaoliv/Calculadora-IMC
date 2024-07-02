function getValueInput(value) {
 //   var input = document.getElementById('meuInput');
 //   var valor = input.value;
 //   console.log('Valor do input:', valor);
   console.log('Valor do input:', document.getElementById('meuInput').value); 
}

//const calculateImc = () => {};

function calculateImc() {

  // ESSE
    var weight = document.getElementById('weightInput').value;
    var height = document.getElementById('heightInput').value;
    var imc1 = weight / (height * height);
    var imcResult = document.createElement("h1")
    var imcText = document.createTextNode("Seu IMC é "+ imc1)
    imcResult.appendChild(imcText)
    document.getElementById('showImc').appendChild(imcResult)

    // OU ESSE
    //let imc2 = document.getElementById('weightInput').value / Math.pow(document.getElementById('heightInput').value, 2);

    console.log('weight', weight);
    console.log('height', height);
    console.log('o IMC1 é:', imc1);
    //console.log('o IMC2 é:', imc2);


    // ADICIONAR O IMC NO HTML
    //document.createElement()
    //document.body.appendChild('123')
    
};
// calculateImc() --------- ALTERAÇÃO DO MAX AQUI Ó ---------
//ffff