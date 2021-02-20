import Image from 'next/image'
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
  Icon,
  Link,
  Button,
} from '@chakra-ui/react'
import {CalendarIcon, SunIcon} from '@chakra-ui/icons'
import {GiReceiveMoney} from 'react-icons/gi'
import {FaUniversity} from 'react-icons/fa'
import {IoLanguage} from 'react-icons/io5'
import {MdAccessTime} from 'react-icons/md'

function formatDate(input) {
  var datePart = input.match(/\d+/g),
    year = datePart[0].substring(2), // get only two digits
    month = datePart[1],
    day = datePart[2]

  return day + '/' + month + '/' + year
}

const Line = ({icon, label, value}) => (
  <Flex direction="row" justifyContent="center" align="center" mr={3}>
    {icon}
    <Text ml={2}>
      <b>{label}:</b> {value}
    </Text>
  </Flex>
)

const HomeEntry = props => {
  return (
    <Box mr={6}>
      <Box
        maxW="550px"
        w="full"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'xl'}
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
          <Flex flexDir="row">
            <Text
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}
            >
              {props.location || 'Remote'}
            </Text>
            <Text
              color={'gray.500'}
              fontWeight={600}
              textTransform={'uppercase'}
              fontSize={'sm'}
              letterSpacing={1.1}
            >
              {`• ${props.educationLevel} • ${props.modality}`}
            </Text>
          </Flex>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'xl'}
            fontFamily={'body'}
          >
            {props.title || 'Untitled Entry'}
          </Heading>
          <Text color={'gray.500'} mb={3}>
            {props.description}
          </Text>
          <Divider mb={3} />
          <Flex direction="row" justifyContent="space-between" flexWrap="wrap">
            <Line
              icon={<Icon as={FaUniversity} />}
              label="Discipline"
              value={props.discipline}
            />
            <Line
              icon={<Icon as={IoLanguage} />}
              label="Languages"
              value={props.language}
            />
            <Line
              icon={<Icon as={MdAccessTime} />}
              label="Duration"
              value={props.duration}
            />
            <Line
              icon={<CalendarIcon />}
              label="Opening date"
              value={formatDate(props.startDate)}
            />
            <Line
              icon={<CalendarIcon />}
              label="Closing date"
              value={formatDate(props.endDate)}
            />
            <Line icon={<SunIcon />} label="Season" value={props.season} />
            <Line
              icon={<Icon as={GiReceiveMoney} />}
              label="Allowance"
              value={
                props.hasAllowance === 'Monthly allowance'
                  ? `${props.allowanceAmount}€ per month`
                  : props.hasAllowance === 'One-time allowance'
                  ? props.allowanceAmount
                  : 'No allowance'
              }
            />
          </Flex>
        </Stack>
        <Divider my={3} />
        <Flex justifyContent="center" alignItems="center" pt={2}>
          <Button>Apply to this internship</Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default HomeEntry
