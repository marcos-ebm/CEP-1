async function pegarCpf(cpf) {
      let endereco = await fetch(`https://viacep.com.br/ws/${cpf}/json/`);
      let dados = await endereco.json();
      return dados;
}

function main(){
      const entrada = document.getElementById("inputId");
      
      // deletarPai.removeAttribute();
      
      pegarCpf(entrada.value).then(e => {
            limparNodes();
            criarResposta(); 
            ultimoTd('cepId', e.cep);
            ultimoTd('logradouroId', e.logradouro);
            ultimoTd('complementoId', e.complemento);
            ultimoTd('bairroId', e.bairro);
            ultimoTd('localidadeId', e.localidade);
            ultimoTd('dddId', e.ddd);
            document.getElementById("respostaNegativa").innerText = '';
      }).catch(document.getElementById("respostaNegativa").innerText = 'nao encontrado');  

}

function limparNodes() {
      const deletarPai = document.getElementById("respostaId");
      if(deletarPai.hasChildNodes) {
            deletarPai.innerText = '';
      }
}

function criarTr(atributo, valor) {
      const elementoTr = document.createElement("tr");
      if(atributo && valor) {
            elementoTr.setAttribute(atributo, valor);
            return elementoTr;
      }
      return elementoTr;
}

function criarTd(text) {
      const elementoTd = document.createElement("td");
      if(text) {
            elementoTd.innerText = text;
      }
      return elementoTd;
}

function getElement(text) {
      const elemento = document.getElementById(text);
      return elemento;
}

function ultimoTd(id, msg) {
      let elemento = document.getElementById(id);
      let ultimo = elemento.lastChild
      ultimo.innerText = msg;
}

function criarElementos(id, text) {
      const elemento = getElement(id);
      elemento.append(criarTd(text));
      elemento.append(criarTd());
}

function criarResposta() {
      const pai = document.getElementById("respostaId");

      const elementoTable = document.createElement('table');
      elementoTable.setAttribute("id", "tableId");
      elementoTable.setAttribute("style", "width:70%")
      elementoTable.setAttribute("border", "1");
 
      pai.append(elementoTable);
 
      elementoTable.appendChild(criarTr("id", "cepId"));
      elementoTable.appendChild(criarTr("id", "logradouroId"));
      elementoTable.appendChild(criarTr("id", "complementoId"));
      elementoTable.appendChild(criarTr("id", "bairroId"));
      elementoTable.appendChild(criarTr("id", "localidadeId"));
      elementoTable.appendChild(criarTr("id", "dddId"));

      criarElementos("cepId", "Cep");
      criarElementos("logradouroId", "Logradouro");
      criarElementos("complementoId", "Complemento");
      criarElementos("bairroId", "Bairro");
      criarElementos("localidadeId", "localidade");
      criarElementos("dddId", "ddd");
 
}


