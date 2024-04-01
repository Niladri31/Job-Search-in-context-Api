import { Button, Card } from "react-bootstrap";

export default function JobCard({job}){
  
    return (
        <>
            <Card bg="dark" text="white" style={{ width: '18rem' , height: '18rem'}}>
                    <Card.Body>
                        <Card.Title>{job.employer_name}</Card.Title>
                        <b>Required Skills :</b>
                        {job.job_required_skills && job.job_required_skills.map((skill)=>{
                            return <span>{skill+', '}</span>
                        })}
                        <br></br>
                  
                            <b>Job City: </b><span>{job.job_city && job.job_city}</span><br></br>
                            <b>Job Country: </b><span>{job.job_country && job.job_country}</span><br></br>
                            <Button target="_blank" className="mt-2" href={job.job_apply_link}>Apply here</Button>
                    </Card.Body>
                    
            </Card>
        </>
    );
}