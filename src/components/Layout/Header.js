import React ,{useState}from 'react'
import { AppBar, Typography,Box, Toolbar, IconButton,Drawer,Divider} from '@mui/material'
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {Link} from 'react-router-dom'
import '../../styles/HeaderStyles.css'

const Header = () => {
  const [mobileOpen,setMobileOpen]=useState(false)
  const handleDrawerToggle = ()=>{
    setMobileOpen(!mobileOpen)
  }

  //menu drawer
  const drawer=(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
<Typography color={'goldenrod'} variant="h6" component="div" sx={{flexGrow:1}}> 
          <LocalDiningIcon/>
          My Restraunt
        </Typography>
        <Divider/>
          <ul className="mobile-navigation">
            <li>
              <Link className='litagg' to={"/"}>Home</Link>
            </li>
            <li>
              <Link className='litagg' to={"/about"}>About</Link>
            </li>
            <li>
              <Link className='litagg' to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link className='litagg' to={"/menu"}>Menu</Link>
            </li>
          </ul>

    </Box>
  )
  return (
    <>
    <Box>
      <AppBar component={'nav'} sx={{bgcolor:"black"}}>
        <Toolbar>
          <IconButton 
          color= "goldenrod"
           arial-label="open drawer"
            edge="start"
             sx={{mr:2 ,
             display:{sm:"none"}
             ,}}
             onClick={handleDrawerToggle}
              >
          <MenuBookIcon/>
          </IconButton>
        <Typography color={'goldenrod'} variant="h6" component="div" sx={{flexGrow:1,my:2}}> 
          <LocalDiningIcon/>
          My Restraunt
        </Typography>
        <Box sx={{display:{xs:'none',sm:'block'}}}>
          <ul className="navigation-menu">
            <li>
              <Link className='litag' to={"/"}>Home</Link>
            </li>
            <li>
              <Link className='litag' to={"/about"}>About</Link>
            </li>
            <li>
              <Link className='litag' to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link className='litag' to={"/menu"}>Menu</Link>
            </li>
          </ul>

        </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
              <Drawer variant="temporary" open={mobileOpen}
               onClose={handleDrawerToggle}
               sx={{display:{xs:'block',sm:'none'},"&.MuiDrawer-paper":{
              boxSizing:"border-box",
            width:"240px"},
          }}
               >
                {drawer}
              </Drawer>
      </Box>
      <Box>
      <Toolbar />
      </Box>
     
    </Box>
    </>
  )
}

export default Header