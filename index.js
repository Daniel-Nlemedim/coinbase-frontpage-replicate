const formId = document.getElementById('formId');

formId.addEventListener('click', formValidation);
function formValidation(){
 var x = document.forms['form']['details'].value
 if(x == null || x == ''){
  alert('please fill out the space');
  return false;
 }
 

}

