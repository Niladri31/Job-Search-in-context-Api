import { useState } from 'react';
import {Button, Container, Form,Row,Col, Spinner} from 'react-bootstrap';
import { fetchData } from './utils/fetchData';
import JobCard from './JobCard';

export default function Body(){

    const [searchJob, setSearchJob] = useState('');
    const [jobData, setJobData] = useState([]);
    const [loader, setLoader] = useState(false);
    
    async function handleClick(){
        setLoader(true);
        await fetchData(searchJob)
        .then((jobData)=> {setLoader(false);
         setJobData(jobData.data);
        console.log(jobData.data);
        });
        
    }

    return (
        <>
        <div style={{backgroundColor:'rgba(40, 40, 40, 0.7)' ,width: '100%', minHeight: '100vh', color:'white'}}>
        <Form >
            <Container>
                <h3>Search your Dream Job</h3>
            <Form.Label>Enter Job you want to search:  </Form.Label>
            <Form.Control type="text" onChange={e=>setSearchJob(e.target.value)}></Form.Control>
            <Button variant='primary' className='mt-4' onClick={handleClick}>Find Jobs</Button>
            </Container>
        </Form>
        
        <Container className='mt-5'>
        {loader ? <Spinner size="xls" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} animation="grow"/> :
        <Row xs={1} md={3} className="g-4 mt-3">
            {jobData && jobData.map((job,index)=>{
                return ( 
                    <>
                        <Col key={index}>
                        <JobCard job={job}/>
                        </Col>
                    </>
                );

            })}
            </Row>
        }
        </Container>
        </div>

       
        </>
    )
      
      

}