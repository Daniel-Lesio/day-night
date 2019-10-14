import React, { createContext , useState } from 'react';

export const AdminContext = createContext();


const AdminContextProvider = (props) => {
    const [appName] = useState('App Name')
    const [ nightMode ,setNightMode] = useState(false)
    const [linkActive , setLinkActive] = useState(1)
    const changeMode = () => setNightMode(!nightMode)
    const ChangeLink = (nr) => setLinkActive(nr)
    return ( 
        <AdminContext.Provider value={{appName , nightMode , changeMode , linkActive,ChangeLink   }}>
            { props.children }
        </AdminContext.Provider>
     );
}
export default AdminContextProvider;