import React from 'react'

export const CatalogListMenu = () => {

const catalogListMenu = ['wonan', 'men', 'kids', 'sport', 'kitchen', 'lorem'];

  return (
    <ul style={{display: 'flex', justifyContent: 'space-around'}}>
        {catalogListMenu.map(it => 
        <li key={it}>
        {it}
        </li>
        )}
    </ul>
  )
}
