import React from 'react'
import './becomeaccount.scss'

import Button from '@mui/material/Button'

const BecomeAccount = () => {
  return (
    <React.Fragment>
<br/>
<br/>
<br />
<section class="hero is-medium is-link adventurer-hero">
  <div class="hero-body">
    <p class="title">
    BECOME AN <br/>
    ADVENTURER
    </p>
    <p class="subtitle">
    <Button variant="contained" color="secondary">
    SIGN UP NOW
    </Button>
    </p>
  </div>
</section>
<br/>
<section class="hero is-medium is-link merchant-hero">
  <div class="hero-body">
    <p class="title">
    BECOME A <br/>
    MERCHANT
    </p>
    <p class="subtitle">
    <Button variant="contained" color="secondary">
    SIGN UP NOW
    </Button>
    </p>
  </div>
</section>
<br />
<section class="hero is-medium is-link host-hero">
  <div class="hero-body">
    <p class="title">
    BECOME A <br/>
    HOST
    </p>
    <p class="subtitle">
    <Button variant="contained" color="secondary">
    SIGN UP NOW
    </Button>
    </p>
  </div>
</section>
<br/>

   


    </React.Fragment>
  )
}

export default BecomeAccount