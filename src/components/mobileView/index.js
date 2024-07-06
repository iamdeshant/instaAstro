import React from 'react'
import Header from './header/HeaderMobile.js'
import ButtonSection from './buttonSection/ButtonSection.js'
import MainSection from './mainSection/MainSection.js'


const MobileView = () => {
  return (
    <div style={{maxWidth: '375px', margin: '10px auto 0'}}>
        <Header/>
        <ButtonSection/>
        <MainSection/>
    </div>
  )
}

export default MobileView