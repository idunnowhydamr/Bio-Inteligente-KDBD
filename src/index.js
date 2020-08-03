import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


ReactDOM.render(
  <>
  <div className="contenedor">
    <table>
      <tr class="columna">
       <td># Identificacion</td>
       <td>Nombre</td>
       <td>Apellido</td>
       <td>Correo Electronico</td>
       <td>Celular</td>
       <td>Genero</td>
       <td>Edad</td>
      </tr>
      <tr class="columna">
       <td>1023622903</td>
       <td>Diego Alejandro</td>
       <td>Muñoz Robayo</td>
       <td>diegoale1399@gmail.com</td>
       <td>350 468 99 79</td>
       <td>Masculino</td>
       <td>16</td>
      </tr>
      <tr class="columna">
       <td>1000763167</td>
       <td>Juan Diego</td>
       <td>Rojas Murillo</td>
       <td>juandirojas40@gmail.com</td>
       <td>322 651 22 24</td>
       <td>Masculino</td>
       <td>18</td>
      </tr>
      <tr class="columna">
       <td>1001546025</td>
       <td>Karen Dahiana</td>
       <td>Ruiz Rojas</td>
       <td>kruiz5022@gmail.com</td>
       <td>312 632 44 22</td>
       <td>Femenino</td>
       <td>16</td>
      </tr>
      <tr class="columna">
       <td>1001227264</td>
       <td>Brahyan Camilo</td>
       <td>Naranjo Foronda</td>
       <td>naranjocamilo78@gmail.com</td>
       <td>321 783 28 48</td>
       <td>Masculino</td>
       <td>16</td>
      </tr>
    </table>
  </div>
<p> <h1>Babel</h1>
Babel es un transpilador. Puede traducir todo tipo de ECMAScript de alta versión (no solo ECMAScript, sino que es fácil de entender) a ES5, que es más ampliamente compatible con los navegadores (especialmente las versiones anteriores). Su trabajo principal es convertir las funciones de lenguaje no compatibles o de vanguardia en ES5.
</p>
<p>
<h1>Paquete web o Webpack</h1>
Webpack es, entre otras cosas, un analizador de dependencias y un paquete de módulos. Por ejemplo, si el módulo A requiere B como dependencia, y el módulo B requiere C como dependencia, entonces webpack generará un mapa de dependencia como C -> B -> A. En la práctica es mucho más complicado que esto, pero en general El concepto es que Webpack empaqueta módulos con complejas relaciones de dependencia en paquetes. Con respecto a la relación de webpack con babel: cuando webpack procesa dependencias, debe convertir todo en javascript porque webpack funciona sobre javascript. Como resultado, utiliza diferentes cargadores para traducir diferentes tipos de recursos/código a javascript. Cuando necesitamos las funciones de ES6 o ES7, usamos babel-loader para lograr esto.</p>
  </>,
  document.getElementById('root')
);


