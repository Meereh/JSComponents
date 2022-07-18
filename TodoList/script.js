;(function(){
    'use strict';


    const get = (target) => {
        return document.querySelector(target);
    }

    const $todoList = get('.content');
    const $todoinput = get('.todoinput');
    const $submit_btn = get('.submit_btn');
    const $todo_header = get('.todo_header');
    const url = `http://localhost:3000/todos`;

    const createTodoItem = (data) => {
        const  {id, content, recommended, completed} = data;
        const isChecked = completed ? 'checked' : '';
        const isRecommend = recommended? 'active':'';
        
        const $todoItem = document.createElement('div');
        $todoItem.classList.add('todoItem');
        $todoItem.dataset.id = id;
        $todoItem.innerHTML = `
            <div class="item">
                <input type="checkbox" class="todo_check" ${isChecked}/>
                <label class="title">${content}</label>
                <input type="text" value="${content}" />
            </div>

            <div class="item_buttons content_buttons">
                
                <button class="todo_recommend_button ${isRecommend}">
                    <i class="far fa-star"></i>
                    <i class="fas fa-star"></i>
                </button>

                <button class="todo_edit_button">
                    <i class="far fa-edit"></i>
                </button>

                <button class="todo_remove_button">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>

            <div class="item_buttons edit_buttons">
                <button class="todo_edit_confirm_button">
                    <i class="fas fa-check"></i>
                </button>
                <button class="todo_edit_cancel_button">
                    <i class="fas fa-times"></i>
                </button>
          </div>
        
        `;

        return $todoItem;

        
    }
    const renderAll = (data) => {
        $todoList.innerHTML = ''
        data.forEach((item)=>{
            const todoElemnet = createTodoItem(item);
            $todoList.appendChild(todoElemnet)
        })

    }

    const getTodos = async() => {
        let response = await fetch(url);
        let data =  await response.json();
        console.log(data);
        renderAll(data);
    };

    const inputTodo = async(e) => {
        e.preventDefault();

        const value = $todoinput.value;
        console.log(value);
        if(!value) return;

        const todo = {
            'content':value,
            "completed": false,
        }
        
        let response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(todo),
          });
        let data = await response.json();
        await getTodos(data);

        $todoinput.value = '';
        $todoinput.focus();

        /*
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(todo),
          })
            .then((response) => response.json())
            .then(getTodos)
            .then(() => {
              $todoinput.value = ''
              $todoinput.focus()
            })
            .catch((error) => console.error(error.message))

            */
    }
    const toggleCheck = async(e) => {
        if(e.target.className!=="todo_check")
            return;
        
        const $item  = e.target.closest('.todoItem');
        const id = $item.dataset.id;
        const completed = e.target.checked;

        
        let response = await fetch(`${url}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ completed }),
            })

        let data = await response.json();
        getTodos(data);
        
        /*
        fetch(`${url}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ completed }),
        })
            .then((response) => response.json())
            .then(getTodos)
            .catch((error) => console.error(error.message))

            */
        
    }

    const toggleComplete= (e) => {
        if(e.target.className == 'todo_recommend_button') {
            
        }

    }
    
    const updateTodos = (e) => {
        if(e.target.className === "item_buttons"){
            console.log("btn")
        }
    }

    const init = () => {
        window.addEventListener('DOMContentLoaded', ()=>{
            getTodos();
        })

        $todo_header.addEventListener('submit', inputTodo);
        $todoList.addEventListener('click', toggleCheck);
        $todoList.addEventListener('click', toggleComplete);
        $todoList.addEventListener('click', updateTodos);

    }

    init();
})()