import React from 'react'
import { CategoriesCard, CategoriesImg  } from './CategoriesStyles'
import { useSelector } from 'react-redux'


const Category = ( {title, img, Category} ) => {
  const selectedCategory = useSelector((state) => state.categories.selectedCategory)

  return (
    <CategoriesCard 
      whileTap={{ scale: 0.9 }}
      selected= {Category === selectedCategory} 
      onClick={e => e.preventDefault()}>
      <CategoriesImg src={img} alt={Category} />
      <h3>{title}</h3> 
    </CategoriesCard>

  )
  
}

export default Category