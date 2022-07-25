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


## Modal-popup

### toggle

https://developer.mozilla.org/ko/docs/Web/API/Element/classList

- 하나의 설정 값으로부터 다른 값으로 전환

### Scroll Lock

```
body.scroll_lock {
  overflow: hidden;
  height: 100%;
}
```

### div box들 ... 중앙위치

```
<div class="box"></div>
...
.box {
  width: 600px;
  height: 400px;
  margin: 16px auto;
  background-color: #123;
}
```

```
<button class="btn">BUTTON</button>
...
.btn {
  width: 180px;
  height: 60px;
  margin: 0 auto;
  display: block;
}
```

### 수평가로줄 <hr/>

### 배경 불투명하게

```
background-color: rgb(0 0 0 / 50%);
```

### scroll lock

```
body.scroll_lock {
  overflow: hidden;
  height: 100%;
}
```
=======


## Youtube
### <input><label> 연결
```
//웹접근성 때문에 사용
<label for="name">
<input type="text" id="name>
```
### label 태그의 역할
label태그가 하는 일은 input 태그를 제어하여 상태값을 변경하도록 돕습니다. 이는 input 태그만으로 선택하기 어렵거나 더 좋은 사용자 경험을 제공하기 위한 용도이며 만약 label이 없이 input 태그만 클릭하여 선택하는 경우를 생각해보세요. input 태그 자체는 영역이 작아 클릭하기 어렵거나 서로 다른 위치의 input 태그를 제어하려면 부득히 복잡한 스크립트를 사용해야할 수도 있죠. label 태그는 이런 점으로부터 자유롭고 매우 편리하게 사용할 수 있는 방법입니다.

### <picture></picture>

### <figcaption></figcaption>


### SEO 검색엔진 처리
```
<main>
    <h2 class="blind">유튜브 콘텐츠</h2>
</main>


.blind{
    text-indent: -99999px;
    overflow: hidden;
}
```

### hover시 밝게
```
.content figure picture:hover{
    filter: brightness(1.2)
}
```
