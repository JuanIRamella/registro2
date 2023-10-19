// Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos
(function () {
    'use strict'
  
    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation')
  
    // Bucle sobre ellos y evitar el envío
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

document.addEventListener("DOMContentLoaded", function confirmarPassword() {
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const errorDiv = document.getElementById("errorDiv");

  confirmPasswordInput.addEventListener("input", function() {
    if (confirmPasswordInput.value !== passwordInput.value) {
      errorDiv.style.display = "block";
      confirmPasswordInput.setCustomValidity("Las contraseñas no coinciden");
    } else {
      errorDiv.style.display = "none";
      confirmPasswordInput.setCustomValidity("");
    }
  });
});

document.getElementById("submitBtn").addEventListener("click", function () {
  if (!document.getElementById("terminosCheckbox").checked) {
    // Mostrar mensaje de error si la casilla no está marcada
    document.getElementById("display_mal").style.display = "block";
    terminostxt.style.color = "green";
  } else {
    // Ocultar el mensaje de error si la casilla está marcada
    document.getElementById("display_mal").style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var span = document.getElementById("terminosdelserviciotxt");
  var checkbox = document.getElementById("terminosCheckbox");
  span.classList.add("colorcito");
  checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
          span.classList.remove("colorcito");
      } else {
          span.classList.add("colorcito");
      }
  });
});