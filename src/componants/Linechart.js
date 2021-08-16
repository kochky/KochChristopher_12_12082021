import { LineChart, Line, XAxis, Tooltip } from 'recharts';




function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value}`}</p>
          
         
        </div>
      );
    }
  
    return null;
  }
 
function Linechart(props){
  
    props.data.sessions[0].day = "L"
    props.data.sessions[1].day = "M"
    props.data.sessions[2].day = "M"
    props.data.sessions[3].day = "J"
    props.data.sessions[4].day = "V"
    props.data.sessions[5].day = "S"
    props.data.sessions[6].day = "D"

    return (
            <div id ="line-chart"className="card">
                <div className="linechart-title">Durée moyenne des sessions</div>
                <LineChart   margin={{top: 5, right: 10, bottom: 0, left: 10 }}width={258} height={178} data={props.data.sessions}>
                    <Line type="monotone" dataKey="sessionLength" stroke="#ffb6b6" />
                    <XAxis  dataKey="day"  />
                    
                    <Tooltip wrapperStyle={{ width: 40, height: 25,fontSize: 10, backgroundColor: '#FFF',display:'flex',justifyContent:'center',alignItems:'center' }} content={<CustomTooltip />}/>
                </LineChart>
            </div>

      
    )
}

export default Linechart