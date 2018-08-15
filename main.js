var btnCadastrar = document.getElementById('cadastrar');

regiao.addEventListener("change", function (e) {
  reg_selecionada = document.getElementById("regiao").options[document.getElementById("regiao").selectedIndex].value;
  switch (reg_selecionada) {
    case 'sul':
      document.getElementById('uf').innerHTML = `
      <option value=""></option>
      <option value="sc">SC</option>
      <option value="rs">RS</option>
      <option value="pr">PR</option>`
      break;
    case 'sudeste':
      document.getElementById('uf').innerHTML = `
      <option value=""></option>
      <option value="sp">SP</option>
      <option value="rj">RJ</option>
      <option value="ms">MG</option>
      <option value="es">ES</option>`
      break;
    default:
      document.getElementById('uf').innerHTML = `<option value=""></option>`;
      document.getElementById('municipio').innerHTML = `<option value=""></option>`;
      break;
  }
});

uf.addEventListener("change", function () {
  uf_selecionada = document.getElementById('uf').options[document.getElementById('uf').selectedIndex].value;

  switch (uf_selecionada) {
    case 'sc':
      document.getElementById('municipio').innerHTML = `
      <option value=""></option>
      <option value="01">01</option>`
      break;
    case 'rs':
      document.getElementById('municipio').innerHTML = `
      <option value=""></option>
      <option value="02">02</option>`
      break;
    case 'pr':
      document.getElementById('municipio').innerHTML = `
      <option value=""></option>
      <option value="03">03</option>`
      break;
    case 'sp':
      document.getElementById('municipio').innerHTML = `
      <option value=""></option>
      <option value="04">04</option>`
      break;
    case 'rj':
      document.getElementById('municipio').innerHTML = `
      <option value=""></option>
      <option value="05">05</option>`
      break;
    case 'mg':
      document.getElementById('municipio').innerHTML = `
      <option value=""></option>
      <option value="06">06</option>`
      break;
    case 'es':
      document.getElementById('municipio').innerHTML = `
      <option value=""></option>
      <option value="07">07</option>`
      break;
  }
});

function checarEntradas() {
  nome = document.getElementById('nome').value;
  rua = document.getElementById('rua').value;
  numero = document.getElementById('numero').value;
  cep = document.getElementById('cep').value;
  regiao = document.getElementById('regiao').options[document.getElementById('regiao').selectedIndex].value;
  uf = document.getElementById('uf').options[document.getElementById('uf').selectedIndex].value;
  municipio = document.getElementById('municipio').options[document.getElementById('municipio').selectedIndex].value;
  nac = document.querySelector('input[name="nac"]:checked').value;
  nasc = document.getElementById('nasc').value;

  if (nome == "" || rua == "" || numero == "" || cep == "" || regiao == "" || uf == "" || municipio == "" || nac == "" || nasc == "") {
    return false;
  } else {
    if (cep.indexOf('-') != -1) {
      return true;
    } else {
      return false;
    }
  }
}

btnCadastrar.addEventListener("click", function (e) {
  e.preventDefault();

  //if (document.getElementById('nasc').value == "" || document.getElementById('cep').value == "") {
  if (!checarEntradas()) {
    alert("Preencha todos os dados! Confirme se o CEP possui hífem.");
  } else {
    dados = {
      nome: document.getElementById('nome').value,
      rua: document.getElementById('rua').value,
      numero: document.getElementById('numero').value,
      cep: document.getElementById('cep').value,
      regiao: document.getElementById('regiao').options[document.getElementById('regiao').selectedIndex].value,
      uf: document.getElementById('uf').options[document.getElementById('uf').selectedIndex].value,
      municipio: document.getElementById('municipio').options[document.getElementById('municipio').selectedIndex].value,
      nac: document.querySelector('input[name="nac"]:checked').value,
      nasc: document.getElementById('nasc').value
    }
    var janelinha = window.open("", "Dados de cadastro", "width=300,height=300");
    janelinha.document.write(`
      <title>Dados do Cadastro</title>
      <p>Nome:
      ` + dados.nome + `
      </p>
      <p>Rua:
      ` + dados.rua + `
      </p>
      <p>Número:
      ` + dados.numero + `
      </p>
      <p>CEP:
      ` + dados.cep + `
      </p>
      <p>Regiao:
      ` + dados.regiao + `
      </p>
      <p>UF:
      ` + dados.uf + `
      </p>
      <p>Municipio:
      ` + dados.municipio + `
      </p>
      <p>Nacionalidade:
      ` + dados.nac + `
      </p>
      <p>Nascimento:
      ` + dados.nasc + `
      </p>
      `);
  }


});
