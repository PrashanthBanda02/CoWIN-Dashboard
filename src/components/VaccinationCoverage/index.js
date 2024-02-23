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
  const {data} = props
  const ccList = data.map(each => ({
    dose1: each.dose_1,
    dose2: each.dose_2,
    vaccineDate: each.vaccine_date,
  }))

  const DataFormatter = number => {
    if (number > 0) {
      return `${number.toString()}00k`
    }
    return '0k'
  }

  return (
    <div className="sub-can">
      <h1 className="vac-cov-head">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={ccList}
          margin={{
            top: 5,
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
            tickFormatter={DataFormatter}
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

          <Bar dataKey="dose1" name="dose1" barSize="15%" fill="#5a8dee" />
          <Bar dataKey="dose2" name="dose2" barSize="15%" fill="#f54394" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
