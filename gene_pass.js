function generarContrasena(longitud) {
    var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var password = "";
    for (var i = 0; i < longitud; i++) {
      var indice = Math.floor(Math.random() * caracteres.length);
      password += caracteres.charAt(indice);
    }
    return password;
  }
  
  // genero un a contraseña de 10 caracteres
  var password = generarContrasena(10);
  console.log(password);
  