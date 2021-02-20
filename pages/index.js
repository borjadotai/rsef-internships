import React from 'react'
import Link from 'next/link'
import {Heading, Flex} from '@chakra-ui/react'
import {Container, HomeEntry} from '../components'
import db from '../utils/db'

const Index = ({entriesData}) => {
  return (
    <Container>
      <Heading my={20}>Section for filters</Heading>
      <Flex flexDirection="row" flexWrap="wrap">
        {entriesData.map(entry => (
          <HomeEntry
            key={entry.id}
            id={entry.id}
            title={entry.title}
            description={entry.description}
            educationLevel={entry.educationLevel}
            modality={entry.modality}
            discipline={entry.discipline}
            hasAllowance={entry.hasAllowance}
            allowanceAmount={entry.allowanceAmount}
            language={entry.language}
            duration={entry.duration}
            season={entry.season}
            startDate={entry.startDate}
            endDate={entry.endDate}
            url={entry.url}
          />
        ))}
      </Flex>
    </Container>
  )
}

export const getStaticProps = async () => {
  const entries = await db
    .collection('entries')
    .where('approved', '==', true)
    .orderBy('created', 'desc')
    .get()
  const entriesData = entries.docs.map(entry => ({
    id: entry.id,
    ...entry.data(),
  }))
  return {
    props: {entriesData},
    revalidate: 10,
  }
}

export default Index
