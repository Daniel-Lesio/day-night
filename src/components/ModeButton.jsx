import React , {useContext} from 'react';
import {useSpring, animated} from 'react-spring'
import NightIcon from '../assets/night.svg'
import DayIcon from '../assets/day.svg'
import { AdminContext } from '../contexts/AdminContext';
const ModeButton = () => {
    const {nightMode} = useContext(AdminContext)
    const {changeMode} = useContext(AdminContext)
    const show = useSpring({
        opacity : nightMode ? 0: 1,
        marginTop : nightMode ? 300 :0,        
    })
    const show2 = useSpring({
        opacity : nightMode ? 1: 0 ,
        marginTop : nightMode ? 0 :300       
    })
    return (
        <div 
        className='mode-button shadow' 
        onClick={()=> {
            changeMode(!nightMode)
        } }
        style={{
            borderRadius : '50%',
            overflow : 'hidden'

        }} >
            <div style={{...show , styles}} >
                <animated.img  className='menu-icon-btn'alt='night' style={show} src={NightIcon} />
                <animated.img  className='menu-icon-btn'alt='day' style={show2} src={DayIcon} />
            </div>
           
             
        </div>
    );
}
export default ModeButton;

const styles={

}
