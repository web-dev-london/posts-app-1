import { HStack, ListItem, UnorderedList } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { MdOutlineLocalPostOffice } from 'react-icons/md'


const links = [
  {
    name: 'Dashboard',
    href: '/'
  },
  {
    name: 'Posts',
    href: '/posts'
  }
]

const NavBar = () => {

  const listItems = links.map((link) => {
    return (
      <ListItem key={link.name}>
        <Link href={link.href}>{link.name}</Link>
      </ListItem>
    )
  })

  return (
    <>
      <HStack
        spacing={8}
        borderBottom={'1px'}
        borderBottomColor={'gray.200'}
        px={5}
        h={'60px'}
      >
        <Link href="/">
          <MdOutlineLocalPostOffice size={30} />
        </Link>
        <UnorderedList
          listStyleType="none"
          ml={0}
          display={'flex'}
          gap={5}
        >
          {listItems}
        </UnorderedList>
      </HStack>
    </>
  )
}

export default NavBar
