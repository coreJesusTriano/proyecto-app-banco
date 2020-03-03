/*
Ejercicio proyecto: escribe un programa que declare 3 objetos de cada modelo de datos considerado: gestor, cliente, mensaje y transferencia. Los valores de las propiedades de los objetos pueden ser arbitrarios.
*/
// objetos gestores
const gestor1 = {
  id: 1,
  usuario: 'gestor1',
  password: 'gestor1',
  correo: 'gestor1@mail.com'
};
const gestor2 = {
  id: 2,
  usuario: 'gestor2',
  password: 'gestor2',
  correo: 'gestor2@mail.com'
};
const gestor3 = {
  id: 3,
  usuario: 'gestor3',
  password: 'gestor3',
  correo: 'gestor3@mail.com'
};

// objetos clientes
const cliente1 = {
  id: 1,
  id_gestor: 2,
  usuario: 'cliente1',
  password: 'cliente1',
  correo: 'cliente1@gmail.com',
  saldo: 3000
};
const cliente2 = {
  id: 2,
  id_gestor: 1,
  usuario: 'cliente2',
  password: 'cliente2',
  correo: 'cliente2@gmail.com',
  saldo: 5000
};
const cliente3 = {
  id: 3,
  id_gestor: 3,
  usuario: 'client31',
  password: 'cliente3',
  correo: 'cliente3@gmail.com',
  saldo: 1000
};

/*
Tema 8
Ejercicio proyecto: escribe un programa que almacene los objetos creados en el ejercio anterior del proyecto dentro de un array (un array por cada modelo de datos). A continuación, recorre cada uno de los arrays y muestra todas propiedades.
*/

// agrego los gestores al array de gestores
const gestores = [];
gestores.push(gestor1, gestor2, gestor3);
// console.log(gestores);

// agrego los clientes al array de clientes
const clientes = [cliente1, cliente2, cliente3];
// console.log(clientes);

/** 
 * DEFINICIÓN FUNCIÓN
 * Esta función recibe como parámetro el id de un gestor y devuelve el nombre de usuario del gestor
 * */ 
const obtenerGestorUsuario = (id_gestor) => {
  for (const gestor of gestores) {
    if(gestor.id === id_gestor) {
      return gestor.usuario;
    }
  }
  return 'desconocido';
};


console.log('GESTORES');

for (const gestor of gestores) {
  console.log(`Id: ${gestor.id}`);
  console.log(`Usuario: ${gestor.usuario}`);
  console.log(`Password: ${gestor.password}`);
  console.log(`Correo: ${gestor.correo}`);
  console.log(`---------`);
}

console.log('\nCLIENTES');

for (const cliente of clientes) {
  
  const usuarioGestor = obtenerGestorUsuario(cliente.id_gestor);

  console.log(`Id: ${cliente.id}`);
  console.log(`Id gestor: ${cliente.id_gestor}`);
  console.log(`Usuario gestor: ${usuarioGestor}`);
  console.log(`Usuario: ${cliente.usuario}`);
  console.log(`Password: ${cliente.password}`);
  console.log(`Correo: ${cliente.correo}`);
  console.log(`Saldo: ${cliente.saldo}`);
  console.log(`---------`);
}

// agregar los mensajes al array mensajes
const mensajes = [
  {
    id: 1,
    id_origen: 1,
    id_destino: 2,
    texto: 'hola',
    fecha: new Date()
  },
  {
    id: 2,
    id_origen: 2,
    id_destino: 1,
    texto: 'adiós',
    fecha: new Date()
  }
];

/*
 Ejercicio proyecto: escribe un programa que realice la conversión a JSON del array (y viceversa) creado en el ejercicio anterior del proyecto.
 */

 // de array JavaScript a array JSON (string)
 const myArrayJsonGestores = JSON.stringify(gestores, null, 3);
 console.log(myArrayJsonGestores);
 
// de objeto JavaScript a objeto JSON (string)
 const myJsonGestor = JSON.stringify(gestor1);
 console.log(myJsonGestor);
 

// de array JSON (string) a array JavaScript
 const arrayGestores = JSON.parse(myArrayJsonGestores);
 console.log(arrayGestores);
 
// de objeto JSON (string) a objeto JavaScript
 const objGestor = JSON.parse(myJsonGestor);
 console.log(objGestor);
 



