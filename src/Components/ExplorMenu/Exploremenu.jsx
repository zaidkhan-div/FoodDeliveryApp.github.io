import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets' // here we have all data Media


const Exploremenu = ({ category, setCategory }) => {
    // here we well gett all menus img and their data from a object we created in assets file
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our Menu</h1>
            <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <div className="explore-menu-list">
                {/* Here in this we will map menu list that we got from assets */}
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category === item.menu_name ? "active" : ''} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default Exploremenu
