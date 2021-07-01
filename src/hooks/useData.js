import { useState } from 'react';
import axios from 'axios';

export const useData = () => {
    const [data, setData] = useState(getData());
   
    const getData = async () => {
        return axios.get('/').then(res => 
            setData(res.data.records),
      )};
    }

    return (data)
}
