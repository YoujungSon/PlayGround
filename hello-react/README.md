## **리액트 라이프사이클**
모든 리액트 컴포넌트에는 라이프사이클(수명 주시)이 존재한다. 

**컴포넌트의 수명은 페이지에 렌더링되기 전인 준비 과정에서 시작하여 페이지에서 사라질 때 끝이난다.**

### **마운트**

DOM이 생성되고 웹 브라우저상에 나타나는 것을 마운트라고 한다. 이때 호출하는 메서드는 다음과 같다.

컴포넌트 만들기 > constructor > getDerivedStateFromProps > render > componentDidMount

- constructor: 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드
- getDerivedStateFromProps: props에 있는 값을 state에 넣을 때 사용하는 메서드
- render: 준비한 UI를 렌더링하는 메서드
- componentDidMount: 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드

### **업데이트**

컴포넌트는 다음과 같은 총 네 가지 경우에 업데이트 한다.

1. props가 바뀔 때

2. state가 바뀔 때

3. 부모 컴포넌트가 리렌더링될 때

4. this.forceUpdate로 강제로 렌더링을 트리거할 때

이렇게 컴포넌트를 업데이트할 때는 다음 메서드를 호출한다.


컴포넌트는 다양한 이유로 업데이트될 수 있다.

**첫째**, 부모 컴포넌트에서 넘겨주는props가 바뀔 때이다. 컴포넌트에 전달하는 props의 값이 바뀌면 컴포넌트 렌더링이 이루어진다.

**둘째**, 컴포넌트 자신이 들고 있는 state가 setState를 통해 업데이트될 때이다.

**셋째**, 부모 컴포넌트가 리렌더링될 때이다. 자신에게 할당된 props가 바뀌지 않아도, 또는 자신이 들고 있는 state가 바뀌지 않아도, 부모 컴포넌트가 리렌더링되면 자식 컴포넌트 또한 리렌더링된다.

- getDerivedStateFromProps: 이 메서드는 마운트 과정에서도 호출되며, 업데이트가 시작하기 전에도 호출된다. props의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용한다.
- shouldComponentUpdate: 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정하는 메서드이다. 이 메서드에서는 true 혹은 flase 값을 반환해야 하며, true를 반환하면 다음 라이프사이클 메서드를 계속 실행하고, false를 반환하면 작업을 중지한다. 즉, 컴포넌트가 리렌더링되지 않는다. 만약 특정 함수에서 this.forceUpdate() 함수를 호출한다면 이 과정을 생략하고 바로 render 함수를 호출한다.
- render: 컴포넌트를 렌더링한다.
- getSnapshotBeforeUpdate: 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드
- componentDidUpdate: 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드이다.

### **언마운트**

마운트의 반대 과정, 즉 컴포넌트를 DOM에서 제거하는 것을 언마운트라고 한다.

언마운트하기 > componentWillUnmount

- componentWillUnmount: 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드

> 실행방법

```bash
$ npm install
```

```bash
$ npm start
```
