//Definicion de la clase
//La palabra reservada Class crea el molde. Aqui solo definimos que atributos
// y que metodos va a tener la clase

class Persona {

    //El constructor es un metodo especial que se ejecuta
    //automaticamente cada vez que creamos un objeto con la palabra "new"
    //Sirve tambien para inicializar las propiedades (los datos) del objeto

    constructor(nombre, edad, profesion){
        //Usaremos this para referirnos a este objeto que se esta creando en el momento
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    //2) Metodos
    //Un metodo es una funcion que pertenece a la clase, es decir
    //una accion que el objeto puede hacer, los metodos al final siempre llevan ()

   saludar() {
     return ` Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
   }
    
   describirProfesion(){
    return ` ${this.nombre} trabajo como ${this.profesion}.`;
   }

   esMayorDeEdad(){
    return this.edad >= 18;
   }
}

   //3) Arreglo para guardar los objetos creados
   //Cada vez que el fomulario se envie, crearemos un objeto persona y lo guardamos aqui
   const personas = []

   //4)Conexion el DOM
   const formulario = document.getElementById('formPersona');
   const listaPersonas = document.getElementById('listaPersonas');

   formulario.addEventListener('submit', function(evento){
    evento.preventDefault(); //Evita que la pagina se recargue

    //Leemos los valores escritos por el usuario
    const nombre = document.getElementById('nombre').value;
    const edad = Number(document.getElementById('edad').value);
    const profesion = document.getElementById('profesion').value;

    //5) Creacion de un objeto (INSTANCIA)
    // new Persona  ejecuta el constructory nos entrega
    //un objeto nuevo, independiente de todo
    const nuevaPersona = new Persona(nombre, edad, profesion);

    //Guardamos el objeto en el arreglo
    personas.push(nuevaPersona);

    //Volvemos a pintar la lista de completa en pantalla
    renderizarPersonas();

    formulario.reset();

   })

   //6) Funcion para mostrar los objetos en el dom
   //Aca vamos a usar los metodos de la clase persona(saludar, descripcionProfesion)
   //Utilizaremos estos metodos para generar la salida y aprovechar las ventajas del
   //encapsulamiento

   function renderizarPersonas(){
    listaPersonas.innerHTML = '';

    personas.forEach(function(persona, indice) {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-persona';

        tarjeta.innerHTML = `
            <strong>Objeto # ${indice + 1}</strong><br>
            ${persona.saludar()}<br>
            ${persona.describirProfesion()}<br>
            Es mayor de edad ? ${persona.esMayorDeEdad() ? 'SI' : "NO"} 
        `;
        listaPersonas.appendChild(tarjeta);
    });
   }























   /* ============================================================
   RETO PARA EL APRENDIZ
   ------------------------------------------------------------
   1. Agrega una nueva propiedad "ciudad" a la clase Persona
      (recuerda modificar el constructor y el formulario en el HTML).
   2. Crea un nuevo método llamado "presentacionCompleta()" que
      combine el saludo, la profesión y la ciudad en un solo texto.
   3. Usa ese nuevo método dentro de renderizarPersonas().
   ============================================================ */




  