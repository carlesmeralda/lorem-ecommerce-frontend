import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { RiShoppingCartLine } from 'react-icons/ri'
import { HiOutlineUser } from 'react-icons/hi'
import { FiHeart, FiSearch } from 'react-icons/fi'

export const NavDiv = styled.div`
  margin: 0 0.5em;
  cursor: pointer;
  display: flex;
`

export const NavActionLink = styled(Link)`
  color: #222;
  display: flex;
`

export const NavCart = styled(RiShoppingCartLine)``

export const NavProfile = styled(HiOutlineUser)``

export const NavFavorite = styled(FiHeart)``

export const NavSearch = styled(FiSearch)``
