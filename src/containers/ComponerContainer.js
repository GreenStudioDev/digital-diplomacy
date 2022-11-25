import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ButtonToogle from '../components/ButtonToogle'
import { CollapsableTableStyled } from '../styles/styledComponents/CollapsableTableStyled'
import { TableContext } from '../context/InitialState'

import HtMostUsedItems from './HtMostUsed'
import MonthlyTweetsItems from './MonthlyTweets'
import MostMentionedItems from './MostMentioned'
import MostRepliedItems from './MostReplied'
import MostRetweetedItems from './MostRetweeted'

ComponentContainer.propTypes = {
  usuario: PropTypes.bool.isRequired,
  open: PropTypes.bool
}

export default function ComponentContainer ({ usuario, open }) {
  const [dataComparing] = useContext(TableContext)
  const { categories, accounts, periodComparison, isPeriodComparisonActive } =
    dataComparing
  const { accountIdA, accountIdB } = accounts
  const { periodA, periodB } = periodComparison

  if (isPeriodComparisonActive) {
    if (periodA.id === periodB.id) {
      return []
    } else if (periodA.id > periodB.id) {
      return []
    }
  } else if (
    accountIdA.id === '' ||
    accountIdB.id === '' ||
    accountIdA.id === accountIdB.id
  ) {
    return []
  }

  return (
    <>
      {categories.monthlyTweets && (
        <CollapsableTableStyled>
          <ButtonToogle name="monthy-tweets" open={open}>
            {isPeriodComparisonActive
              ? ` Number of tweets per month from ${periodA.name} to ${periodB.name} periods`
              : ` Number of tweets per month of the ${accountIdA.name} and ${accountIdB.name} accounts`}
          </ButtonToogle>

          <MonthlyTweetsItems context={dataComparing} />

        </CollapsableTableStyled>
      )}
      {categories.mostRetweeted && (
        <CollapsableTableStyled className='comparative'>
          <ButtonToogle name="most-retweet" open={open}>
            {isPeriodComparisonActive
              ? `Usuarios más retuiteados del periodo ${periodA.name} al ${periodB.name}`
              : `Most retweeted users of ${accountIdA.name} and ${accountIdB.name} accounts`}
          </ButtonToogle>

          <MostRetweetedItems context={dataComparing} usuario={usuario} />

        </CollapsableTableStyled>
      )}
      {categories.mostReplied && (
        <CollapsableTableStyled>
          <ButtonToogle name="most-replied" open={open}>
            {isPeriodComparisonActive
              ? `Usuarios que más han recibido respuesta del periodo ${periodA.name} al ${periodB.name}`
              : `Most replied users of ${accountIdA.name} and ${accountIdB.name} accounts`}
          </ButtonToogle>

          <MostRepliedItems usuario={usuario} context={dataComparing} />

        </CollapsableTableStyled>
      )}
      {categories.mostHashtags && (
        <CollapsableTableStyled>
          <ButtonToogle name="most-ht" open={open}>
            {isPeriodComparisonActive
              ? `Hashtags más usados del periodo ${periodA.name} al ${periodB.name}`
              : `Most used Hashtags from ${accountIdA.name} and ${accountIdB.name} accounts`}
          </ButtonToogle>

          <HtMostUsedItems
            period={dataComparing.period}
            usuario={usuario}
            context={dataComparing}
          />

        </CollapsableTableStyled>
      )}
      {categories.mostMentioned && (
        <CollapsableTableStyled>
          <ButtonToogle name="most-mentioned" open={open}>
            {isPeriodComparisonActive
              ? `Usuarios más mencionados del periodo ${periodA.name} al ${periodB.name}`
              : `Most mentioned users of ${accountIdA.name} and ${accountIdB.name} accounts`}
          </ButtonToogle>

          <MostMentionedItems usuario={usuario} context={dataComparing} />

        </CollapsableTableStyled>
      )}
    </>
  )
};
