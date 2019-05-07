
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Frase ({frase}) {
  return (
    <div className="frase">
      <h1>{frase.quote}</h1>
      <p>{frase.author}</p>
    </div>
  )
}
function App() {

  const [frase, obtenerFrase] = useState({});//vamos a obtenr una frase de la api y lo colocamoss en el state con useState.

  console.log(frase);

  const consultarAPI =  async () => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

    //console.log(resultado.data[0]);
    //agregar resultado de la api al state (smilar a this.setState)

    obtenerFrase(resultado.data[0]);

  }

  //consultas a una rest api, siempre se utiliza useEffect.

  useEffect (
   () => {
     consultarAPI()
   } , [] //aca tenemos un callback tenemos que definir que parte tiene cambiar para que no se vuelva a ejecutar el codigo en loop por esto agregamos una array vacio.
  )

  
  return (
    <div className="contenedor">
      <Frase
        frase={frase}/>
        <button  //en el caso de formulario onSubmit
          onClick={consultarAPI}> Generar nueva
        </button>
    </div>

  )
}

export default App;