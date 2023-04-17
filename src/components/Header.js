import React, { useContext } from 'react';
import appContext from '../context/appContext';
import style from './header.modules.css';

function Header() {
  const { setCategoryId, setSearch, search, setWeb } = useContext(appContext);

  const handleClick = ({ target }) => {
    const { value } = target;
    if (value === 'mobile') {
      return setCategoryId('MLB1051');
    }
    if (value === 'refrigerator') {
      return setCategoryId('MLB181294');
    }
    if (value === 'TV') {
      setCategoryId('MLB1002');
    }
    if (value === 'Mercado Livre') {
      setWeb('Mercado Livre');
    }
    if (value === 'Buscape') {
      setWeb('Buscape');
    }
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch({
      searchByName: {
        name: value,
      },
    });
  };

  return (
    <header className={ style }>
      <select
        name="categories"
        onClick={ (e) => handleClick(e) }
      >
        <option value="mobile">Mobile</option>
        <option value="refrigerator">Refrigerator</option>
        <option value="TV">TV</option>
      </select>

      <select
        name="webSite"
        onClick={ (e) => handleClick(e) }
      >
        <option value="Mercado Livre">Mercado Livre</option>
        <option value="Buscape">Buscapé</option>
      </select>

      <div>
        <input
          type="text"
          name="search"
          value={ search.searchByName.name }
          placeholder="BUSCAR..."
          onChange={ (e) => handleChange(e) }
        />
      </div>

    </header>
  );
}

export default Header;
