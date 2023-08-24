//아이디 입력 시 영어만 가능하게 하는 코드
function handleOnInput(e)  {
  e.value = e.value.replace(/[^a-z0-9@.]/ig, '')
}