import React from 'react'
import './becomeaccount.scss'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'

const BecomeAccount = () => {
  const alert = useAlert()
  const { user } = useSelector(state => state.auth);

const OnClick = () => {
  alert.error("You are already connected");
  alert.error("Logout first");

}
 

  return (
    <React.Fragment>
<br/>
<br/>
<br />
<section class="hero is-medium is-link adventurer-hero">
  <div class="hero-body">
    <p class="title">
      <h2>
      BECOME AN <br/>
    ADVENTURER

      </h2>
   
    </p>
    <p class="subtitle">
    { user ? 
     <Link to="/become-account"><Button variant="contained" color="secondary" onClick={OnClick}>
    <h3>SIGN UP NOW</h3>
    </Button>
    </Link>
    :
    <>
     <Link to="/signup"><Button variant="contained" color="secondary">
    <h3>SIGN UP NOW</h3>
    </Button>
    </Link>
    </>
}
    </p>
  </div>
</section>
<br/>
<section class="hero is-medium is-link merchant-hero">
  <div class="hero-body">
    <p class="title">
      <h2>
      BECOME A <br/>
    MERCHANT

      </h2>
  
    </p>
    <p class="subtitle">
    { user ? 
     <Link to="/become-account"><Button variant="contained" color="secondary"  onClick={OnClick}>
    <h3>SIGN UP NOW</h3>
    </Button>
    </Link>
    :
    <>
     <Link to="/become-trader"><Button variant="contained" color="secondary">
     <h3>SIGN UP NOW</h3>
    </Button>
    </Link>
    </>
}
    </p>
  </div>
</section>
<br />
<section class="hero is-medium is-link host-hero">
  <div class="hero-body">
    <p class="title">
      <h2>
      BECOME A <br/>
    HOST
        
      </h2>
  
    </p>
    <p class="subtitle">
    { user ? 
     <Link to="/become-account"><Button variant="contained" color="secondary"  onClick={OnClick}>
   <h3>SIGN UP NOW</h3>
    </Button>
    </Link>
    :
    <>
     <Link to="/become-host"><Button variant="contained" color="secondary">
     <h3>SIGN UP NOW</h3>
    </Button>
    </Link>
    </>
}
    </p>
  </div>
</section>
<br/>

   


    </React.Fragment>
  )
}

export default BecomeAccount