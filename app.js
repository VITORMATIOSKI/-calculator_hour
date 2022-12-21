const dailyHours = document.querySelector('#form_hour');
const workedDays = document.querySelector('#form_days');
const debts = document.querySelector('#form_debt');
const equipement = document.querySelector('#form_equiment');

const result = document.querySelector('#total_value');
const hidden = document.querySelector('#resultado');

const button = document.querySelector('#calc');

button.addEventListener("click", (e)=>{

     e.preventDefault()

     if(dailyHours.value == "" || workedDays == "" || debts == "" || equipement == ""){
          alert("Preencha os campos vazios!!");
     }else{
          calc();
     }
})

function calc(){

     let equipementMoth = Number(equipement.value) / 12;
     let totalDept = Number(debts.value) + equipementMoth;
     let mouthHours =  Number(dailyHours.value) * Number(workedDays.value);

     const valueHours = (totalDept / mouthHours / 0.5).toFixed(2);

     hidden.classList.remove("hidden")
     result.innerHTML = `R$ ${valueHours}`

     dailyHours.value = "";
     workedDays.value = "";
     debts.value = "";
     equipement.value = "";
}