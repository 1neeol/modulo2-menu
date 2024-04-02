function calc() {
  var produtos = document.getElementsByClassName("produto");
  var qtdSelecao = document.getElementsByName("quantity");
  var constructResult = document.getElementById("result");
  var userName = document.getElementById("userName").value;

  constructResult.innerHTML +=
    "<p>Caro, <strong>" +
    userName +
    "</strong>.</p><br><p>Seguem os dados do seu pedido.<p>O seu pedido é:</p><ul>";
  var totalPedido = 0.0;
  var posicao = 0;

  for (var i of produtos) {
    if (qtdSelecao[posicao].value > 0) {
      var name = produtos[posicao].getElementsByClassName("name")[0].innerText;

      var priceStr =
        produtos[posicao].getElementsByClassName("price")[0].innerText;

      var price = parseFloat(priceStr.replace("R$", ""));
      var totalProduto = price * qtdSelecao[posicao].value;
      constructResult.innerHTML += `<li>Prato ${name} - Preço Unitário: R$ ${price.toFixed(
        2
      )} - Quantidade: ${
        qtdSelecao[posicao].value
      } - Total: R$ ${totalProduto.toFixed(2)}</li>`;
      totalPedido += totalProduto;
    }
    posicao++;
  }
  constructResult.innerHTML +=
    "<br><br><strong>Preço Final: R$ " + totalPedido.toFixed(2) + "</strong>";
}
