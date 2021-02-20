import Image from 'next/image'
import Link from 'next/link'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Flex,
  Divider,
} from '@chakra-ui/react'
import {CalendarIcon} from '@chakra-ui/icons'

const HomeEntry = props => {
  return (
    <Box mr={6}>
      <Link href={`/posts/${props.id}`}>
        <a>
          <Box
            maxW="350px"
            w="full"
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
          >
            <Box
              h={'210px'}
              bg={'gray.100'}
              mt={-6}
              mx={-6}
              mb={6}
              pos={'relative'}
            >
              <Image
                src={
                  props.image ||
                  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                }
                layout={'fill'}
              />
            </Box>
            <Stack>
              <Text
                color={'green.500'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}
              >
                {props.location || 'Remote'}
              </Text>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'xl'}
                fontFamily={'body'}
                mb={3}
              >
                {props.title || 'Untitled Entry'}
              </Heading>
              <Divider mb={3} />
              <Flex
                direction="row"
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <Flex
                  direction="row"
                  justifyContent="center"
                  align="center"
                  mr={3}
                >
                  <CalendarIcon />
                  <Text ml={2}>
                    <b>Start Date:</b> {props.startDate || 'TBC'}
                  </Text>
                </Flex>
                <Flex
                  direction="row"
                  justifyContent="center"
                  align="center"
                  mr={3}
                >
                  <CalendarIcon />
                  <Text ml={2}>
                    <b>End Date:</b> {props.endDate || 'TBC'}
                  </Text>
                </Flex>
              </Flex>
            </Stack>
          </Box>
        </a>
      </Link>
    </Box>
  )
}

export default HomeEntry
