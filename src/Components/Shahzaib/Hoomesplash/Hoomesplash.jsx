import React from 'react'
import './Hoomesplash.scss'
import splash from '../../../Images/splash.png'
import logo from '../../../Images/White.png'
const Hoomesplash = () => {
  return (
    <div className='splash_main'>
<img src={splash}  className='splash_1'/>
<img src={splash} className='splash_2' />
<div className="polygon">

<div className="polygon_content">


    <img className='logo' src={logo}/>
    <div className="poly_para">
    Hoome create engaging applications using mobile and web technologies.
     Bringing together location services, augmented and virtual worlds, digital commerce,
     and experience design.
    </div>

    <div className="poly_title">
    Innovative<br/>
Creative<br/>
Solutions
    </div>


</div>

</div>
    </div>
  )
}

export default Hoomesplash