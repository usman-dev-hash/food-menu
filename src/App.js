import React, {useState} from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App(){

    const [activeCategory, setActiveCategory] = useState('all');
    const [menuItems, setMenuItems] = useState(items);

    const allCategories = ['all', ...new Set(items.map( (item) => item.category))];

    const filterItems = (category) => {
        if (category === 'all'){
            setMenuItems(items);
            return;
        }
        const newItems = items.filter( (item) => item.category === category);
        setMenuItems(newItems);
        setActiveCategory(category);
    }

    return (
        <main>
            <section className='menu section'>
                <div className='title'>
                    <h2>our menu</h2>
                    <div className='underline' />
                </div>
                <Categories allCategories={allCategories} filterItems={filterItems} activeCategory={activeCategory} />
                <Menu items={menuItems} />
            </section>
        </main>
    )

}

export default App;