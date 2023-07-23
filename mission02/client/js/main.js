
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

import { data } from "./data.js";
import { addClass, attr, css, getNode, removeClass } from "./lib/index.js";


const navigation = getNode('.nav ul')


function setBgColor(target, colorA, colorB="#000") {
  css(target, 'background', `linear-gradient(to bottom, ${colorA}, ${colorB})`)
}


function setImage(src, alt) {
  const visualImage = getNode('.visual img')
  attr(visualImage, 'src', src)
  attr(visualImage, 'alt', alt)
}


function setNameText(value) {
  const nickName = getNode('.nickName')
  nickName.textContent = value;
}


function handleSlider(e) {
  const body = getNode('body')
  const target = e.target.closest('li');

  if (!target) return;

  const index = attr(target, 'data-index') - 1;

  const list = [...navigation.children];
  list.forEach((list)=>{
    removeClass(list, 'is-active');
  });

  addClass(target, 'is-active');


  setBgColor(body, `${data[index].color[0]}`, `${data[index].color[1]}`)
  setImage(`./assets/${data[index].name.toLowerCase()}.jpeg`, `${data[index].alt}`)
  setNameText(data[index].name);
}


navigation.addEventListener('click', handleSlider);