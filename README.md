# JSComponents
[참고 페이지] (https://store.kakaofriends.com/products/7223)

## fontawesome
### head에 추가
(https://fontawesome.com)

```
   <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
    />
```

## TODO LIST
### 중앙에 위치
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

### 새로운 div element 만들기
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



### element 찾기
<pre>
<code>
const $item = e.target.closest('.item')
const $label = $item.querySelector('label')
const $editInput = $item.querySelector('input[type="text"]')
e.target.className == 'todo_edit_confirm_button'
e.target.classList.contains('todo_recommend_button')
</pre>
</code>


## DRUM
### keycode
https://keycode.info/

### 3x3 box
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


### keycode값 가져오기
```
const keycode = e.keyCode;
```

### class 이름 추가
```

const $key = document.querySelector(`div[data-key="${keycode}"]`)

$key.classList.add('playing')
```

### 확대
```
transform: scale(1.1);
```

### TransitionEvent

https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent

- transitionEvent가 끝날 때 발생

```
//transform이라는 css 끝나면 ~ class이름에서 'playing'제거
 const onTransitionEnd = (e) => {
    if (e.propertyName === 'transform') {
      e.target.classList.remove('playing')
    }
  }
```


## Baseball
### input (number)
```
    <input
        type="number"
        id="question"
        name="question"
        min="0"
        max="9999"
        size="4"
        class="ball_input"
    />
```

### calc

### 가상요소
##### – 가상클래스(Pseudo-Class)는,별도의 class를 지정하지 않아도 지정한 것 처럼요소를 선택할 수 있습니다.
##### – 가상요소(Pseudo-Element)는, 가상클래스처럼 선택자(selector)에 추가되며,
##### 존재하지 않는 요소를 존재하는 것처럼 부여하여 문서의 특정 부분 선택이 가능합니다.

#### ::before/ ::after 쓸 땐 content 속성 꼭 필요!!!

#### ::before
##### 요소의 콘텐츠 시작부분에 생성된 콘텐츠 추가
##### 실제 내애ㅛㅇ 바로 앞에서 생성되는 자식요소

#### ::after
##### 요소의 콘텐츠 끝부분에 생성된 콘텐츠 추가
##### 실제 내용 바로 뒤에서 생성되는 자식요소

