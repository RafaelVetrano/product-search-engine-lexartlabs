import React from 'react';

function Header() {
  return (
    <div>
      <select name="categories">
        <option value="volvo">Mobile</option>
        <option value="saab">Refrigerator</option>
        <option value="mercedes">TV</option>
      </select>

      <select name="webSite">
        <option value="volvo">Mercado Livre</option>
        <option value="saab">Buscapé</option>
      </select>
      <div>
        <input type="text" name="search" />
        <button type="button">Buscar</button>
      </div>

    </div>
  );
}

export default Header;
