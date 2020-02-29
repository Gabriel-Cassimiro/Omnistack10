import React, { useEffect, useState } from 'react';
import api from './Services/Api';
//useEffect serve ara disparar um função uma unica vez.
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import DevItem from './Components/Devitem'
import DevForm from './Components/DevForm'

// 3 conceitos do react
//Componentes: bloco isolado de HTML, CSS  e JS. Não interfere no restante da aplicação
//Propiedades: Informações que um componente PAI passa para o componente filho
//Estados: Informações mantidas pela componente (Lembrar: imutabilidade)

//fragment é usar <> </> em fez de div

function App() { // Componente. 1 componente por arquivo é a regra normal
  const [devs, setDevs] = useState([]);//Um array vazio porque é o formato que vem os devs



  useEffect(() => { //Carregar os outros devs apenas uma vez
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {

    const response = await api.post('/devs', data)
    // console.log(response.data); //mostra resultado do post


    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
          {devs.map(dev => ( //mesma coisa que um return
            <DevItem  key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
