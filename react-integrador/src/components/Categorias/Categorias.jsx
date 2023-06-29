import React from 'react'
import {CategoriesCard, CategoriesContainer, CategoriesWrapper } from './CategoriesStyles'
import {categories} from '../../data/Categories'
import Category from './Category';

const Categories = () => {
  return (
  <CategoriesWrapper>
    <h2>Categorias</h2>
    <CategoriesContainer>
      {
        categories.map((category) => {
        return <Category 
        key={category.id}
        {...category}
        />
        })
      }
    </CategoriesContainer>
 </CategoriesWrapper>
  )
}
export default Categories
