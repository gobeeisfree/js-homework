
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const button = document.querySelector('.btn-login');

const idInput = document.querySelector('#userEmail');
const pwInput = document.querySelector('#userPassword');

const idError = document.querySelector('#userEmailError');
const pwError = document.querySelector('#userPasswordError');

let idValue = idInput.value;
let pwValue = pwInput.value;

function handleClick (e) {
  e.preventDefault();
  idValue = idInput.value;
  pwValue = pwInput.value;
  
  !emailReg(idValue) ? idError.classList.add('is--invalid') : idError.classList.remove('is--invalid');
  !pwReg(pwValue) ? pwError.classList.add('is--invalid') : pwError.classList.remove('is--invalid');
  
  if (idValue === user.id && pwValue === user.pw) {
    loginSuccess()
  } else {
    loginFail()
  }
}

// 로그인 성공
function loginSuccess() {
  window.location.href = 'welcome.html'
}

// 로그인 실패
function loginFail() {
  idValue = idInput.value;
  pwValue = pwInput.value;

  if (idValue === '' && pwValue === '') {
    alert('아이디와 비밀번호를 입력하세요.');
  } else if (idValue === '') {
    alert('아이디를 입력하세요.')
  } else if (pwValue === '') {
    alert('비밀번호를 입력하세요.')
  } else {
    alert('아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.');
  }

  idValue === '' || !emailReg(idValue) ? idInput.focus() : pwInput.focus()

}

button.addEventListener('click', handleClick)



