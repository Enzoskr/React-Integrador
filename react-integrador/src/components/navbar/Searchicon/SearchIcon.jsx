import React from 'react'

import {AiOutlineSearch} from 'react-icons/ai'

import {SearchHidden} from '../../../redux/cart/cartSlice'
import { LinkContainerStyled } from '../NavbarStyles'
import { useDispatch } from 'react-redux'

const SearchIcon = ({hidden}) => {
  const dispatch = useDispatch()
  

  return (
    <LinkContainerStyled onClick={() => dispatch(SearchHidden())}>
        <AiOutlineSearch />
    </LinkContainerStyled>


  )
}

export default SearchIcon