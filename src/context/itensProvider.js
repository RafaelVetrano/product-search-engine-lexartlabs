import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import appContext from './appContext';

function ItensProvider({ children }) {
  const [itens, setItens] = useState(undefined);

  useEffect(() => {
    const fetchApi = async () => {
      const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1000';
      const response = await fetch(endpoint);
      const data = await response.json();
      setItens(data.results);
    };
    fetchApi();
  }, []);

  // eletronicos api: https://api.mercadolibre.com/sites/MLB/search?category=MLB1000

  const value = useMemo(() => ({
    itens,
  }), [itens]);

  return (
    <appContext.Provider value={ value }>
      {children}
    </appContext.Provider>
  );
}

ItensProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ItensProvider;
