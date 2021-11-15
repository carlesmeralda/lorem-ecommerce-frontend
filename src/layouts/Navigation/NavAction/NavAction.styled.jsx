import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { RiShoppingCartLine } from 'react-icons/ri'
import { HiOutlineUser } from 'react-icons/hi'
import { FiHeart, FiSearch } from 'react-icons/fi'

export const NavDiv = styled.div`
  margin: 0 0.3em;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (min-width: 500px) {
    margin: 0 0.5em;
  }
`

export const NavActionLink = styled(Link)`
  color: #222;
  display: flex;
  position: relative;
`

export const NavCart = styled(RiShoppingCartLine)``

export const NavProfile = styled(HiOutlineUser)``

export const NavFavorite = styled(FiHeart)``

export const NavSearch = styled(FiSearch)``

export const NavSearchDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  height: 100%;
  width: 60%;

  @media screen and (min-width: 500px) {
    margin: 0 0.5em;
  }
`

export const NavSearchForm = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  height: 60%;
  width: 50%;
  flex: 3;
`

export const NavSearchInput = styled.input`
  font-family: 'Quicksand', sans-serif;
  height: 100%;
  width: 100%;
  outline: none;
  border: 1px solid #ddd;
  transition: 0.5s;
  padding-left: 0.8rem;
`

export const NavSearchButton = styled.button`
  height: 100%;
  border: none;
  background-color: #fbc02d;
  color: #222;
  cursor: pointer;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
`

export const NavCount = styled.span`
  position: absolute;
  bottom: -3px;
  right: -2px;
  font-size: 11px;
  border-radius: 50%;
  background-color: #940d0d;
  height: 13px;
  width: 15px;
  color: white;
  text-align: center;
`
