
function Hero (props){

    return (
        <div className="hero">
            <div>  
                <span className="title">Bonjour</span><span className="title red"> {props.name.userInfos.firstName}  </span>
            </div>  
            <p>Félicitation ! Vous avez explosé vos objectifs hier  !&nbsp;👏</p>
        </div>
    )


}
export default Hero