let inputAdaugare = document.querySelector('#numeTask');
let butonAdaugare = document.querySelector('#butonAdauga');
let listaTaskuri = document.querySelector('#listaTaskuri');


function adaugaTask() {
    if (inputAdaugare.value != '') {
        // selectam continutul textual al inputului
        let continutTextual = inputAdaugare.value;


        // pregatim un list item in care vom 'impacheta' continutul textual
        let elementLista = document.createElement('li');

        // pentru list item-ul curent, vom crea un event listener de click

        elementLista.addEventListener('click', function() {
            elementLista.classList.toggle('completed');
        });

        // luam continutul textual si il inseram in interiorul la list item
        elementLista.innerHTML = continutTextual;

        // luam list item-ul si il inseram in cadrul listei
        listaTaskuri.appendChild(elementLista);

        // resetam valoarea de input ca persoana sa poata scrie un nou task
        inputAdaugare.value = '';

    }
}

butonAdaugare.addEventListener('click', adaugaTask);

inputAdaugare.addEventListener('keypress', function(tasta) {
    if (tasta.key === 'Enter') {
        adaugaTask();
    }
});
