import React from 'react'
import Layout from '../components/Layout/Layout'
import {Box, Typography} from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  return (
    <Layout>
        <Box sx={{my:25,ml:10,"& h4":{fontWeight:'bold',mb:2,"@media (max-width:600px)":{
          width:'300px'
        }, }}}>
          <Typography variant='h4'>
            Contact my restaurant
            </Typography>
            <p>
            If any issues are found during a dining experience at a restaurant, it is important to contact the restaurant and make them aware of the situation.So please feel free to contact us <PhoneIcon/>
            9845234823
            </p>
          
        </Box>
        </Layout>
  )
}

export default Contact