import React from 'react'
import Link from 'next/link'
import {Box, Heading, Flex, Text, Button} from '@chakra-ui/react'

const Header = props => {
  return (
    <Box
      w="full"
      align="center"
      borderBottom="1px solid"
      borderTop="5px solid"
      borderBottomColor="gray.100"
      borderTopColor="green.400"
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding="1rem"
        width={['100vw', '80vw']}
        {...props}
      >
        <Link href="/">
          <a>
            <Heading as="h2" size="xl" isTruncated color="gray.700">
              RSEF
            </Heading>
          </a>
        </Link>
        <Link href="/admin/post">
          <Button colorScheme="green" variant="outline">
            Submit opportunity
          </Button>
        </Link>
      </Flex>
    </Box>
  )
}

export default Header
