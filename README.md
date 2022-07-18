# JSComponents
[참고 페이지] (https://store.kakaofriends.com/products/7223)

## fontawesome
# head에 추가
(https://fontawesome.com)


   <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
    />


### TODO LIST
## 중앙에 위치
.container{
    border: 1px solid brown;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container{
    border: 1px solid brown;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

## 새로운 div element 만들기
const $todoItem = document.createElement('div');
$todoItem.classList.add('todoItem');
$todoItem.dataset.id = id;
$todoItem.innerHTML = ` `;
///
const renderAll = (data) => {
    $todoList.innerHTML = ''
    data.forEach((item)=>{
        const todoElemnet = createTodoItem(item);
        $todoList.appendChild(todoElemnet)
    })

}