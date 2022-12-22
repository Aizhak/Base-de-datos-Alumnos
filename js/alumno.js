class HashTable {
    constructor() {
      // Inicializar la tabla con un tamaño fijo
      this.table = new Array(127);
      // Inicializar el contador de elementos en 0
      this.size = 0;
    }
    // Escribir una funcion hash que acepta un valor llave y lo transforma en un indice
    _hash(key) {
      let _hash = 0;
  
      for (let i = 0; i < key.length; i++) {
        _hash += key.charCodeAt(i);
      }
  
      return _hash % this.table.length;
    }
    // Crear nuestro metodo set, que va a recibir el par llave valor y utilazara la funcion _hast
    set(key, value1, value2, value3,) {
      const index = this._hash(key);
  
      if (this.table[index]) {
        for (let i = 0; i < this.table[index].length; i++) {
          // Encontro llave-valor en el arreglo
          if (this.table[index][i][0] === key) {
            this.table[index][i][1] = value1;
            this.table[index][i][2] = value2;
            this.table[index][i][3] = value3;
            return;
          }
        }
        this.table[index].push([key, value1, value2, value3 ]);
      } else {
        this.table[index] = [];
        this.table[index].push([key, value1, value2, value3,]);
      }
      this.size++;
    }
    // Crearemos un metodo get, que recibira la llave y devolvera el valor que tenga almacenado
    get(key) {
      const index = this._hash(key);
  
      if (this.table[index]) {
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i][0] === key) {
            return this.table[index][i];
          }
        }
      }
  
      return undefined;
    }
    // Crearemos un metodo que nos permita eliminar elementos de la estructura usando la llave para buscarlos
    remove(key) {
      const index = this._hash(key);
  
      if (this.table[index] && this.table[index].length) {
        for (let i = 0; i < this.table.length; i++) {
          if (this.table[index][i][0] === key) {
            this.table[index].splice(i, 1);
            this.size--;
            return true;
          }
        }
      } else {
        return false;
      }
    } 
  }

/* variables e instancias hash */

const alumnoAlta = new HashTable();


/* function test(){
    alumnoAlta.set("marco", 3, 3, 4);
    
    console.log(alumnoAlta.get("marco"));
} */

//const botonAlta = document.getElementById('botonAlta');
/* Objeto persona*/
 class Persona {
    //propiedades
constructor(){
    this.nombre = "";
    this.edad = "";
    this.materias = "";
    this.calificacion = "";
}

//metodos
 alta(){
    
    this.nombre = `${document.getElementById('a_nombre').value} ${document.getElementById('a_apellidos').value}`; //nombre';
    this.edad = parseFloat(document.getElementById('a_edad').value);
    this.materias =document.getElementById('a_clase').value;
    this.calificacion = 0;

    alumnoAlta.set(this.nombre.toLowerCase(), this.edad, this.materias.toLowerCase(),this.calificacion );
    console.log(alumnoAlta);
    document.getElementById("formularioAlta").reset()
}

calificar(){
    let _Aux =new Array();
    this.nombre = `${document.getElementById('c_nombre').value} ${document.getElementById('c_apellidos').value}`; //nombre';
    this.materias =document.getElementById('c_clase').value;
    this.calificacion = document.getElementById('calificacion').value;
    _Aux = alumnoAlta.get(this.nombre.toLowerCase())

    _Aux.pop();
    _Aux.push(this.calificacion);
    alumnoAlta.get(this.nombre.toLowerCase())
    alumnoAlta.set(_Aux[0],_Aux[1],_Aux[2],_Aux[3])
    console.log(alumnoAlta);
    document.getElementById("formularioCalificacion").reset();

}

buscar(){
    this.nombre = `${document.getElementById('b_nombre').value} ${document.getElementById('b_apellidos').value}`; //nombre';
    this.materias =document.getElementById('b_clase').value;

   var _Aux = new Array ();
   _Aux = alumnoAlta.get(this.nombre.toLowerCase());

   if (_Aux[2] == this.materias.toLowerCase()) {
    document.getElementById('promedio').innerHTML =`El alumno ${this.nombre} <br> En el grupo de ${this.materias} tiene un calificacion de <br> ${_Aux[3]}`;
    document.getElementById("formularioBuscar").reset();
   }else{
    alert("Este alumno no esta inscrito en este grupo");
   }
   
}
    lista(){

  this.materias =document.getElementById('clase').value;


         for (let index = 0; index < alumnoAlta.table.length; index++) {
           if(alumnoAlta.table[index] != undefined){
            if(alumnoAlta.table[index][0][2] == this.materias.toLowerCase()  ){ 
                console.log(index);
                var parrafoNuevo = document.createElement('p');
                var textoNuevo = document.createTextNode(`${alumnoAlta.table[index][0][0] } ---- ${alumnoAlta.table[index][0][3] }`)
                parrafoNuevo.appendChild(textoNuevo);
                parrafoNuevo.setAttribute ('class', 'texto');

                console.log(parrafoNuevo);
               const cont = document.getElementsByClassName('lista')[0];
               
               cont.appendChild(parrafoNuevo);               
           }
               
         }
            ///
        }
        document.getElementById("formularioGrupo").reset();
    }
}
var persona = new Persona(); 

/* botones */

//botonAlta.addEventListener('click', persona.alta());
