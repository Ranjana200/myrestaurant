import React from 'react'
import Layout from '../components/Layout/Layout'
import {Box, Typography} from '@mui/material'

const About = () => {
  return (
    <Layout>
        <Box sx={{my:15,
        textAlign:'center',
        p:4,
        "& h4":{
          fontWeight:"bold",
          my:2,
          fontSize:'2rem',
        },
        "& p" :{
          textAlign:'justify'
        },
        "@media(max-width:600)":{
          mt:0,
          "& h4":{
            fontSize:"1.5rem"
          }
        }
        }}>
          <Typography variant="h4">
            Welcome to my restaurant
          </Typography>
          <p>
          Walking into a restaurant with an aesthetic environment and good food is a feast for the senses. The atmosphere of the restaurant is immediately inviting, with warm lighting and a cozy ambiance that sets the mood for a great dining experience. The decor is tastefully designed, with attention paid to every detail, from the artwork on the walls to the arrangement of the tables. The menu is equally impressive, offering a wide variety of delicious dishes that are beautifully presented. Each dish is crafted with care and precision, using fresh, high-quality ingredients that burst with flavor. From the first bite to the last, the food is a true delight, leaving guests feeling satisfied and eager to return. The combination of the restaurant's aesthetic environment and good food creates an experience that is both memorable and enjoyable.
          </p>
          <br/>
          <p>
            

The service provided by a restaurant can make or break a dining experience, and a good restaurant knows this well. From the moment guests step through the door, they are greeted by friendly and attentive staff who are eager to assist with any request. Throughout the meal, servers are attentive without being overbearing, ensuring that guests' needs are met and that their dining experience is a pleasant one. They are knowledgeable about the menu and able to provide recommendations for dishes or drinks. In addition, they are quick to address any concerns or issues that may arise, and strive to make each guest feel valued and cared for. The service provided by a restaurant is an important part of the overall dining experience, and a restaurant that prioritizes good service is sure to leave a lasting impression on their guests.
          </p>
        </Box>
        </Layout>
  )
}

export default About