// Auto Init Materialize

document.addEventListener("DOMContentLoaded", function () {
  M.AutoInit();
});

// Conversor

function convertir() {
  var seleccion = document.getElementById("selector").value;

  if (seleccion == "overworld") {
    // Caso Overworld -> Nether
    var valorX = document.getElementById("ejeX").value;
    var valorZ = document.getElementById("ejeZ").value;

    var resultadoX = valorX / 8;
    var resultadoZ = valorZ / 8;

    // Mostrar resultados

    var displayResultados = document.getElementById("resultados");
    displayResultados.innerHTML = `
            <div class="col s4" id="cajaDimension">
                <p class="nether">Nether</p>
            </div>
            <div class="col s4" id="cajaX">
                <p>Eje X: <b>${resultadoX}</b></p>
            </div>
            <div class="col s4" id="cajaZ">
                <p>Eje Z: <b>${resultadoZ}</b></p>
            </div>
        `;
  } else if (seleccion == "nether") {
    // Caso Nether -> Overworld
    var valorX = document.getElementById("ejeX").value;
    var valorZ = document.getElementById("ejeZ").value;

    var resultadoX = valorX * 8;
    var resultadoZ = valorZ * 8;

    // Mostrar resultados

    var displayResultados = document.getElementById("resultados");
    displayResultados.innerHTML = `
            <div class="col s4" id="cajaDimension">
                <p class="overworld">Overworld</p>
            </div>
            <div class="col s4" id="cajaX">
                <p>Eje X: <b>${resultadoX}</b></p>
            </div>
            <div class="col s4" id="cajaZ">
                <p>Eje Z: <b>${resultadoZ}</b></p>
            </div>
        `;
  }
}
