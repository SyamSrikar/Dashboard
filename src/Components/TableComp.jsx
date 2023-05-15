import {React, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

const TableComp=(props)=> {

  useEffect(()=>{console.log(props.data)},[])

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableBody style={{ backgroundColor:"white"}}>
          {props.data?.map((row) => (
            row.value!= "" && <TableRow key={row.name}>
              <TableCell component="th" scope="row" style={{width:'50%',color:'black', backgroundColor:"#f7f7f7"}}>
                {row.name}
              </TableCell>
              <TableCell style={{color:row.value==='Yes'?'green':row.value==='No'?'red':'black'}}  align="left">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComp