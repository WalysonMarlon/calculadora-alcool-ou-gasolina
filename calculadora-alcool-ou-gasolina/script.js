
function calcular(event){
    event.preventDefault();

    let alcoolInput = document.getElementById("alcool").value;
    let gasolinaInput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("content-result");
    let textResult = document.getElementById("text-result");


    let alcoolspan = document.getElementById("alcool-result");
    let gasolinaspan = document.getElementById("gasolina-result");

    let calculo = (alcoolInput / gasolinaInput)

    if(calculo < 0.7){
    textResult.innerHTML = "Compensa usar álcool";
    }
    
    else{
        textResult.innerHTML = "Compensa usar gasolina";
    }

    gasolinaspan.innerHTML = "Gasolina R$ " + gasolinaInput
    alcoolspan.innerHTML= "Álcool R$ " + alcoolInput

    contentResult.classList.remove("hide")



}