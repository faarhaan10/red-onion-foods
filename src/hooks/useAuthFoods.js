import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const useAuthFoods = () => {
    return useContext(AuthContext);
};

export default useAuthFoods;