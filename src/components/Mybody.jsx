import React ,{useContext}  from 'react';
import Social  from  './Social'
import {useSpring, animated} from 'react-spring'
import { AdminContext } from '../contexts/AdminContext';
import Content from './Content';

const Mybody = () => {

    const {nightMode} = useContext(AdminContext) 

     const anim = useSpring({background : nightMode ? '#333' : '#eee',})
     

    return (
      <div className="div">
        <animated.div style={{...anim, paddingTop : 20}} >
        <div className="container" style={{  marginTop : 50 , paddingBottom : 100}}>
        <div className="row">
          <div className="d-none d-lg-block col-lg-1">
            <Social></Social>
          </div>
          <div className=" col-sm-12 col-md-12 col-lg-8">
          <Content></Content>
          </div>
          <div className=" d-none d-lg-block">
            
          </div>
        </div>
      </div>
      </animated.div>
      </div>
    );
}

export default Mybody;
