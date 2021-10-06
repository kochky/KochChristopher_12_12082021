import PropTypes from 'prop-types'

/**Hero component
 * @param {string} name- User's name
 */
function Hero ({name}){

    return (
        <div className="hero">
            <div>  
                <span className="title">Bonjour</span><span className="title red"> {name}  </span>
            </div>  
            <p>Félicitation ! Vous avez explosé vos objectifs hier  !&nbsp;👏</p>
        </div>
    )
}

Hero.propTypes = {
    name: PropTypes.string
}

export default Hero