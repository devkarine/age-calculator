let dia = document.getElementById("dia");
let mes = document.getElementById("mes");
let anoNascimento = document.getElementById("ano");

const btnCalcular = document.getElementById("btn-calcular");

const dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();
let mesAtual = dataAtual.getMonth() + 1;
let diaAtual = dataAtual.getDate();


btnCalcular.addEventListener("click", (event) => {
    event.preventDefault()
  inputDia();
  inputMes();
  inputAno();
  
});


function inputDia() {
  let diaValue = dia.value;

  if (diaValue === "") {
    errorInput(dia, "Campo vazio");
  } else if (diaValue < 1 || diaValue > 31) {
    errorInput(dia, "Número inválido");
    idadeDia.innerText = "--"
  } else {
    errorInput(dia, "");
    const inputSelecionado = dia.parentElement;
    inputSelecionado.className = "form-date";
    idadeEmAnosMesDias();
  }
}


function inputMes() {
  let mesValue = mes.value;

  if (mesValue === "") {
    errorInput(mes, "Campo Vazio");
  } else if (mesValue < 1 || mesValue > 12) {
    errorInput(mes, "Mês invalido");
    idadeMes.innerText = "--"
  } else {
    errorInput(mes, "");
    const inputSelecionado = mes.parentElement;
    inputSelecionado.className = "form-date";
    idadeEmAnosMesDias();
  }
}


function inputAno() {
  let anoValue = anoNascimento.value;

  if (anoValue === "") {
    errorInput(ano, "Campo vazio");
  } else if (anoValue > anoAtual) {
    errorInput(ano, "Ano no futuro");
    idadeAno.innerText = "--"
  } else {
    errorInput(ano, "");
    const inputSelecionado = ano.parentElement;
    inputSelecionado.className = "form-date";
    idadeEmAnosMesDias();
  }
}


function errorInput(input, message) {
  const inputSelecionado = input.parentElement;

  const textMessage = inputSelecionado.querySelector("a");

  textMessage.innerText = message;

  inputSelecionado.className = "form-date error";
}


function idadeEmAnosMesDias() {
  let anoValue = anoNascimento.value;
  let mesValue = mes.value;
  let diaValue = dia.value;


  const dataNascimento = new Date(`${anoValue}-${mesValue}-${diaValue}`);


  const diff = new Date() - dataNascimento;


  const idadeAnos = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
  const idadeMeses = Math.floor(
    (diff % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000)
  );
  const idadeDias = Math.floor(
    (diff % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );


  const idadeAno = document.getElementById("years");
  const idadeMes = document.getElementById("months");
  const idadeDia = document.getElementById("days");

  idadeAno.innerText = idadeAnos;
  idadeMes.innerText = idadeMeses;
  idadeDia.innerText = idadeDias;
}