;(function(){
    'use strict';


    const get = (target) => {
        return document.querySelector(target);
    }

    const $todoList = get('.content');
    const $todoinput = get('.todoinput');
    const $submit_btn = get('.submit_btn');

    const createTodoItem = (data) => {
        const  {id, content, isRecommend} = data;
        const $todoItem = document.createElement('div');
        $todoItem.classList.add('todoItem');
        $todoItem.dataset.id = id;
        $todoItem.innerHTML = `
            <div class="item">
                <input type="checkbox" class="todo_check"/>
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
        let url = `http://localhost:3000/todos`;

        let response = await fetch(url);
        let data =  await response.json();
        console.log(data);
        renderAll(data);
    };

    const inputTodo = (e) => {
        e.preventDefault();

        const value = $todoinput.value;
        console.log(value)


    }

    const init = () => {
        window.addEventListener('DOMContentLoaded', ()=>{
            getTodos();
        })

        $submit_btn.addEventListener('submit', inputTodo);
    }

    init();
})()