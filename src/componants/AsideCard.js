import PropTypes from 'prop-types'


function AsideCard({id,data,nutriment,type}){

    return (
        <div className="aside-card">
                            <div className="icon-container">
                                <div id={id}></div>
                            </div>
                            <div>
                                <p className="nutriment-data">{data}{type}</p>
                                <p className="nutriment">{nutriment}</p>
                            </div>
                        </div>
    )
}

AsideCard.propTypes = {
    id: PropTypes.string,
    data:PropTypes.number,
    nutriment:PropTypes.string,
    type:PropTypes.string,
}

export default AsideCard