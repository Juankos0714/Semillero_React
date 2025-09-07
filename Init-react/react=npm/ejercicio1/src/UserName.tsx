/* Angular JS => 
html 
Css
Controller
React Componente => 
html
Css
Typescript/javascript

COntroller => Typescript => modelo => vista => modelo

Angular Js=> se queda atras

verbose:Usando o expresado con más palabras de las necesarias
hay mucha cantidad de codigo
gran curva de apendizaje

React => se hace popular
rapido
facil de aprender
simple
libreria no framework
comodo
lib => solamente tiene codigo de terceros que aumenta la funcionalidad
app => react => conjunto de librerias
Es conveniente cuando:
-App a medida
-Simplicidad
-Minimiza el peso de la app
-Prototypes
-SPA - CSR => Todo en el cliente - Aplicaciones privadas

Hay frameworks de react
-SolidJs = Es como deberia de ser React desde un principio
    -Reactividad real (Signals)
    -Menor peso
-NextJs = Framework mas popular de React- Privadas y publicas
    -Necesito SEO?
    -Necesito todo lo que se brinda
    -Tiene su forma de pensar diferente = CSR - SSR/SSG
-Remix = SSR  
   -SEO
   -Performance 
   -Data fetching
   -Routing
   -Comodidad 
-React 19 
useCallback
useMemo
<StrictMode> => Detecta problemas en la app apix2(se quita en produccion)
Concurrent Mode => Mejoras de rendimiento
Server Components => Renderizado en el servidor
Automatic Batching => Agrupacion automatica de actualizaciones de estado
Transition API => Mejoras en la experiencia del usuario durante las transiciones
Trigger => Nueva forma de manejar efectos secundarios 
     inicial => useEffect

dom => Document Object Model
virtual dom => React crea una copia del dom en memoria pero con los cambios =>renderiza solo los cambios(ejecutar un funcion/componente)
commit => cuando react actualiza el dom con los cambios, es aplicar el cambio al dom virtual 
**/


function UserName(props: { nombre: number }) {
  return <h1>¡Hola {props.nombre}!</h1>;
}




export default UserName;
