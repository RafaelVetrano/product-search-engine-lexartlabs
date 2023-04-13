import React from 'react';
import style from './header.modules.css';

function Header() {
  return (
    <header className={ style }>
      <select name="categories">
        <option value="mobile">Mobile</option>
        <option value="refrigerator">Refrigerator</option>
        <option value="TV">TV</option>
      </select>

      <select name="webSite">
        <option value="mercado livre">Mercado Livre</option>
        <option value="buscape">Buscapé</option>
      </select>

      <div>
        <input type="text" name="search" />
        <button type="button">Buscar</button>
      </div>

    </header>
  );
}

export default Header;
