import React, {useState} from 'react'
import { AddCategory, GifGrid } from './components';

const GiftExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'New Zeland' ]);

  const onAddCategory = ( newCategory ) => {
    if( categories.includes(newCategory) ) return;
      setCategories([  newCategory ,...categories ])
  }

  return (
    <div className="container">
      <h1>GiftExpert</h1>

        <AddCategory
          onNewCategory = { (value) => onAddCategory(value)}
        />
          {
            categories.map( (category) => (
              <GifGrid key={category} category={category}/>
            ))
          }
    </div>
  );
}

export default GiftExpertApp