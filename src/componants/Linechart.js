import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import PropTypes from 'prop-types'




function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value} min`}</p>
        
      
      </div>
    );
  }

  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}
 
function Linechart({data}){
  data[0].day = "L"
  data[1].day = "M"
  data[2].day = "M"
  data[3].day = "J"
  data[4].day = "V"
  data[5].day = "S"
  data[6].day = "D"

  return (
          <div id ="line-chart"className="card">
              <div className="linechart-title">Durée moyenne des sessions</div>
              <LineChart  margin={{ top: 5, right: 15, bottom: 5, left: 15 }}width={258} height={263} data={data}>
                  <Line type="monotone" dataKey="sessionLength" stroke="#ffb6b6" />
                  <XAxis  dataKey="day"  />
                  <YAxis  hide={true} type="number" domain={['dataMin', 'dataMax+15']} />
                  
                  <Tooltip cursor={{ stroke: 'rgba(236,61,61, 0.6)', strokeWidth: 50 }} wrapperStyle={{ width: 40, height: 25,fontSize: 10, backgroundColor: '#FFF',display:'flex',justifyContent:'center',alignItems:'center' }} content={<CustomTooltip />}/>
              </LineChart>
          </div>

    
  )
}

LineChart.propTypes = {
  data: PropTypes.array

}

export default Linechart