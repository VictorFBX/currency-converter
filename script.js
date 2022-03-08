function converterdol() {
  var dólar = 5.09
  var realSolicitado = parseFloat(document.getElementById("valor").value)
  
  var conversão = realSolicitado / dólar;
  var conversãoFixada = conversão.toFixed(2);
  
  document.getElementById("resultado").innerHTML =
    "Seu valor em dólar é: $" + conversãoFixada;
}

function converterDC() {
  var dólarCanadense = 3.93
  var realSolicitado = parseFloat(document.getElementById("valor").value)
  
  var conversão = realSolicitado / dólarCanadense;
  var conversãoFixada = conversão.toFixed(2);
  
  document.getElementById("resultado").innerHTML =
    "Seu valor em dólar canadense é: $" + conversãoFixada;
}