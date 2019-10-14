import React ,{ useContext , useState } from 'react';
import { AdminContext } from '../contexts/AdminContext';
import {useSpring, animated} from 'react-spring'
import uuid from 'uuid';
const Navbar = () => {
    const [links] = useState([
        'O nas','Usługi','Serwis','Kontakt'
    ])
    const {appName} = useContext(AdminContext) 
    const {nightMode} = useContext(AdminContext) 
    console.log(nightMode)
    
    const anim = useSpring({
        background : nightMode ? '#3b3b3b' : '#fff',
        color : nightMode ? '#fff' : '#333'
    })
    return (
        <animated.div id='nav'

        className ='shadow navbar test'
        style={{...anim ,height : '50px'}}>
            <div className='container  nav' style={{
                display : 'flex',
                justifyContent : 'space-around'
            }} >
                <div className="brand"  style={{flex:'1'}}>
                    <h4 style={{lineHeight :'50px' ,fontWeight : '900'}}>{appName}</h4>
                </div>
                <animated.nav style={{...anim,display:'flex'}}>
                    <ul style={{display : 'flex' , listStyle : 'none' ,lineHeight : '50px' ,background : 'inerhit'}}>
                        {links.map(link=>(<li key={uuid()} > {link} </li>))}
                    </ul>
                </animated.nav>
        </div>
        </animated.div>
    );
}

export default Navbar;
