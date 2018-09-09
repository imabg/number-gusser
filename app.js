const btn = document.getElementById('guest-value');
const input = document.getElementById('guest-input');
const resetBtn = document.getElementById('reset-value');
let msg = document.getElementById('message');

btn.addEventListener('click',function(e){
  const minNum = 1,
        maxNum = 10;

  if(input.value >= minNum && input.value <= maxNum){
    let randomInput = Math.floor(Math.random() * Math.floor(maxNum));
    if(input.value == randomInput){
      btn.disabled = false;
      successMsg();
      btn.disabled = true;
    } else {
      console.log('no');
      errorMsg();
      btn.disabled = true;
    }
  } else {
    error('Please Check The Number');
  }
});

resetBtn.addEventListener('click',function(){
    input.value = '';
    msg.textContent = '';
    btn.disabled = false;

});

function successMsg () {
  msg.textContent = input.value + ' is correct';
  msg.style.color = 'green';
}

function errorMsg () {
  let msg = document.getElementById('message');
  msg.textContent = input.value + ' is NOT correct'
  msg.style.color = 'red';
}


function error (msg) {
  let errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(msg));
  let container  = document.querySelector('#game');
  let heading  = document.querySelector('#sub-head');
  container.insertBefore(errorDiv, heading);
  setTimeout(clearmsg, 2000);
};

function clearmsg () {
  document.querySelector('.alert').remove();
  input.value = '';
}
