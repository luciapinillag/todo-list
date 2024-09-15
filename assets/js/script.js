document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('ingresar');
    const btnAgregar = document.getElementById('btnAgregar');
    const totalSpan = document.querySelector('.cantidad');
    const realizadasSpan = document.querySelector('.realizadas');
    const ul = document.getElementById('tareas');

    let tareas = [
        { id: 1, texto: 'Tarea 1', completada: false },
        { id: 2, texto: 'Tarea 2', completada: false },
        { id: 3, texto: 'Tarea 3', completada: false }
    ];

    function actualizarLista() {
        ul.innerHTML = '';
        tareas.forEach(tarea => {
            const li = document.createElement('li');
            li.textContent = tarea.texto;

            if (tarea.completada) {
                li.classList.add('completed');
            }

            
            const changeButton = document.createElement('button');
            changeButton.textContent = tarea.completada ? 'Desmarcar' : 'Completar';
            changeButton.addEventListener('click', () => {
                tarea.completada = !tarea.completada;
                actualizarLista(); 
            });

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Eliminar';
            removeButton.addEventListener('click', () => {
                tareas = tareas.filter(t => t !== tarea);
                actualizarLista(); 
            });

            
            li.appendChild(changeButton);
            li.appendChild(removeButton);

            ul.appendChild(li);
        });

        
        totalSpan.textContent = tareas.length;
        realizadasSpan.textContent = tareas.filter(t => t.completada).length;
    }

   
    actualizarLista();

    
    btnAgregar.addEventListener('click', () => {
        const nuevaTarea = input.value;

        if (nuevaTarea === '') {
            alert('Por favor, ingresa una tarea.');
            return;
        }

        const tarea = {
            id: tareas.length + 1,
            texto: nuevaTarea,
            completada: false
        };

        tareas.push(tarea); 
        input.value = ''; 
        actualizarLista(); 
    });
});