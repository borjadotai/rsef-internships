import React from 'react'
import {Box, Heading, Flex, Text, Button, Link} from '@chakra-ui/react'

const Footer = props => {
  return (
    <Box
      w="full"
      align="center"
      borderTop="1px solid"
      borderTopColor="gray.100"
      padding={4}
      mt={7}
    >
      <Text color="gray.500">
        Created by{' '}
        <Link href="https://borja.ai" color="teal" isExternal>
          @borja
        </Link>{' '}
        for the Real Sociedad Española de Física
      </Text>
    </Box>
  )
}

export default Footer
