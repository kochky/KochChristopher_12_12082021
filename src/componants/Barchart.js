import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


function Barchart(props){
   
    console.log(props.data)
    return  ( 
        <reactFragment>
        <div className="activity-title">Activité quotidienne</div>
        <BarChart
          width={835}
          height={300}
          data={props.data.sessions}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          barSize={7}
          barGap={8}
          
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis hide yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis  yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend   padding="1000" iconSize={8} iconType="circle"verticalAlign="top"  height={36} />
          <Bar name="Poids(kg)" yAxisId="right" dataKey="kilogram" radius={[3.5, 3.5, 0, 0]} fill="#282d30" />
          <Bar name="Calories brûlées (kCal)"yAxisId="left" dataKey="calories" radius={[3.5, 3.5, 0, 0]} fill="red" />
        </BarChart>
        </reactFragment>
    )

}

export default Barchart