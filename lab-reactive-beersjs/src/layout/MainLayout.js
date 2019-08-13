import React from 'react'
import Nav from '../components/Nav'

export default function MainLayout(props) {
  return (
<>
    <Nav />
    {props.children}
</>
  )
}
