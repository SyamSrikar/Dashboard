import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FormControl, InputLabel,TextField ,Button} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';


const Register=(props)=> {

    const [submit,setSubmit]=useState(false)
    const [desc,setDesc]=useState("")
    const [philosophy,setPhilosophy]=useState("")
    const [name,setName]=useState("")
    const [industry,setIndustry]=useState("")
    const [mail,setMail]=useState("")
    const [number,setNumber]=useState("")
    const [location,setLocation]=useState("")
    const [website,setWebsite]=useState("")
    const [hours,setHours]=useState("")
    const [date,setDate]=useState("")
    const [capital,setCapital]=useState("")
    const [repr,setRepr]=useState("")
    const [branch,setBranch]=useState("")
    const [numEmp,setNumEmp]=useState("")
    const [revenue,setRevenue]=useState("")
    const [profit,setProfit]=useState("")
    const [age,setAge]=useState("")
    const [stock,setStock]=useState("")
    const [linkedin,setLinkedin]=useState("")
    const [twitter,setTwitter]=useState("")
    const [facebook,setFacebook]=useState("")
    const [insta,setInsta]=useState("")
    const [utube,setUtube]=useState("")
    const [owned,setOwned]=useState("")

    function back(){
        setTimeout(()=> {
            props.open(false)
         }
         ,500);
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.setCorpInfo({
        businessDescription:desc,
        corporatePhilosophy:philosophy,
        companyName:name,
        mailId:mail,
        phoneNumber:number,
        Location:location,
        workingHours:hours,
        establishmentDate:date,
        initialCapital:capital,
        representative:repr,
        branch:branch,
        numberOfEmployees:numEmp,
        salesRevenue:revenue,
        operationProfit:profit,
        age:age,
        stock:stock,
        linkedIn:linkedin,
        twitter:twitter,
        facebook:facebook,
        instagram:insta,
        youtube:utube,
        owned:owned
        });
        back();

    }  
    
  return (
    <Box sx={{margin:'80px 40px' }}>
        <Button onClick={()=>props.open(false)} variant="contained" style={{position:'absolute',top:'30px',right:'10%'}} >Close</Button>
        <form onSubmit={handleSubmit}>
            <Grid container direction="row" style={{marginBottom:'50px'}} >
                <Grid container md={6} style={{width:'100%'}}>
                    <Box
                        sx={{
                        display: 'flex',
                        width:'100%',
                        flexDirection:'row' }}> 
                        <FormControl  style={{width:'100%'}}>
                        <InputLabel htmlFor="business"  shrink>
                            Business Description 
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                        </InputLabel><br/>
                        <TextField
                            id="business"
                            style={{width:'90%'}}
                            multiline
                            rows={4}
                            value={desc}
                            onChange={(e)=>setDesc(e.target.value)}
                            required
                            error={submit && desc.length===0 && 'true'}
                            helperText={submit && desc.length===0 && 'This Field is required'}
                        />
                        </FormControl>
                    </Box>
                </Grid>
                <Grid container md={6}style={{width:'100%'}} >
                    <Box
                        sx={{
                        display: 'flex',
                        width:'100%',
                        flexDirection:'row' }}> 
                        <FormControl style={{width:'100%'}}>
                        <InputLabel htmlFor="philosophy "  shrink>
                            Corporate Philosophy
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                        </InputLabel><br/>
                        <TextField
                            id="philosophy"
                            multiline
                            style={{width:'90%'}}
                            rows={4}
                            value={philosophy}
                            onChange={(e)=>setPhilosophy(e.target.value)}
                            required
                            error={submit && philosophy.length===0 && 'true'}
                            helperText={submit && philosophy.length===0 && 'This Field is required'}
                        />
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            <Grid container direction="row" gap={0}   style={{width:'100%'}}>
                <Grid item md={4} style={{width:'100%'}}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                        <InputLabel htmlFor="ComapanyName"  shrink>
                            Company Name
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                        </InputLabel><br/>
                        <TextField
                            id="CompanyName"
                            style={{width:'100%'}}
                            error={submit && name.length===0 && 'true'}
                            required
                            helperText={submit && name.length===0 && 'This Field is required'}
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                        <InputLabel htmlFor="Industry"  shrink>
                            Industry
                        </InputLabel><br/>
                        <TextField
                            id="Industry"
                            style={{width:'100%'}}                            
                            value={industry}
                            onChange={(e)=>setIndustry(e.target.value)}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                        <InputLabel htmlFor="MailId" type="email"  shrink>
                            Mail ID
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>
                        </InputLabel><br/>
                        <TextField
                            id="MailId"
                            style={{width:'100%'}}                            
                            value={mail}
                            type="email"
                            onChange={(e)=>setMail(e.target.value)}
                            required
                            error={submit && mail.length===0 && 'true'}
                            helperText={submit && mail.length===0 && 'This Field is required'}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                        <InputLabel htmlFor="Phone" type="number"  shrink>
                            Phone Number
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>

                        </InputLabel><br/>
                        <TextField
                            id="Phone"
                            style={{width:'100%'}}   
                            type="number"                         
                            value={number}
                            onChange={(e)=>setNumber(e.target.value)}
                            required
                            error={submit && number.length===0 && 'true'}
                            helperText={submit && number.length===0 && 'This Field is required'}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                        <InputLabel htmlFor="Location"  shrink>
                            Location
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>

                        </InputLabel><br/>
                        <TextField
                            id="Location"
                            style={{width:'100%'}}                            
                            value={location}
                            onChange={(e)=>setLocation(e.target.value)}
                            required
                            error={submit && location.length===0 && 'true'}
                            helperText={submit && location.length===0 && 'This Field is required'}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                        <InputLabel htmlFor="Website"  shrink>
                            Website
                        </InputLabel><br/>
                        <TextField
                            id="Website"
                            style={{width:'100%'}}                            
                            value={website}
                            onChange={(e)=>setWebsite(e.target.value)}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                        <InputLabel htmlFor="Hours"  shrink>
                            Working Hours
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>

                        </InputLabel><br/>
                        <TextField
                            id="Hours"
                            style={{width:'100%'}}                            
                            value={hours}
                            required
                            onChange={(e)=>setHours(e.target.value)}
                            error={submit && hours.length===0 && 'true'}
                            helperText={submit && hours.length===0 && 'This Field is required'}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                        <InputLabel htmlFor="EstDate"  shrink>
                            Establishment Date
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>

                        </InputLabel><br/>
                        <TextField
                            id="EstDate"
                            type="date"
                            style={{width:'100%'}}                            
                            value={date}
                            onChange={(e)=>setDate(e.target.value)}
                            required
                            error={submit && date.length===0 && 'true'}
                            helperText={submit && date.length===0 && 'This Field is required'}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                        <InputLabel htmlFor="Capital"  shrink>
                            Initial Capital
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>

                        </InputLabel><br/>
                        <TextField
                            id="Capital"
                            style={{width:'100%'}}                            
                            value={capital}
                            onChange={(e)=>setCapital(e.target.value)}
                            required
                            error={submit && capital.length===0 && 'true'}
                            helperText={submit && capital.length===0 && 'This Field is required'}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                        <InputLabel htmlFor="Representative"  shrink>
                            Representative
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>

                        </InputLabel><br/>
                        <TextField
                            id="Representative"
                            style={{width:'100%'}}                            
                            value={repr}
                            onChange={(e)=>setRepr(e.target.value)}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                        <InputLabel htmlFor="Branch"  shrink>
                            Branch
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>

                        </InputLabel><br/>
                        <TextField
                            id="Branch"
                            style={{width:'100%'}}                            
                            value={branch}
                            onChange={(e)=>setBranch(e.target.value)}
                            required
                            error={submit && branch.length===0 && 'true'}
                            helperText={submit && branch.length===0 && 'This Field is required'}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                        <InputLabel htmlFor="Employees"  shrink>
                            Number Of Employees
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>

                        </InputLabel><br/>
                        <TextField
                            id="Employees"
                            type="number" 
                            style={{width:'100%'}}                            
                            value={numEmp}
                            onChange={(e)=>setNumEmp(e.target.value)}
                            required
                            error={submit && numEmp.length===0 && 'true'}
                            helperText={submit && numEmp.length===0 && 'This Field is required'}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                        <InputLabel htmlFor="Revenue"  shrink>
                            Sales Revenue
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>

                        </InputLabel><br/>
                        <TextField
                            id="Revenue"
                            style={{width:'100%'}}                            
                            value={revenue}
                            onChange={(e)=>setRevenue(e.target.value)}
                            type="number"
                            required
                            error={submit && revenue.length===0 && 'true'}
                            helperText={submit && revenue.length===0 && 'This Field is required'}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                        <InputLabel htmlFor="Profit"  shrink>
                            Operational Profit
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="red" font-size="15px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color:"red"}}><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"></path></svg>

                        </InputLabel><br/>
                        <TextField
                            id="Profit"
                            style={{width:'100%'}}                            
                            value={profit}
                            onChange={(e)=>setProfit(e.target.value)}
                            required
                            error={submit && profit.length===0 && 'true'}
                            helperText={submit && profit.length===0 && 'This Field is required'} 
                            type="number"
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                        <InputLabel htmlFor="Age"  shrink>
                            Average Age Of Employees
                        </InputLabel><br/>
                        <TextField
                            id="Age"
                            style={{width:'100%'}}                            
                            value={age}
                            onChange={(e)=>setAge(e.target.value)}
                            type="number"
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                        <InputLabel htmlFor="Stock"  shrink>
                            Stock
                        </InputLabel><br/>
                        <TextField
                            id="Stock"
                            style={{width:'100%'}}                            
                            value={stock}
                            onChange={(e)=>setStock(e.target.value)}
                            type="number"
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                        <InputLabel htmlFor="LinkedIn"  shrink>
                            LinkedIn Link
                        </InputLabel><br/>
                        <TextField
                            id="LinkedIn"
                            style={{width:'100%'}}                            
                            value={linkedin}
                            onChange={(e)=>setLinkedin(e.target.value)}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                        <InputLabel htmlFor="Twitter"  shrink>
                            Twitter Link
                        </InputLabel><br/>
                        <TextField
                            id="Twitter"
                            style={{width:'100%'}}                            
                            value={twitter}
                            onChange={(e)=>setTwitter(e.target.value)}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                        <InputLabel htmlFor="Facebook"  shrink>
                            Facebook Link
                        </InputLabel><br/>
                        <TextField
                            id="Facebook"
                            style={{width:'100%'}}                            
                            value={facebook}
                            onChange={(e)=>setFacebook(e.target.value)}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                        <InputLabel htmlFor="Instagram"  shrink>
                            Instagram Link
                        </InputLabel><br/>
                        <TextField
                            id="Instagram"
                            style={{width:'100%'}}                            
                            value={insta}
                            onChange={(e)=>setInsta(e.target.value)}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                        <InputLabel htmlFor="Youtube"  shrink>
                            Youtube Link
                        </InputLabel><br/>
                        <TextField
                            id="Youtube"
                            style={{width:'100%'}}                            
                            value={utube}
                            onChange={(e)=>setUtube(e.target.value)}
                        />
                    </FormControl>
                </Grid>                
            </Grid>
            <Grid container direction="row" >
                <Grid item style={{width:'100%'}}>
                    <FormControl style={{width:'90%',marginBottom:'30px'}}>
                             <FormLabel id="Foreign Owned">Foreign Owned</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="Foreign-Owned-group"
                                value={owned}
                                onChange={(e)=>setOwned(e.target.value)}
                            >
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="NO" />
                            </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent={'center'} >
                <Grid item>
                    <Button type="Submit" onClick={()=>{setSubmit(true);}} variant="contained">Submit</Button>
                </Grid>
            </Grid>
        </form>
    </Box>
  )
}

export default Register