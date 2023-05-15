import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Sidebar from './Sidebar';
import Template from './Template';
import Register from './Register';
import Allowances from './Allowances';


const Home=()=> {

    const [registerOpen,setRegisterOpen]=useState(false);
    const [modalOpen,setModalOpen]=useState(false);
    const [corpInfo,setCorpInfo]=useState({
        businessDescription:"",
        corporatePhilosophy:"",
        companyName:"",
        mailId:"",
        phoneNumber:"",
        Location:"",
        workingHours:"",
        establishmentDate:"",
        initialCapital:"",
        representative:"",
        branch:"",
        numberOfEmployees:"",
        salesRevenue:"",
        operationProfit:"",
        age:"",
        stock:"",
        linkedIn:"",
        twitter:"",
        facebook:"",
        instagram:"",
        youtube:"",
        owned:""
    })

    let CorporateData=[
        {
            name:'Buisness Desciption',
            value:corpInfo.businessDescription
        },
        {
            name:'Corporate Philosophy',
            value:corpInfo.corporatePhilosophy
        },
        {
            name:'Company Name',
            value:corpInfo.companyName
        },
        {
            name:'Mail ID',
            value:corpInfo.mailId
        },
        {
            name:'Phone Number',
            value:corpInfo.phoneNumber
        },
        {
            name:'Location',
            value:corpInfo.Location
        },
        {
            name:'Working Hours',
            value:corpInfo.workingHours
        },
        {
            name:'Establishment Data',
            value:corpInfo.establishmentDate
        },
        {
            name:'Initial Capital',
            value:corpInfo.initialCapital
        },
        {
            name:'Representative',
            value:corpInfo.representative
        },
        {
            name:'Branch',
            value:corpInfo.branch
        },
        {
            name:'Number Of Employees',
            value:corpInfo.numberOfEmployees
        },
        {
            name:'Sales Revenue',
            value:corpInfo.salesRevenue
        },
        {
            name:'Operation Profit',
            value:corpInfo.operationProfit
        },
        {
            name:'Average Age Of Employees',
            value:corpInfo.age
        },
        {
            name:'Stock',
            value:corpInfo.stock
        },
        {
            name:'LinkedIn',
            value:corpInfo.linkedIn
        },
        {
            name:'Twitter',
            value:corpInfo.twitter
        },
        {
            name:'FaceBook',
            value:corpInfo.facebook
        },
        {
            name:'Instagram',
            value:corpInfo.instagram
        },
        {
            name:'Youtube',
            value:corpInfo.youtube
        },
        {
            name:'Foreign Owned',
            value:corpInfo.owned
        }
    ]
    
    const [allowance,setAllowance]=useState({
        system:"",
        holidays:"",
        welfare:"",
        education:"",
        support:"",
        reducedHours:"",
        care:"",
        subsidy:"",
        allowances:"",
        ownership:"",
        side:"",
        mentor:"",
        career:"" 
    });
    let Allowance=[
        {
            name:'Salary System Based On Meritocracy',
            value:allowance.system
        },
        {
            name:'120 Or More Annual Holidays',
            value:allowance.holidays
        },
        {
            name:'Generous Welfare Benifits',
            value:allowance.welfare
        },
        {
            name:'Enhanced Education And Training',
            value:allowance.education
        },
        {
            name:'Support System For Acquriring Qualification',
            value:allowance.support
        },
        {
            name:'Reduced Working Hours System',
            value:allowance.reducedHours
        },
        {
            name:'Maternity Care Leave System',
            value:allowance.care
        },
        {
            name:'Company Housing / Rent Subsidy',
            value:allowance.subsidy
        },
        {
            name:'Family Allowance',
            value:allowance.allowances
        },
        {
            name:'Employee Stock Ownership',
            value:allowance.ownership
        },
        {
            name:'Side Job Available',
            value:allowance.side
        },
        {
            name:'Mentor System',
            value:allowance.mentor
        },
        {
            name:'Career Consulting',
            value:allowance.career
        }
    ]

    let othersData=[
        {
            name:"Retention Rate Of New Graduate Hires",
            value:"Over 50%"

        },
        {
            name:"Work Style ( Overseas Bases )",
            value:"Yes"
        },
        {
            name:"Working Environment",
            value:"Not Working"
        }
    ]

let holidaysData=[
    {
        name:"Not Working",
        value:"Yes"
    },
    {
        name:"Golden Weeks",
        value:"Yes"
    },
    {
        name:"Other Holidays",
        value:"Yes"
    }
]
    
    

  return (
    <Grid container direction="row" >
        <Grid item md={2}>
            <Sidebar />
        </Grid>
        <Grid item md={10} justifyContent={'flex-start'} alignItems={'flex-start'}>
               {!registerOpen? <Grid container justifyContent={'space-between'} alignItems="center" padding='30px 30px' >
                    <Grid item md={12}>
                        <Template heading={'Corporate Information'}   y={setRegisterOpen} data={CorporateData} />
                    </Grid>
                    <Grid container justifyContent={'space-between'} spacing={5}>
                        <Grid item md={6} >
                            <Template heading={'Allowances'}  y={setModalOpen} data={Allowance}  />
                        </Grid>
                        {modalOpen && <Allowances set={setAllowance} open={modalOpen} setOpen={setModalOpen}/>}
                        <Grid item md={6} >
                            <Grid container direction={'column'}>
                                <Grid item >
                                    <Template heading={'Others'} data={othersData}/>
                                </Grid>
                                <Grid item >
                                    <Template heading={'Holidays'} data={holidaysData}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>: <Register open={setRegisterOpen}  setCorpInfo={setCorpInfo}/>}
        </Grid>




    </Grid>
  )
}

export default Home