// create your App component here
import React ,{useState,useEffect}from 'react'

function App() {
    const [info,setInfo]=useState([])
    const [loading,setLoading]=useState(true)
     useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then(data=>{setInfo(data)
        setLoading(false)
        console.log(info)
     })
     .catch((error)=>{
        console.error("Failed to fetch the data",error)
        setLoading(false)
     })
     },[]);
    
  return (
    <div>
        <body>
        {loading?( <p>Loading...</p>)
        : <img src={info.message}  alt='A Random Dog'/>
        }
        </body>
    </div>
  )
}

export default App