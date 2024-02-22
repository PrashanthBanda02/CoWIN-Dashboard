import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props

  return (
    <>
      <h1 className="heading">Vaccination by age</h1>
      <div className="container">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              cx="50%"
              cy="40%"
              data={vaccinationByAge}
              startAngle={0}
              endAngle={360}
              innerRadius="40%"
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="18-44" fill="#fecba6" />
              <Cell name="45-60" fill="#b3d23f" />
              <Cell name="Above 60" fill="#a44c9e" />
            </Pie>
            <Legend
              iconType="circle"
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default VaccinationByAge
