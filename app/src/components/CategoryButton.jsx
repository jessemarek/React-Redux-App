import React from 'react'


const CategoryButton = props => {

    return(
        <button 
            className={props.name === props.currentCategory ? 'active' : ''}
            onClick={e => props.changeCategory(props.name)}
        >
            {props.name}
        </button>
    )
}

export default CategoryButton