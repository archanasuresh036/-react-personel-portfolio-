import React from 'react'
import{Instagram,Facebook,LinkedIn} from "@mui/icons-material"
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagram/>
            <Facebook/>
            <LinkedIn/>

        </div>
        <p> &copy; 2022 abc.app</p>

    </div>
  )
}

export default Footer