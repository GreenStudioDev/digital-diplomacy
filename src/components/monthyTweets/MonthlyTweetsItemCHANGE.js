import PropTypes from 'prop-types'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'

MonthlyTweetsItem.propTypes = {
  newData: PropTypes.array.isRequired
}

export function MonthlyTweetsItem ({ newData }) {
  const tweetNumber = newData.map((item) => parseInt(item.tweets_number))
  const totaltweets = tweetNumber.reduce(
    (totaltweetsNumber, item) => totaltweetsNumber + item,
    0
  )
  const accountInfo = []
  const account = newData[0]

  if (account) {
    accountInfo.push(account.official_account)
    accountInfo.push(account.period_id)
  }

  const columns = [
    {
      name: 'Month',
      selector: (row) => row.stringMonth
    },
    {
      name: 'Number of tweets',
      selector: (row) => row.tweets_number
    }
  ]
  function createData (month, tweetsNumber) {
    const stringMonth =
      new Date(month).toLocaleString('en-En', {
        month: 'long',
        timeZone: 'UTC'
      }) +
      ' ' +
      new Date(month).getUTCFullYear()
    return {
      stringMonth,
      tweetsNumber
    }
  }

  const rows = newData.map((item) =>
    createData(item.month, parseInt(item.tweetsNumber))
  )

  return (
    <div className="App">
      <div className="card">
        <h3> {accountInfo[2]} </h3>
        <h3>
          {' '}
          <Link to={`/en/digital-diplomacy/${accountInfo[0]}`}>
            {accountInfo[0]}
          </Link>{' '}
        </h3>
        <h5>
          {/* Periodo de {period.startDate.toString()} a{period.endDate.toString()} */}
        </h5>
        <h5>Total Tweets for this period - {totaltweets} </h5>
        <DataTable
          columns={columns}
          data={rows}
          title="Tweets per month"
          subHeader
          subHeaderAlign="left"
          highlightOnHover
        />
      </div>
    </div>
  )
}
