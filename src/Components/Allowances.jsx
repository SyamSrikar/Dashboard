import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import FormHelperText from '@mui/material/FormHelperText';
import RadioGroup from '@mui/material/RadioGroup';


const Allowances=(props)=> {

    const style={
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor:'white',
        border: '2px solid #000',
        width:'60%',
        height:'80%',
        display:'flex',
        flexDirection:'column',
        justifyContent:"center",
        alignItems:'center',
        p:2 ,
        overflow:'hidden'
    }

    // const [mopen,setMopen]=useState(true)
    const [submit,setSubmit]=useState(false)
    const [system,setSystem]=useState("");
    const [holidays,setHolidays]=useState("");
    const [welfare,setWelfare]=useState("");
    const [education,setEducation]=useState("");
    const [support,setSupport]=useState("");
    const [hours,setHours]=useState("");
    const [care,setCare]=useState("");
    const [housing,setHousing]=useState("");
    const [family,setFamily]=useState("");
    const [stock,setStock]=useState("");
    const [job,setJob]=useState("");
    const [mentor,setMentor]=useState("");
    const [career,setCareer]=useState("");

    function back(){
        setTimeout(()=> {
            props.setOpen(false)
         }
         ,500);
    }
    
   

    const handle=(e)=>{
        e.preventDefault();
        if(system!="" && holidays!="" && welfare!="" && education!="" && support!="" && hours!="" && care!="" && housing!="" && family!="" && stock!="" && job!="" )
        {props.set({
        system:system,
        holidays:holidays,
        welfare:welfare,
        education:education,
        support:support,
        reducedHours:hours,
        care:care,
        subsidy:housing,
        allowances:family,
        ownership:stock,
        side:job,
        mentor:mentor,
        career: career
        });

        back()
    }

    }
    

  return (
    
    <Modal open={props.open}>
    <form onSubmit={handle}>
    <Box
        sx={style}
    > 
        <Box
        sx={{
          display: 'flex',
          flexDirection:'row',
          justifyContent: 'space-between',
          alignItems:'center',
          m: 0,
          p: 0 ,
          width:'90%'
          }}
        > 
            <h2>Allowances</h2>
            <CloseOutlinedIcon style={{cursor:'pointer'}} onClick={()=>props.setOpen(false)}/>
        </Box>
        
        <Grid  container direction="row" justifyContent="center" alignItems="center" width={'90%'} height={'90%'} overflow={'auto'}>
            <Grid container alignItems="center" width={'100%'} padding={'5px 0px'}>
                <Grid item md={2}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                </Grid>
                    <Grid item md={6}>
                        <FormLabel id="Salary">Salary System Based On Meritocracy</FormLabel>                        
                    </Grid>
                    <Grid item md={4}>
                    <FormControl error={submit && system.length===0 && true} >
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="Foreign-Owned-group"
                            value={system}
                            onChange={(e)=>setSystem(e.target.value)}
                           
                        >
                            <FormControlLabel value="Yes" control={<Radio  required={true}/>} label="Yes" />
                            <FormControlLabel value="No" control={<Radio  required={true} />} label="NO" />
                        </RadioGroup>
                        {submit && system.length===0 && <FormHelperText>This Field is Required</FormHelperText>}
                        </FormControl>
                    </Grid>
            </Grid>
            <Grid container alignItems="center" width={'100%'} padding={'5px 0px'}>
                <Grid item md={2}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                </Grid>
                    <Grid item md={6}>
                        <FormLabel id="Salary">120 Or More Annual Holidays</FormLabel>                        
                    </Grid>
                    <Grid item md={4}>
                    <FormControl error={submit && holidays.length===0 && true} >
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="Foreign-Owned-group"
                            value={holidays}
                            onChange={(e)=>setHolidays(e.target.value)}
                        >
                            <FormControlLabel value="Yes" control={<Radio required={true}/>} label="Yes" />
                            <FormControlLabel value="No" control={<Radio required={true}/>} label="NO" />
                        </RadioGroup>
                        {submit && holidays.length===0 && <FormHelperText>This Field is Required</FormHelperText>}
                        </FormControl>
                    </Grid>
            </Grid>
            <Grid container alignItems="center" width={'100%'} padding={'5px 0px'}>
                <Grid item md={2}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                </Grid>
                    <Grid item md={6}>
                        <FormLabel id="Salary">Generous Welfare Benifits</FormLabel>                        
                    </Grid>
                    <Grid item md={4}>
                    <FormControl error={submit && welfare.length===0 && true} >
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="Foreign-Owned-group"
                            value={welfare}
                            onChange={(e)=>setWelfare(e.target.value)}
                        >
                            <FormControlLabel value="Yes" control={<Radio required={true}/>} label="Yes" />
                            <FormControlLabel value="No" control={<Radio required={true}/>} label="NO" />
                        </RadioGroup>
                        {submit && welfare.length===0 && <FormHelperText>This Field is Required</FormHelperText>}
                        </FormControl>
                    </Grid>
            </Grid>
            <Grid container alignItems="center" width={'100%'} padding={'5px 0px'}>
                <Grid item md={2}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                </Grid>
                    <Grid item md={6}>
                        <FormLabel id="Salary">Enhanced Education And Training</FormLabel>                        
                    </Grid>
                    <Grid item md={4}>
                    <FormControl error={submit && education.length===0 && true} >
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="Foreign-Owned-group"
                            value={education}
                            onChange={(e)=>setEducation(e.target.value)}
                        >
                            <FormControlLabel value="Yes" control={<Radio required={true}/>} label="Yes" />
                            <FormControlLabel value="No" control={<Radio required={true}/>} label="NO" />
                        </RadioGroup>
                        {submit && education.length===0 && <FormHelperText>This Field is Required</FormHelperText>}
                    </FormControl>
                    </Grid>
            </Grid>
            <Grid container alignItems="center" width={'100%'} padding={'5px 0px'}>
                <Grid item md={2}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                </Grid>
                    <Grid item md={6}>
                        <FormLabel id="Salary">Support System For Acquriring Qualification</FormLabel>                        
                    </Grid>
                    <Grid item md={4}>
                    <FormControl error={submit && support.length===0 && true}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="Foreign-Owned-group"
                            value={support}
                            onChange={(e)=>setSupport(e.target.value)}
                        >
                            <FormControlLabel value="Yes" control={<Radio required={true}/>} label="Yes" />
                            <FormControlLabel value="No" control={<Radio required={true}/>} label="NO" />
                        </RadioGroup>
                        {submit && support.length===0 && <FormHelperText>This Field is Required</FormHelperText>}
                        </FormControl>
                    </Grid>
            </Grid>
            <Grid container alignItems="center" width={'100%'} padding={'5px 0px'}>
                <Grid item md={2}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                </Grid>
                    <Grid item md={6}>
                        <FormLabel id="Salary">Reduced Working Hours System</FormLabel>                        
                    </Grid>
                    <Grid item md={4}>
                    <FormControl error={submit && hours.length===0 && true} >
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="Foreign-Owned-group"
                            value={hours}
                            onChange={(e)=>setHours(e.target.value)}
                        >
                            <FormControlLabel value="Yes" control={<Radio required={true}/>} label="Yes" />
                            <FormControlLabel value="No" control={<Radio required={true}/>} label="NO" />
                        </RadioGroup>
                        {submit && hours.length===0 && <FormHelperText>This Field is Required</FormHelperText>}
                        </FormControl>
                    </Grid>
            </Grid>
            <Grid container alignItems="center" width={'100%'} padding={'5px 0px'}>
                <Grid item md={2}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                </Grid>
                    <Grid item md={6}>
                        <FormLabel id="Salary">Maternity Care Leave System</FormLabel>                        
                    </Grid>
                    <Grid item md={4}>
                    <FormControl error={submit && care.length===0 && true}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="Foreign-Owned-group"
                            value={care}
                            onChange={(e)=>setCare(e.target.value)}
                        >
                            <FormControlLabel value="Yes" control={<Radio required={true}/>} label="Yes" />
                            <FormControlLabel value="No" control={<Radio required={true}/>} label="NO" />
                        </RadioGroup>
                        {submit && care.length===0 && <FormHelperText>This Field is Required</FormHelperText>}
                        </FormControl>
                    </Grid>
            </Grid>
            <Grid container alignItems="center" width={'100%'} padding={'5px 0px'}>
                <Grid item md={2}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                </Grid>
                    <Grid item md={6}>
                        <FormLabel id="Salary">Company Housing / Rent Subsidy</FormLabel>                        
                    </Grid>
                    <Grid item md={4}>
                    <FormControl error={submit && housing.length===0 && true} >
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="Foreign-Owned-group"
                            value={housing}
                            onChange={(e)=>setHousing(e.target.value)}
                        >
                            <FormControlLabel value="Yes" control={<Radio required={true}/>} label="Yes" />
                            <FormControlLabel value="No" control={<Radio required={true}/>} label="NO" />
                        </RadioGroup>
                        {submit && housing.length===0 && <FormHelperText>This Field is Required</FormHelperText>}
                        </FormControl>
                    </Grid>
            </Grid>
            <Grid container alignItems="center" width={'100%'} padding={'5px 0px'}>
                <Grid item md={2}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                </Grid>
                    <Grid item md={6}>
                        <FormLabel id="Salary">Family Allowance</FormLabel>                        
                    </Grid>
                    <Grid item md={4}>
                    <FormControl error={submit && family.length===0 && true}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="Foreign-Owned-group"
                            value={family}
                            onChange={(e)=>setFamily(e.target.value)}
                        >
                            <FormControlLabel value="Yes" control={<Radio required={true}/>} label="Yes" />
                            <FormControlLabel value="No" control={<Radio required={true}/>} label="NO" />
                        </RadioGroup>
                        {submit && family.length===0 && <FormHelperText>This Field is Required</FormHelperText>}
                        </FormControl>
                    </Grid>
            </Grid>
            <Grid container alignItems="center" width={'100%'} padding={'5px 0px'}>
                <Grid item md={2}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                </Grid>
                    <Grid item md={6}>
                        <FormLabel id="Salary">Employee Stock Ownership</FormLabel>                        
                    </Grid>
                    <Grid item md={4}>
                    <FormControl error={submit && stock.length===0 && true}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="Foreign-Owned-group"
                            value={stock}
                            onChange={(e)=>setStock(e.target.value)}
                        >
                            <FormControlLabel value="Yes" control={<Radio required={true}/>} label="Yes" />
                            <FormControlLabel value="No" control={<Radio required={true}/>} label="NO" />
                        </RadioGroup>
                        {submit && stock.length===0 && <FormHelperText>This Field is Required</FormHelperText>}
                        </FormControl>
                    </Grid>
            </Grid>
            <Grid container alignItems="center" width={'100%'} padding={'5px 0px'}>
                <Grid item md={2}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                </Grid>
                    <Grid item md={6}>
                        <FormLabel id="Salary">Side Job Available</FormLabel>                        
                    </Grid>
                    <Grid item md={4}>
                    <FormControl error={submit && job.length===0 && true}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="Foreign-Owned-group"
                            value={job}
                            onChange={(e)=>setJob(e.target.value)}
                        >
                            <FormControlLabel value="Yes" control={<Radio required={true}/>} label="Yes" />
                            <FormControlLabel value="No" control={<Radio required={true}/>} label="NO" />
                        </RadioGroup>
                        {submit && job.length===0 && <FormHelperText>This Field is Required</FormHelperText>}
                        </FormControl>
                    </Grid>
            </Grid>
            <Grid container alignItems="center" width={'100%'} padding={'5px 0px'}>
                <Grid item md={2}>
                    {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg> */}
                </Grid>
                    <Grid item md={6}>
                        <FormLabel id="Salary">Mentor System</FormLabel>                        
                    </Grid>
                    <Grid item md={4}>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="Foreign-Owned-group"
                            value={mentor}
                            onChange={(e)=>setMentor(e.target.value)}
                        >
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="NO" />
                        </RadioGroup>
                        </FormControl>
                    </Grid>
            </Grid>
            <Grid container alignItems="center" width={'100%'} padding={'5px 0px'}>
                <Grid item md={2}>
                    {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg> */}
                </Grid>
                    <Grid item md={6}>
                        <FormLabel id="Salary">Career Consulting</FormLabel>                        
                    </Grid>
                    <Grid item md={4}>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="Foreign-Owned-group"
                            value={career}
                            onChange={(e)=>setCareer(e.target.value)}
                        >
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="NO" />
                        </RadioGroup>
                        </FormControl>
                    </Grid>
            </Grid>

            <Grid container direction="row" justifyContent={'center'} width={'90%'} >
                <Grid item>
                    <Button type="Submit" onClick={()=>{setSubmit(true)}} variant="contained">Save</Button>
                </Grid>
            </Grid>
            
        </Grid>
        
    </Box>
    </form>
    </Modal>
    
    )
}

export default Allowances