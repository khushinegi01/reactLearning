import {useEffect , useState} from 'react'

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://api.frankfurter.app/latest?from=${currency}`)
        .then((res)=> res.json())
        .then((res)=> setData(res.rates))
        .catch((err)=>console.log(`Error :Fetching Error!!!`,err))
    },[currency])
    console.log(data)
    return data
}

export default useCurrencyInfo;