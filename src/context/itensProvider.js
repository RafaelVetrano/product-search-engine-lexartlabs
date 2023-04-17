import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import appContext from './appContext';

function ItensProvider({ children }) {
  const [web, setWeb] = useState('Mercado Livre');
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [itens, setItens] = useState([]);
  const [endpoint, setEndpoint] = useState('https://api.mercadolibre.com/sites/MLB/search?category=MLB1051');
  const [categoryId, setCategoryId] = useState('MLB1051');
  const [category, setCategory] = useState('mobile');
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
  }, [search, data]);

  useEffect(() => {
    const changeCategory = async () => {
      setEndpoint(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    };
    changeCategory();
  }, [categoryId]);

  useEffect(() => {
    const fetchApi = async () => {
      setIsLoading(true);
      const response = await fetch(endpoint);
      const responseJSON = await response.json();
      setItens(responseJSON.results);
      setData(responseJSON.results);
      setCategory(responseJSON.filters[0].values[0].name);
      setIsLoading(false);
    };
    fetchApi();
  }, [endpoint]);

  const value = useMemo(() => ({
    itens,
    setCategoryId,
    search,
    setSearch,
    isLoading,
    web,
    setWeb,
    category,
  }), [search, itens, isLoading, web, category]);

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
