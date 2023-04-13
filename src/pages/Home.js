import React, { useContext } from 'react';
import Header from '../components/Header';
import Style from './home.module.css';
import appContext from '../context/appContext';
import Card from '../components/Card';

function Home() {
  const { itens } = useContext(appContext);

  if (itens === undefined) {
    return <div>Carregando...</div>;
  }

  return (
    <main className={ Style }>
      <Header />
      <div>
        {
          itens.map((i) => (
            <Card
              key={ i.id }
              permalink={ i.permalink }
              price={ i.price }
              thumbnail={ i.thumbnail }
              title={ i.title }
            />
          ))
        }
      </div>
      {console.log(itens)}
    </main>

  );
}

export default Home;
