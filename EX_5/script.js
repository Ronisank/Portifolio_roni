const listaTarefas = document.getElementById('listaTarefas');
const novaTarefaInput = document.getElementById('novaTarefa');
const adicionarTarefaBtn = document.getElementById('adicionarTarefa');

function adicionarTarefa() {
    const textoTarefa = novaTarefaInput.value;

    if (textoTarefa) {
        const novaTarefa = document.createElement('li');
        
        novaTarefa.innerHTML = `
            <input type="checkbox" id="checkbox${Date.now()}" class="checkbox">
            <label for="checkbox${Date.now()}">${textoTarefa}</label>
        `;

        novaTarefa.addEventListener('click', () => {
            novaTarefa.classList.toggle('feito');
        });

        listaTarefas.appendChild(novaTarefa);

        novaTarefaInput.value = '';
    }
}

adicionarTarefaBtn.addEventListener('click', adicionarTarefa);
