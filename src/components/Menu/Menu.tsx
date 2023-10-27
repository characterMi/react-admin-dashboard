import { NavLink } from 'react-router-dom'
import './menu.scss';
import { menu } from "../../data/data"

const Menu = () => {
  return (
    <section className='menu'>
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <div className="title">{item.title}</div>
          {item.listItems.map((listItem) => (
            <NavLink key={listItem.id} to={listItem.url} className={({isActive}) => isActive ? 'active' : 'list-item'}>
              <img src={listItem.icon} alt={listItem.title} />
              <span className="list-item-title">{listItem.title}</span>
            </NavLink>
          ))}
        </div>
      ))}
    </section>
  )
}

export default Menu