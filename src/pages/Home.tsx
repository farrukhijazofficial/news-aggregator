import React, { useState } from 'react';
import NewsFeed from '@/components/NewsFeed.tsx';
import Header from '@/components/Header.tsx';


const Home: React.FC = () => {
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleFilterChange = (type: string, value: string | null) => {
    setFilters(prevState => ({ ...prevState, [type]: value }));
  };

  return (
    <div>
      <Header onSearch={handleSearch} onFilterChange={handleFilterChange} filters={filters}/>
      <NewsFeed filters={filters} searchTerm={searchTerm}/>
    </div>
  );
};

export default Home;