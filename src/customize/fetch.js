import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect( () => {
        const ourRequest = axios.CancelToken.source(); // <-- 1st step
        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token, // <-- 2nd step
                })
                let data = res && res.data ? res.data : []
                // && res.data.results ? res.data.results : []
                setData(data)
                // setDataNhanvien(data.reverse())  
                setIsLoading(false)  
                setIsError(false)
            }
            catch(err) {
                if(axios.isCancel(err)) {    // <-- 3rd step
                    console.log('Request canceled', err.message);
                }
                else {
                    setIsError(true)
                    setIsLoading(false)                    
                }  
            }
        }

        // setTimeout(() => {
        //     fetchData()
        // }, 3000)
        fetchData()
        
        return () => {
            ourRequest.cancel('Operation canceled by the user.') // <-- 4th step
        } 
    }, [url])

    return {
        data, isLoading, isError
    }    
} 

export default useFetch