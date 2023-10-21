// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

 
  
function validatePassword (){
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const passCheck = document.getElementById("passCheck");
    
    if (password1 !== password2) {
        passCheck.style.display = 'block';
    }else {
        passCheck.style.display = 'none';
    }
};


  /*
Los datos ingresados en "Contraseña" y "Repetir contraseña" deben ser iguales
Se debe haber marcado el checkbox "Acepto los términos y condiciones del servicio" 
(en este caso dentro de un modal).*/

function validarCheckBox(){
var checkBox = document.getElementById("terminos") 
var validFeedback = document.getElementById("valid-feedBack")
if (checkbox.checked){
    checkbox.classList.add("is-valid");
    validFeedback.style.display ="block";
    }else {
        checkbox.classList.remove("is-valid");
        validFeedback.style.display ="none";
    }
}








