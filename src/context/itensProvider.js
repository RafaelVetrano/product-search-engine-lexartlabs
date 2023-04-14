import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import appContext from './appContext';

function ItensProvider({ children }) {
  const [data, setData] = useState([]);
  const [itens, setItens] = useState([]);
  const [endpoint, setEndpoint] = useState('https://api.mercadolibre.com/sites/MLB/search?category=MLB1051');
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState({
    searchByName: {
      name: '',
    },
  });

  useEffect(() => {
    const searchByName = () => {
      const test = data.filter((i) => (
        i.title.match(new RegExp(search.searchByName.name, 'i'))
      ));
      setItens(test);
    };
    searchByName();
  }, [search]);

  useEffect(() => {
    const changeCategory = async () => {
      setEndpoint(`https://api.mercadolibre.com/sites/MLB/search?category=${category}`);
    };
    changeCategory();
  }, [category]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(endpoint);
      const responseJSON = await response.json();
      setItens(responseJSON.results);
      setData(responseJSON.results);
    };
    fetchApi();
  }, [endpoint]);

  const value = useMemo(() => ({
    itens,
    setCategory,
    search,
    setSearch,
  }), [search, itens]);

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
