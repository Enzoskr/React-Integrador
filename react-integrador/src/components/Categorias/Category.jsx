import React from 'react'
import { CategoriesCard, CategoriesImg  } from './CategoriesStyles'


const Category = ( {title, img, Category} ) => {
  return (
    <CategoriesCard whileTap={{ scale: 0.9 }}>
      <CategoriesImg src={img} alt={Category} />
      <h2>{title}</h2>
    </CategoriesCard>

  )
  
}

export default Category