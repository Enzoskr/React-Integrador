import styled from 'styled-components';

export const ListNavbarContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
color: var(--text-color-black);
`

export const ListNavbarStyles = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
list-style: none;
margin: 0;
padding: 12px 0;

`
export const ItemNavbarStyles = styled.li`
padding: 0 10px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 10px;
a{
    cursor: pointer;
}
a:hover{
    text-decoration: underline 1.5px solid gray;
}

    


`