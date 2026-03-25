function validar() {

  // Paso 1: guardamos lo que escribió el usuario en dos cajas (variables)
  // "nombre" guarda el texto del input con id="nombre"
  let nombre = document.getElementById("nombre").value;

  // "edad" guarda el número del input con id="edad"
  // Number() convierte el texto a número para poder comparar con >= 18
  let edad = Number(document.getElementById("edad").value);


  // Paso 2: filtro de seguridad con condicionales if / else
  // Cada if pregunta algo. Si es verdad, ejecuta lo que está dentro de { }

  // Regla 4: si el nombre está vacío, mostramos error
  if (nombre === "") {
    document.getElementById("resultado").textContent = "❌ Error: escribe tu nombre";

  // Regla 1: si se llama Admin, entra directo sin revisar la edad
  } else if (nombre === "Admin") {
    document.getElementById("resultado").textContent = "✅ Bienvenido jefe Admin!";

  // Regla 2: si tiene 18 años o más, puede entrar
  } else if (edad >= 18) {
    document.getElementById("resultado").textContent = "✅ Puedes entrar, " + nombre;

  // Regla 3: si tiene menos de 18, calculamos cuánto le falta
  } else {

    // Paso 3: restamos para saber cuántos años le faltan
    let faltante = 18 - edad;

    // Paso 4: mostramos el resultado mezclando texto + variable
    // el texto va entre comillas " ", la variable faltante va sin comillas
    document.getElementById("resultado").textContent = "⛔ Te faltan " + faltante + " años para entrar";
  }

}