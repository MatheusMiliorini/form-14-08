var regiao = document.getElementById("regiao");
var uf = document.getElementById('uf');
var municipio = document.getElementById('municipio');
var btnCadastrar = document.getElementById('cadastrar');

regiao.addEventListener("change",function(e) {
  reg_selecionada = regiao.options[regiao.selectedIndex].value;
  switch (reg_selecionada) {
    case 'sul':
      uf.innerHTML = `<option value="sc">SC</option>
      <option value="rs">RS</option>
      <option value="pr">PR</option>`
    break;
    case 'sudeste':
      uf.innerHTML = `<option value="sp">SP</option>
      <option value="rj">RJ</option>
      <option value="ms">MG</option>
      <option value="es">ES</option>`
    break;
    default:
      uf.innerHTML = "";
    break;
  }
});

uf.addEventListener("change",function() {
  uf_selecionada = uf.options[uf.selectedIndex].value;

  switch (uf_selecionada) {
    case 'sc':
      municipio.innerHTML = `<option value="01">01</option>`
    break;
    case 'rs':
      municipio.innerHTML = `<option value="02">02</option>`
    break;
    case 'pr':
      municipio.innerHTML = `<option value="03">03</option>`
    break;
    case 'sp':
      municipio.innerHTML = `<option value="04">04</option>`
    break;
    case 'rj':
      municipio.innerHTML = `<option value="05">05</option>`
    break;
    case 'mg':
      municipio.innerHTML = `<option value="06">06</option>`
    break;
    case 'es':
      municipio.innerHTML = `<option value="07">07</option>`
    break;
  }
});

btnCadastrar.addEventListener("click",function(e) {
  e.preventDefault();

  if (document.getElementById('nasc').value == "" || document.getElementById('cep').value == "") {
    alert("Confirme Nascimento e CEP!");
  } else {
    dados = {
      nome: document.getElementById('nome').value,
      rua: document.getElementById('rua').value,
      numero: document.getElementById('numero').value,
      cep: document.getElementById('cep').value,
      regiao: regiao.options[regiao.selectedIndex].value,
      uf: uf.options[uf.selectedIndex].value,
      municipio: municipio.options[municipio.selectedIndex].value,
      nac: document.querySelector('input[name="nac"]:checked').value,
      nasc: document.getElementById('nasc').value
    }
    var janelinha = window.open("","Dados de cadastro","width=300,height=300");
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
