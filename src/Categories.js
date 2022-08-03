import React from "react";

const Categories = ({allCategories, filterItems, activeCategory}) => {

    return <div className='btn-container'>

        {
            allCategories.map( (category, index) => {
                return (
                    <button
                        key={index}
                        className={ activeCategory === category ? 'filter-btn active-category' : 'filter-btn' }
                        onClick={ () => filterItems(category) }
                    >
                        {category}
                    </button>
                )
            })
        }

    </div>
}

export default Categories;