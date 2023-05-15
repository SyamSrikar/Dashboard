import React from 'react'
import Heading from './Heading';
import TableComp from './TableComp';
import Grid from '@mui/material/Grid';

const Template=(props)=> {

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" width={'100%'} padding={'30px 0px'}>
        <Grid item md={12}>
            <Heading headingVal={props.heading} setState={props.y}/>
        </Grid>
        <Grid item md={12}>
            <TableComp data={props.data}/>
        </Grid>
    </Grid>

  )
}

export default Template