import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import MetaData from '../../shared/metaData'
import Loader from '../../shared/Loader/loader'
import Layout from '../../shared/layout'
import './profile.scss'

import { Button } from '@mui/material'

const Profile = () => {


    const { user, loading } = useSelector(state => state.auth);

  return (
    <React.Fragment>
        <Layout>
    {loading ? <Loader /> : (
        <React.Fragment>
            <MetaData title={'Your Profile'} />
            <h2 style={{marginLeft:'5rem', marginTop:"4rem"}}> </h2>
                    <div className="user-info" >
                        <div className="col-12 col-md-3">
                            <figure className='avatar avatar-profile'  style={{marginLeft:'5rem'}}>
                                <img className="rounded-circle img-fluid" src={user.avatar.url} alt={user.name} />
                            </figure>
                            <Link to="/me/update" >
                                <Button color='secondary' style={{marginLeft:'8rem'}}>
                                Editer le profil
                                </Button>
                            </Link>
                        </div>

                        <div className="col-12 col-md-6">
                            <h4 style={{marginLeft:'1rem'}}>Prénom</h4>
                            <p style={{marginLeft:'1rem'}}>{user.fname}</p>
                            <h4 style={{marginLeft:'1rem'}}>Nom</h4>

                            <p style={{marginLeft:'1rem'}}>{user.lname}</p>
                            
                            <h4 style={{marginLeft:'1rem'}}>Pays</h4>

                            <p style={{marginLeft:'1rem'}}>{user.country}</p>

                            <h4 style={{marginLeft:'1rem'}}>Adresse E-mail</h4>
                            <p style={{marginLeft:'1rem'}}>{user.email}</p>

                            <h4 style={{marginLeft:'1rem'}}>Inscrit le</h4>
                            <p style={{marginLeft:'1rem'}}>{String(user.createdAt).substring(0, 10)}</p>
                            <br />
                            <br />

                           
                                <Link to="#" >
                                    <Button variant="contained" color='secondary'>
                                    Mes Réservations
                                    </Button>
                                </Link>
                                <br />
                            <br />
                            <br />
                            <Link to="/password/update" >
                                <Button variant="contained" color='secondary'>
                                changer le mot de passe
                                </Button>
                            </Link>
                        </div>
                    </div>
                 
        </React.Fragment>
    )}     
    </Layout>
    </React.Fragment>
  )
}

export default Profile