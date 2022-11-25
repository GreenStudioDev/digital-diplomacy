import { BarContainer, IsVerified, UserAccount } from '../components/partsDataTable'
import React from 'react'

export const columns = [
  {
    name: <p
      style={{
        fontSize: '0.8rem',
        title: 'User/Account name'
      }}
    >User/Account name</p>,
    selector: (row) => (
      <UserAccount
        userAccount={row.userAccount}
        userAccountDesc={row.userAccountDesc}
      />
    ),
    sortable: true,
    sortFunction: (a, b) => {
      if (a.userAccount < b.userAccount) {
        return -1
      }
      if (a.userAccount > b.userAccount) {
        return 1
      }
      return 0
    },
    wrap: true,
    maxWidth: '350px',
    minWidth: '125px'

  },
  {
    name: <p
    style={{
      fontSize: '0.8rem'
    }}
    >Category</p>,
    selector: (row) => <b>{row.categoría}</b>,
    sortable: true,
    sortFunction: (a, b) => {
      if (a.categoría < b.categoría) {
        return -1
      }
      if (a.categoría > b.categoría) {
        return 1
      }
      return 0
    },
    compact: true,
    id: 'category',
    wrap: true,
    maxWidth: '250px',
    minWidth: '100px',
    omit: window.innerWidth < 408
  },
  {
    name: <p
    style={{
      fontSize: '0.8rem'
    }}
    >Verified</p>,
    selector: (row) => <IsVerified isVerified={row.isVerified} />,
    compact: true,
    id: 'isVerified',
    wrap: false,
    center: true,
    minWidth: '5px',
    maxWidth: '100px'
  },
  {
    name: <p
    style={{
      fontSize: '0.8rem'
    }}
    >Tweets number</p>,
    selector: (row) => <BarContainer dataBar={row.tweets_number} />,
    id: 'tweetsNumber',
    maxWidth: '450px',
    minWidth: '100px',
    sortable: true
  }
]
