import React ,{useContext} from 'react';
import {useSpring, animated} from 'react-spring'
import { AdminContext } from '../contexts/AdminContext';
const Social = () => {
    const {nightMode} = useContext(AdminContext) 
    const anim = useSpring({ fill : nightMode ?  '#fff' : '#333333'});
    return (
        <div className='social'  style={{ display : 'flex' ,flexDirection :'column', paddingTop : '20px'}}  >
            <div className="social-box" style={styles}>
                <animated.svg style={anim} role="img"  width='40px' height='40px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook icon</title><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/>
                </animated.svg>
            </div>      
            <div className="social-box" style={styles} >
                <animated.svg  style={anim} width='40px' height='40px' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter icon</title><path  d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></animated.svg>
            </div>
        </div>
    );
}

export default Social;
const styles={ display:'flex',justifyContent : 'center',alignItems:'center',alignSelf:'center',  paddingTop : '50px',height : '60px' ,width : '60px',marginTop : '20px', borderRadius : '50%' ,padding: '11px' ,cursor:'pointer' }