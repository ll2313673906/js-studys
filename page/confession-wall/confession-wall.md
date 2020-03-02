#### 1.    思路：

利用三D背景和css的旋转平移等属性展示一个立体的类似表白墙的页面

#### 2.     遇到的问题： 

原本思路，点击左边人物语句，显示的人物信息卡片，正面展示在屏幕中，但是实际是侧着显示。右边的图片也是。原本思路点击名字的时候，可以冒出一堆随机变色的小星星，实际完成的只有一颗固定颜色的小星星

#### 3.     核心代码：

```js
 function wallFunction(item, index) {
    let person = persons[index]
    let people = `<div>
   
    <div id ="people-info">
    
    <span id="people-span">${person.name}:</span><span>${person.confession}</span>
    <div class = "people-info-content id="people-el" >
  <div class= "info-top"  style="background: url(${person.avatar}) fixed center;">
 <img src="../image/love1.png"></img>
</div>
<h3>${person.name}</h3>

  <p>性别：  ${person.gender} </p>
  <p>生日：  ${person.birthday}</p>
  <p>星座：  ${person.constellation}</p>
  <p>爱好：  ${person.hobby}</p>
  <p>qq：  ${person.qqNumber}</p>
  <p>省市：  ${person.address}</p>
  <p>座右铭：  ${person.motto}</p>
  

   
    </div>
    </div>
    </div>`

    let card = `<div>
   
   <div class ="picture">
    <img  src="${person.avatar}"/></div>
    </div>`

    let info = document.createElement('div')

    info.style.marginTop = '30px'
    info.style.color =
      '#' +
      Math.random()
        .toString(16)
        .slice(2, 8)
    let content = document.createElement('div')
    info.innerHTML = people
    content.innerHTML = card

    rightWall.appendChild(content)
    leftWall.appendChild(info)

    wall.appendChild(rightWall)
    wall.appendChild(leftWall)
  }
  persons.forEach(wallFunction)
}
```

```scss
.people-info-content {
    @include padding();
    margin-left: 30%;
    background: linear-gradient(to right, #e9b3d9, #ebc9ee, #f0c3f0, #ecaaec, #fdbbfa);
    position: absolute;
    color: black;
    border-radius: 10px;
    line-height: 20px;
    text-align: left;
    width: 400px;
    height: 400px;
    display: none;

    .info-top {
      width: 100%;
      height: 80px;
      background: green;
      margin-left: -6px;
      text-align: center;
      img {
        width: 80px;
        height: 80px;
        margin-top: 50px;
        box-shadow: none;
      }
    }

    h3 {
      margin-top: 6px;
    }
  }
  .picture {
    img {
      @include img();
      width: 50px;
      height: 300px;

      width: 130px;
      margin: 10px 24px;
      height: 200px;
      box-shadow: 2px 1px 3px #f8a4df;
    }
    img:hover {
      animation: moveImg 5s forwards;
    }

    @keyframes moveImg {
      5% {
        animation: 5s;
        transform: scale(0.1);
        transform: rotate(360deg);
        filter: blur(6px);
      }

      to {
        transform: rotate(360deg);
        z-index: 333;
        transform: scale(2.4);
        filter: none;
      }
    }
  }
```

```scss
  }
}
// 点击冒出小星星
.love {
  width: 70px;
  height: 80px;

  display: none;
  position: absolute;
  margin: -100px 80%;

  img {
    width: 10px;
    height: 10px;
    position: absolute;
    margin: 10px 30px;
  }
  img:nth-child(1) {
    margin: 170px -30px;
    animation: love1 linear 1s infinite;
  }

  img:nth-child(2) {
    margin: 170px -30px;

    animation: love1 linear 1s infinite;
  }

  @keyframes love1 {
    1% {
      margin-top: 70px;
    }
    50% {
      margin-left: -10px;
    }
    to {
      margin: 10px 10px;
      transform: scale(2.4);
    }
  }
  @keyframes love2 {
    1% {
      margin-top: 70px;
    }

    to {
      margin-top: 10px;

      transform: scale(2.4);
    }
  }
}
#people-span {
  position: relative;
}
#people-span:active .love {
  display: block;

  z-index: 555;
}
```

![image-20200302153518449](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20200302153518449.png)