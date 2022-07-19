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
```
.container{
    border: 1px solid brown;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
```

```
.container{
    border: 1px solid brown;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```


```
body {
    width: 100%;
    height: 100vh;
  }

.wrap{
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    border: 1px solid red;
}

.keys {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border: 1px solid blue;
}
```

## 새로운 div element 만들기
<pre>
<code>
const $todoItem = document.createElement('div');
$todoItem.classList.add('todoItem');
$todoItem.dataset.id = id;
$todoItem.innerHTML = ` `;
</code>
</pre>

<pre>
<code>
const renderAll = (data) => {
    $todoList.innerHTML = ''
    data.forEach((item)=>{
        const todoElemnet = createTodoItem(item);
        $todoList.appendChild(todoElemnet)
    })

}
</code>
</pre>



## element 찾기
<pre>
<code>
const $item = e.target.closest('.item')
const $label = $item.querySelector('label')
const $editInput = $item.querySelector('input[type="text"]')
e.target.className == 'todo_edit_confirm_button'
e.target.classList.contains('todo_recommend_button')
</pre>
</code>


### DRUM
## keycode
https://keycode.info/

## 3x3 box
```
<div>
<div>
<div>

<break>

<div>
<div>
<div>

<break>


.break {
    width: 100%;
    height: 0;
  }

```


## keycode값 가져오기
```
const keycode = e.keyCode;
```