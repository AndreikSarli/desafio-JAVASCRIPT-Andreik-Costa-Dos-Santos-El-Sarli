
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
       
    }
} 


function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if (carClass instanceof Car) {
        if (el.checked) {
            
            if (carArr.length < 2) {
                carArr.push(carClass);
            } else {
                alert("Você só pode comparar 2 carros por vez.");
                el.checked = false; 
            }
        } else {
            
            let index = GetCarArrPosition(carArr, carClass);
            if (index > -1) {
                carArr.splice(index, 1);
            }
        }
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "flex";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    for (let i = 0; i < 2; i++) {
        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${carArr[i].image}" style="width: 150px;">`;
        document.getElementById(`compare_modelo_${i}`).innerText = carArr[i].nome;
        document.getElementById(`compare_alturacacamba_${i}`).innerText = carArr[i].alturaCacamba;
        document.getElementById(`compare_alturaveiculo_${i}`).innerText = carArr[i].alturaVeiculo;
        document.getElementById(`compare_alturasolo_${i}`).innerText = carArr[i].alturaSolo;
        document.getElementById(`compare_capacidadecarga_${i}`).innerText = carArr[i].capacidadeCarga;
        document.getElementById(`compare_motor_${i}`).innerText = carArr[i].motor;
        document.getElementById(`compare_potencia_${i}`).innerText = carArr[i].potencia;
        document.getElementById(`compare_volumecacamba_${i}`).innerText = carArr[i].volumeCacamba;
        document.getElementById(`compare_roda_${i}`).innerText = carArr[i].roda;
        document.getElementById(`compare_preco_${i}`).innerText = "R$ " + carArr[i].preco.toLocaleString('pt-BR');
    }
}

