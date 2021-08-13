import Hero from './componants/Hero';
import Fetch from './service/fetch';
import { useState, useEffect } from 'react'
import {
    useParams
  } from "react-router-dom";
import Linechart from './componants/Linechart';



function App (){
    const { id } = useParams();
   
    const { userdata, averageSessionsData,performanceData, isLoaded,activityData, error } = Fetch(id)
     

     if (error) {
        return (<div className="error-message"><i class="fas fa-exclamation-triangle fa-5x"></i><div >Veuillez réactualiser la page...</div></div>);
      } else if (!isLoaded) {
        return <div className="container"><div className="loading">Chargement...</div></div>;
      }else if (isLoaded) {

        return (
            <div className="container">
               
                <Hero name={userdata}/>
                <main>
                    <article>
                        <div className="dailyactivity"></div>
                        <div className="card-div">
                            <Linechart data={averageSessionsData} />
                            <div className="card">

                            </div>
                            <div className="card">

                            </div>
                        </div>
                    </article>

                    <aside>
                        <div className="aside-card">
                            <div className="icon-container">
                                <div id="calories"></div>
                            </div>
                            <div>
                                <p className="nutriment-data">{userdata.keyData.calorieCount}</p>
                                <p className="nutriment">Calories</p>
                            </div>
                        </div>
                        <div className="aside-card">
                            <div  className="icon-container">
                                <div id="proteines"></div>
                            </div>
                            <div>
                                <p className="nutriment-data">{userdata.keyData.proteinCount}</p>
                                <p className="nutriment">Proteines</p>
                            </div>
                        </div>
                        <div className="aside-card">
                            <div  className="icon-container">
                                <div id="glucides"></div>
                            </div>
                            <div>
                                <p className="nutriment-data">{userdata.keyData.carbohydrateCount}</p>
                                <p className="nutriment">Glucides</p>
                            </div>
                        </div>
                        <div className="aside-card">
                            <div  className="icon-container">
                                <div id="lipides"></div>
                            </div>
                            <div>
                                <p className="nutriment-data">{userdata.keyData.lipidCount}</p>
                                <p className="nutriment">Lipides</p>
                            </div>
                        </div>
                    </aside>
                </main>
            </div>
        )
    }
}



export default App