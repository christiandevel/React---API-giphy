
import React, { useState} from 'react'
import { AddCatagory } from './components/AddCatagory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  // const categories = ['One Punch', 'Samurai X', 'Dragin Ball']
  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => {
  //   setCategories(['HunterXHunter', ...categories ]);
  // }

  return (
    <>
      <h2>GifExpert App</h2>
      <AddCatagory setCategories={ setCategories }/>
      <hr />

    

      <ol>
        { 
          categories.map( category => (
            <GifGrid 
              key={ category }
              category= { category }
            />
          ))
        }
      </ol>
    </>
  )
}
