import React, {useContext} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {useSpring, animated} from 'react-spring'
import { AdminContext } from '../contexts/AdminContext';

const Content = () => {

    const {nightMode} = useContext(AdminContext) 
    const text = useSpring({color : nightMode ? '#eee' : '#333',})    
    return (
        <div>
             <LazyLoadImage
                    alt={'test'}
                    height={400}
                    src={'https://images.unsplash.com/photo-1570961402105-2aa4292cf97e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'}
                    width={'100%'} />
                    
              <animated.h1 style={text} >Lorem, ipsum.</animated.h1>
              <animated.p className='desc' style={text} >23 marzec 1890</animated.p>
              <animated.p style={text} className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias harum ut voluptatem ex laborum. Vel ratione quas sequi in optio?</animated.p>
              <animated.p style={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</animated.p>
              <animated.p style={text} className='mt-3'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure repr</animated.p>
              <animated.p  style={text} >But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</animated.p>
        </div>
    );
}

export default Content;
