let variable = ""
let opcode = ""
let primerNumero = ""



function raiz(){
    
    document.getElementById("pantalla").textContent = Math.sqrt(variable);
 
    }

function mostrarnumero(numero){
    variable+= numero
    document.getElementById("pantalla").textContent = variable;
 
    }
function dejarlapantallaenblanco(){
    variable= ""
    document.getElementById("pantalla").textContent = "";
 
    }


function option(modo){
    primerNumero = variable
    variable = ""
    opcode = modo
    document.getElementById("pantalla2").textContent = variable + modo
 
    }

function igual(){
    let resultado;
    if (opcode == "+") {
    resultado = Number(variable) + Number(primerNumero);

     }   
 if (opcode == "-") {
    resultado = primerNumero - variable;

     }
    if (opcode == "×") {
    resultado = variable * primerNumero;

     }
    

    if (opcode == "÷") {
        if (variable == 0) {
            resultado = "Error: División por cero";
        } else {
            resultado = primerNumero / variable;
        }

     }
     document.getElementById("pantalla").textContent = resultado;
   
}