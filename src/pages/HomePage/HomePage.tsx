import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard.tsx';
import FilterBar from '../../components/FilterBar/FilterBar.tsx';
import { useFavorites } from '../../contexts/FavoritesContext.tsx';
import styles from './HomePage.module.css';

type Product = {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
};

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);
  const { favorites } = useFavorites();

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === '' || product.category === category;
    const matchesFavorites = !showFavorites || favorites.includes(product.id);
    return matchesSearch && matchesCategory && matchesFavorites;
  });

  return (
    <div className={styles.container}>
      <div className={styles.filterBar}>
        <FilterBar
          search={search}
          category={category}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
        />
        <button
          className={styles.filterButton}
          onClick={() => setShowFavorites(!showFavorites)}
        >
          {showFavorites ? 'Show All' : 'Show Favorites'}
        </button>
      </div>
      <div className={styles.productsGrid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
