import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationCoverageDetails} = props
  console.log(vaccinationCoverageDetails)

  return (
    <>
      <h1 className="heading">Vaccination Coverage</h1>
      <ResponsiveContainer width="90%" height={500}>
        <BarChart
          data={vaccinationCoverageDetails}
          margin={{
            top: 50,
          }}
        >
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="dose1" name="Dose1" fill="#1f77b4" barSize="20%" />
          <Bar dataKey="dose2" name="Dose2" fill="#fd7f0e" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default VaccinationCoverage
