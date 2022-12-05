## 关于Youtube上增加翻译按钮的实验

### 1.翻译

```javascript
let toolbar = [...document.querySelectorAll('#toolbar')]
let a = document.createElement('div')
a.textContent = '翻译' 
toolbar[1].appendChild(a) 
//测试成功
a.addEventListener('click', () => alert('click')) 
```

- 需要解决的问题
  1. 监听新的评论内容被加载

### 2.原文

