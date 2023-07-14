import React from 'react'
import { ItemNavbarStyles, ListNavbarStyles } from './ListNavbarStyles'

const ListNavbar = () => {
  return (
    <ListNavbarStyles>
        <ItemNavbarStyles>
            <a href="#">New in</a>
        </ItemNavbarStyles>
        <ItemNavbarStyles>
            <a href="#">Shop</a>
        </ItemNavbarStyles>
        <ItemNavbarStyles>
            <a href="#">Contact Us</a>
        </ItemNavbarStyles>
    </ListNavbarStyles>
  )
}

export default ListNavbar