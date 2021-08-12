import Hero from './Hero';



function App (){

    return (
        <div className="container">

            <Hero />
            <main>
                <article>
                    <div className="dailyactivity"></div>
                    <div className="card-div">
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                </article>

                <aside>
                    <div className="aside-card">
                        <div className="icon-container">
                            <div id="calories"></div>
                        </div>
                        <div>
                            <p className="nutriment-data">1.930kCal</p>
                            <p className="nutriment">Calories</p>
                        </div>
                    </div>
                    <div className="aside-card">
                        <div  className="icon-container">
                            <div id="proteines"></div>
                        </div>
                        <div>
                            <p className="nutriment-data">155g</p>
                            <p className="nutriment">Proteines</p>
                        </div>
                    </div>
                    <div className="aside-card">
                        <div  className="icon-container">
                            <div id="glucides"></div>
                        </div>
                        <div>
                            <p className="nutriment-data">290g</p>
                            <p className="nutriment">Glucides</p>
                        </div>
                    </div>
                    <div className="aside-card">
                        <div  className="icon-container">
                            <div id="lipides"></div>
                        </div>
                        <div>
                            <p className="nutriment-data">50g</p>
                            <p className="nutriment">Lipides</p>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    )
}



export default App