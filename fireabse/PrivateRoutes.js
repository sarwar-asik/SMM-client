import { AuthContext } from 'authProvider/ProviderContext';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
    const router = useRouter();
  if(user){
    return {children}
  }
  else{
    router.push("/")
  }
};

export default PrivateRoutes;