import React, { useContext } from 'react';
import Header from '../components/Header';
import Style from './home.module.css';
import appContext from '../context/appContext';
import Card from '../components/Card';

function Home() {
  const { itens, isLoading, category, web } = useContext(appContext);

  return (
    <main className={ Style }>
      <Header />
      <div>
        { isLoading && <h1>CARREGANDO...</h1> }
        {
          web === 'Mercado Livre'
          && itens.map((i) => (
            <Card
              key={ i.id }
              permalink={ i.permalink }
              price={ i.price }
              thumbnail={ i.thumbnail }
              title={ i.title }
              web={ i.official_store_name }
              brand={ i.attributes[0].value_name }
              category={ category }
            />
          ))
        }
        { web === 'Buscape' && <h1> 403 ERROR The request could not be satisfied.</h1>}
      </div>
      {console.log(itens)}
    </main>

  );
}

export default Home;
