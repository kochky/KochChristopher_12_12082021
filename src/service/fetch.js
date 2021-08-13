import { useState, useEffect } from 'react'




function Fetch(id,activity){
   
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [userdata, setData] = useState([]);
    const [averageSessionsData, setAverageSessionsData] = useState([]);
    const [performanceData, setPerformanceData] = useState([]);
    const [activityData, setActivityData] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:3000/user/${id}`)
          .then(res => res.json())
          .then(
            (result) => {
              setData(result.data);
         
              return (fetch (`http://localhost:3000/user/${id}/average-sessions`))
            },
            (error) => {
              setError(error);
              setIsLoaded(true);
            }
          )
          .then(res => res.json())
          .then(
            (result) => {
              setAverageSessionsData(result.data);
              return (fetch (`http://localhost:3000/user/${id}/performance`))        
            },
            (error) => {
              setError(error);
              setIsLoaded(true);
              
            }
           )
           .then(res => res.json())
          .then(
            (result) => {
              setPerformanceData(result.data);
              return (fetch (`http://localhost:3000/user/${id}/activity`))        
            },
            (error) => {
              setError(error);
              setIsLoaded(true);
              
            }
           )
           .then(res => res.json())
           .then(
             (result) => {
               setActivityData(result.data);
               setIsLoaded(true);
                     
             },
             (error) => {
               setError(error);
               setIsLoaded(true);
               
             }
            )

      },[] )
      return { userdata, averageSessionsData,performanceData,activityData, isLoaded, error };
}
export default Fetch