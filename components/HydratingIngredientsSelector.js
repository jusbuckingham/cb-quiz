// HydratingIngredientsSelector.js
import React, { useState } from 'react';
import styles from '../styles/HydratingIngredientsSelector.module.css';

const ingredients = [
  { id: 'niacinamide', label: 'Niacinamide', description: 'This is a form of vitamin B that supports protein and collagen to promote optimal skin health' },
  { id: 'lipid', label: 'Lipid Compound', description: 'This improves moisture retention in the skin’s barrier for long-lasting hydration' },
  { id: 'ribose', label: 'Ribose', description: 'This reduces the appearance of thinning, wrinkled skin' },
  { id: 'jojoba', label: 'Jojoba Leaf Extract', description: 'This is rich in antioxidants and helps stimulate the production of collagen' },
  { id: 'glycerin', label: 'Glycerin', description: 'This helps keep skin hydrated' },
  { id: 'unsure', label: 'Unsure what my skin needs', description: '' }
];

const HydratingIngredientsSelector = ({ onContinue, onSkip }) => {
  const [selectedIngredients, setSelectedIngredients] = useState({});

  const toggleIngredient = (ingredientId) => {
    setSelectedIngredients(prev => ({
      ...prev,
      [ingredientId]: !prev[ingredientId]
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.backButton}>&lt;</div>
        <div className={styles.progress}>2/6</div>
      </div>
      <h2>What hydrating ingredients are you interested in?</h2>
      <div className={styles.options}>
        {ingredients.map(ingredient => (
          <div 
            key={ingredient.id} 
            className={`${styles.option} ${selectedIngredients[ingredient.id] ? styles.optionSelected : ''}`}
            onClick={() => toggleIngredient(ingredient.id)}
          >
            <div className={styles.checkbox}>
              {selectedIngredients[ingredient.id] && <span className={styles.checkmark}>✓</span>}
            </div>
            <div className={styles.info}>
              <div className={styles.label}>{ingredient.label}</div>
              <div className={styles.description}>{ingredient.description}</div>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.continueButton} onClick={onContinue}>Continue</button>
      <button className={styles.skipButton} onClick={onSkip}>Skip</button>
    </div>
  );
};

export default HydratingIngredientsSelector;
