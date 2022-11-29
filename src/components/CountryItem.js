import React from 'react'
import { Link } from 'react-router-dom'
import VerifiedIcon from '@mui/icons-material/Verified'
import { getFlag } from '../helpers/getFlag'
import {
  CountryCardSelectStyled,
  EmptyCardStyled
} from '../styles/styledComponents/CountryCardSelect'
import { DataTableStyled } from '../styles/styledComponents/ComparativeStyled'
import PropTypes from 'prop-types'
import useQueryData from '../hooks/useQueryData'
const columns = [
  {
    name: 'Name',
    selector: (row) => row.official_account_category_eng,
    sortable: true,
    minWidth: '100px',
    maxWidth: '130px'
  },
  {
    name: 'Account',
    selector: (row) => (
      <Link to={`/digital-diplomacy/${row.official_account}`}>
        {' '}
        {row.official_account}{' '}
      </Link>
    ),
    sortable: true,
    minWidth: '120px',
    maxWidth: '170px'
  },
  {
    name: 'Verified',
    selector: (row) =>
      row.official_account_verified === 'si'
        ? (
        <VerifiedIcon color="primary" />
          )
        : (
        <VerifiedIcon color="disabled" />
          ),

    minWidth: '50px',
    maxWidth: '100px',
    omit: Window.innerWidth < 768
  }
]

CountryItem.propTypes = {
  accountsCountry: PropTypes.array.isRequired,
  countryListManagmentOpen: PropTypes.object.isRequired,
  countrySelectedId: PropTypes.string
}

export function CountryItem ({
  accountsCountry,
  countryListManagmentOpen,
  countrySelectedId
}) {
  const { open } = countryListManagmentOpen
  const { countries } = useQueryData()

  function hasRelationWithTaiwan (countryId) {
    const countryData = countries.find(
      (country) => country.country_id === countryId
    )

    return countryData.official_relations_eng === 'Taiwan' ?? false
  }

  if (accountsCountry.length === 0 && open) {
    const countryData = countries.find(
      (country) => country.country_id === countrySelectedId
    )
    if (open && hasRelationWithTaiwan(countrySelectedId)) {
      return (
        <div className={open ? 'open' : 'closed'}>
          <CountryCardSelectStyled>
            <p>{countryData.country_name_eng ?? ''}</p>
            <img
              src={getFlag(countryData.country_name_eng)}
              alt={`Bandera de ${countryData.country_name_eng}`}
            />
            <hr />
          </CountryCardSelectStyled>
          <EmptyCardStyled>
            <p>
            This country has diplomatic relations with <br></br>
            the Republic of China (ROC) - Taiwan.
            </p>
          </EmptyCardStyled>
        </div>
      )
    }
    return (
      <div className={open ? 'open' : 'closed'}>
        <CountryCardSelectStyled>
          <p>{countryData?.country_name_eng ?? ''}</p>
          <img
            src={getFlag(countryData.country_name_eng)}
            alt={`Bandera de ${countryData.country_name_eng}`}
          />
          <hr />
        </CountryCardSelectStyled>
        <EmptyCardStyled>
          <p>No accounts or data registered</p>
        </EmptyCardStyled>
      </div>
    )
  }

  return (
    <>
      <div className={open ? 'open' : 'closed'}>
        <div className="dotted-line" />
        {open && (
          <DataTableStyled
            title={
              <CountryCardSelectStyled>
                <p>{accountsCountry[0]?.country_name_eng ?? ''}</p>
                <img
                  src={getFlag(accountsCountry[0].country_name_eng)}
                  alt={`Bandera de ${accountsCountry[0].country_name_eng}`}
                />
                <hr />
              </CountryCardSelectStyled>
            }
            columns={columns}
            data={accountsCountry}
          />
        )}
      </div>
    </>
  )
}
