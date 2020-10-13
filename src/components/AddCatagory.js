import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCatagory = ({ setCategories }) => {

  const [inputValue, setinputValue] = useState('');

  const handleInputChange = (e) => {
    setinputValue( e.target.value )
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if( inputValue.trim().length > 2 ){
      setCategories( cats => [inputValue, ...cats])
      setinputValue('')
    }
  }

  return (

    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
        placeholder='Escribe una nueva cateoria'
      />
    </form>

  )
}

AddCatagory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
