import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'

import useStyles from './styles' 

const Header = () => {

   const classes = useStyles()

   return (
      <AppBar position='static'>
         <Toolbar className={classes.toolbar}>
            <Typography variant='h5' className={classes.title}>
                  Travel Adviser
            </Typography>
            <Box display='flex'>
               {/* <Autocomplete> */}
                  <div className={classes.search}>
                     <div className={classes.searchIcon}>
                        <SearchIcon/>
                     </div>
                     <InputBase placeholder='Search...' classes={{ root: classes.InputRoot, input: classes.inputInput }} />
                  </div>
               {/* </Autocomplete> */}
            </Box>
         </Toolbar>
      </AppBar>
   )
}

export default Header