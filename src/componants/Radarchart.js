import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';


function Radarchart (props) {

   
  
    props.data.data.map((item)=>(
        
        (item.kind===1 ? item.kind="Cardio":''),
        (item.kind===2? item.kind="Energie":''),
        (item.kind===3? item.kind="Endurance" :''),
        (item.kind===4? item.kind="Force":''),
        (item.kind===5? item.kind="Vitesse":''),
        (item.kind===6? item.kind="Intensité":'')

        ));

       
    return (
        <div id ="radarchart"className="card">
             <RadarChart cx="50%" cy="50%" outerRadius="70%" width={248} height={255} data={props.data.data} startAngle={30} endAngle={-330} >
                    <PolarGrid/>
                    <PolarAngleAxis dataKey="kind" fontSize="12" color="white" />
                    <PolarRadiusAxis />
                    <Radar dataKey="value" stroke="white" fill="red" fillOpacity={0.6} />
                    </RadarChart> 
        </div>
    )
}

export default Radarchart