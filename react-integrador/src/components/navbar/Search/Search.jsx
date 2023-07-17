import React from 'react'
import { SearchContainer } from '../NavbarStyles'
import { AiOutlineSearch } from 'react-icons/ai'
import { SearchCartHidden } from '../../../redux/cart/cartSlice'


const Search = (H) => {
  return (
    <SearchContainer onClick={() => SearchCartHidden}>
        <AiOutlineSearch/>
    </SearchContainer>
  )
}

export default Search