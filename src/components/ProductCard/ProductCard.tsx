import React from 'react';
import styles from './ProductCard.module.css';
import { useFavorites } from '../../contexts/FavoritesContext.tsx';

type ProductProps = {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
};

const ProductCard: React.FC<ProductProps> = ({ id, name, image, category, price }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{category}</p>
      <p>${price}</p>
      <button onClick={() => toggleFavorite(id)}>
        {isFavorite(id) ? '★ Remove Favorite' : '☆ Add to Favorite'}
      </button>
    </div>
  );
};

export default ProductCard;
