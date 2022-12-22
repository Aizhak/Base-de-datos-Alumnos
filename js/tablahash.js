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
    set(key, value) {
      const index = this._hash(key);
  
      if (this.table[index]) {
        for (let i = 0; i < this.table[index].length; i++) {
          // Encontro llave-valor en el arreglo
          if (this.table[index][i][0] === key) {
            this.table[index][i][1] = value;
            return;
          }
        }
        this.table[index].push([key, value]);
      } else {
        this.table[index] = [];
        this.table[index].push([key, value]);
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

  const ht = new HashTable();