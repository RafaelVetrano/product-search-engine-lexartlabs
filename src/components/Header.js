import React, { useContext } from 'react';
import appContext from '../context/appContext';
import style from './header.modules.css';

function Header() {
  const { setCategory, setSearch, search } = useContext(appContext);

  const handleClick = ({ target }) => {
    const { value } = target;
    if (value === 'mobile') {
      return setCategory('MLB1051');
    }
    if (value === 'refrigerator') {
      return setCategory('MLB181294');
    }
    if (value === 'TV') {
      setCategory('MLB1002');
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

      <select name="webSite">
        <option value="mercado livre">Mercado Livre</option>
        <option value="buscape">Buscapé</option>
      </select>

      <div>
        <input
          type="text"
          name="search"
          value={ search.searchByName.name }
          placeholder="BUSCAR..."
          onChange={ (e) => handleChange(e) }
        />
        <button type="button">Buscar</button>
      </div>

    </header>
  );
}

export default Header;
