/*
  La estructura habitual de un proyecto será la siguiente:
  - ajax.js  == librería funciones gestión comunicación http
  - banco.js == en el que pondremos las funciones de nuestra lógica de negocio.
  y finalmente
  - main.js == script general que ejecutará nuestra aplicación.
  */
// declaración funciones de utilidad
function mostrarGestoresConsola(gestores) {
  console.log('========\nGESTORES\n========\n');
  gestores.forEach(gestor => {
    console.log(`Id: ${gestor.id}`);
    console.log(`Usuario: ${gestor.usuario}`);
    console.log(`Correo: ${gestor.correo}`);
    console.log(`---------`);
  });
}
// obtenerGestorUsuario se usará en mostrarClientesConsola
const obtenerGestorUsuario = (id_gestor) => {
  for (const gestor of gestores) {
    if(gestor.id === id_gestor) {
      return gestor.usuario;
    }
  }
  return 'desconocido';
};

// usa obtenerGestorUsuario
function mostrarClientesConsola(clientes) {
  console.log('========\nCLIENTES\n========\n');
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
}

// COMIENZO EJECUCIÓN SCRIPT

function initCallBack() {
const banco = new Banco();
console.log(banco);

// Invocación a la función ok
// ok(callback);
banco.ok((err, datos)=>{
  if (err) return console.log(err);
  console.log(datos);
});

// Invocación a la función loginGestor
// loginGestor(usuario, password, callback);
const usuario = 'gestor1';
const password = 'gestor1';
banco.loginGestor(usuario, password, (err)=>{
  if(err) {
    // no estoy autenticado
    return console.log(err);
  }
  // estoy autenticado
  console.log('Estoy autenticado');
});

// Invocación a la función obtenerGestores
// obtenerGestores(callback);
banco.obtenerGestores((err, gestores)=>{
  if (err) return console.log(err);
  // tengo el array de gestores
  mostrarGestoresConsola(gestores);
});

// Invocación a la función obtenerGestorPorId
// obtenerGestorPorId(id_gestor, callback);
banco.obtenerGestorPorId('1', (err, gestor)=>{
  if (err) return console.log(err);
  // He obtenido el gestor
  mostrarGestoresConsola([gestor]);
});
}
function initPromesas(){
console.log('\n################\n');

const bancoPromise = new BancoPromise();

const promise = bancoPromise.ok();
// las promesas poseen el método then y catch
//promise.then().catch();
//promise.then(()=>{}).catch(()=>{});
promise.then((response)=>{
  
  console.log('Se ha ejecutado el callback del then');
  console.log(response);
  
}).catch((err)=>{
  
  console.log('Se ha ejecutado el callback del catch');
  console.log(err);
  
});

//bancoPromise.loginGestor().then(()=>{}).catch(()=>{});
const usuario = 'gestor1';
const password = 'gestor1';

bancoPromise.loginGestor(usuario, password)

.then(()=>{
  console.log('Ya estoy autenticado, y retorno la siguiente promesa');
  return bancoPromise.obtenerGestores(); // para poder encadenar promesas sin infierno
  })
.then((gestores)=>{
    mostrarGestoresConsola(gestores);
  })
.catch((err)=>{  // capturo todos los errores
    console.log('Hubo un error');
    console.log(err);
  });
}
const usuario = 'gestor1';
const password = 'gestor1';

// Ahora es una función autoejecutable
(async function (){ // ya no hace falta nombre, porque no se invocará más

  try {
  const bancoPromise = new BancoPromise();

  const response = await bancoPromise.ok();
  console.log(response);
  
  // await para la ejecución a que se resuelva la promesa o se rechace
  await bancoPromise.loginGestor(usuario, password);
  console.log('Ya esto autenticado.');
  
  
  // ya estoy autenticado
  const gestores = await bancoPromise.obtenerGestores();
  mostrarGestoresConsola(gestores);
  }
  // si alguna promesa es rechazada en el try, capturo el error aquí
  catch (err) {
    console.log(err);
  }
})(); // rodeando todo el cuerpo de la función entre paréntesis y colocando los paréntesis a continuación y el ; se comvierte en una función auto ejecutable.
//funcionAsincrona(); sustituye a esta invocación


console.log('Sigo ejecutando código');

