import React from 'react'
import { CategoriesCard, CategoriesImg  } from './CategoriesStyles'


const Category = ( {title, img, Category} ) => {
  return (
    <CategoriesCard 
      whileTap={{ scale: 0.9 }}
      selected= {false} 
      onClick={e => e.preventDefault()}>
      <CategoriesImg src={img} alt={Category} />
      <h3>{title}</h3> 
    </CategoriesCard>

  )
  
}

export default Category