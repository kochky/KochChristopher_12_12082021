import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import React from 'react';
import PropTypes from 'prop-types'



function CustomTooltip2({ payload, label, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="label">{`${payload[1].value}kCal`}</p>
       
      </div>
    );
  }

  return null;
}

function Barchart({data}){
   
   
    //props.data.sessions.map((item) =>( item.day=item.day.split('-')[2]  ));
  
   
    return  ( 
        <React.Fragment>
        <div className="activity-title">Activité quotidienne</div>
        <BarChart
          width={835}
          height={300}
          data={data}
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
          <Tooltip content={<CustomTooltip2 />}cursor={{ stroke: 'rgba(224,224,224,0.3)'}} contentStyle={{color:'white', backgroundColor:'red'}}wrapperStyle={{ width: 40, height: 63,fontSize: 10, color:'white', backgroundColor:'red'}}/>
          <Legend   padding="1000" iconSize={8} iconType="circle"verticalAlign="top"  height={36} />
          <Bar name="Poids(kg)" yAxisId="right" dataKey="kilogram" radius={[3.5, 3.5, 0, 0]} fill="#282d30" />
          <Bar name="Calories brûlées (kCal)"yAxisId="left" dataKey="calories" radius={[3.5, 3.5, 0, 0]} fill="red" />
        </BarChart>
        </React.Fragment>
    )

}

Barchart.propTypes = {
  data:PropTypes.array
}

export default Barchart