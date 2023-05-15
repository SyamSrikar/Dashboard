import React from 'react'
import Box from '@mui/material/Box'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

const Heading=(props) =>{
  return (

        <Box
        sx={{
          display: 'flex',
          flexDirection:'row',
          justifyContent: 'space-between',
          backgroundColor:'#d7d0ff',
          m: 0,
          p: 1,
          borderRadius:1,
          paddingX:3 }}
        > 
        <div style={{color:'#27187c',backgroundColor:'#d7d0ff',paddingLeft:'10px',borderLeft:'3px solid #27187c',outline:'none'}} >
            {props.headingVal}
        </div>
        <BorderColorOutlinedIcon onClick={()=>{props.setState(true);}} variant="outline" style={{cursor:'pointer',color:'#27187c'}}/>

      </Box>

  )
}

export default Heading