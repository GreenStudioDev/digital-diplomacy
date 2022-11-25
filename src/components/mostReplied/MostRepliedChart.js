import React from 'react'
import PropTypes from 'prop-types'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

MostRepliedChart.propTypes = {
  newData: PropTypes.array.isRequired
}

export function MostRepliedChart ({ newData }) {
  const labels = newData.map(item => item.user_account)

  const dataSet = newData.map(item => item.tweets_number)

  const options = {
    fill: true,
    responsive: true,
    scales: {
      y: {
        min: 0
      },
      x: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: true
      }
    }
  }

  const data = {
    datasets: [
      {
        label: 'Official account ' + newData[0].official_account,
        data: dataSet,
        tension: 0.3,
        borderColor: 'rgb(75, 192, 192)',
        pointRadius: 6,
        pointBackgroundColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.3)'
      }
    ],
    labels
  }

  return <Line data={data} options={options} />
}
