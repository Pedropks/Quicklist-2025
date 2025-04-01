const form = document.querySelector("#item-form");
const input = document.querySelector("#item-input");
const addButton = document.querySelector("#add-button");
const lista = document.querySelector(".list");
const cloneLista = document.querySelector("#clone");
const removeAlerta = document.querySelector("#remove-alert");
const closeButton = document.querySelector("#Remove-button");
const deleteBtn = document.createElement("button");

function adicionarItem(event) {
  event.preventDefault();
  const nomeItem = input.value.trim();

  if (nomeItem === "") {
    alert("Por Favor, digite um item!");
    // return;
  }

  const novoItem = document.createElement("li");
  novoItem.classList.add("button-list");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item-container");

  const label = document.createElement("label");
  label.setAttribute("for", checkbox.id);
  label.textContent = nomeItem;

  const botaoExcluir = document.createElement("button");
  botaoExcluir.classList.add("delete-button");
  botaoExcluir.innerHTML = `<img src="img/button.svg" alt="Ícone de lixeira">`;

  itemContainer.appendChild(label);
  itemContainer.appendChild(botaoExcluir);
  novoItem.appendChild(checkbox);
  novoItem.appendChild(itemContainer);
  lista.appendChild(novoItem);
  input.value = "";

  botaoExcluir.addEventListener("click", function () {
    novoItem.remove();
    mostrarAlerta();
  });

  function mostrarAlerta() {
    removeAlerta.style.display = "flex";

    setTimeout(() => {
      removeAlerta.style.display = "none";
    }, 3000); // Esconde o alerta após 3 segundos
  }

  closeButton.addEventListener("click", function () {
    removeAlerta.style.display = "none";
  });
}

form.addEventListener("submit", adicionarItem);
