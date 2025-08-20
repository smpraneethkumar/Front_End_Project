import React from 'react'
import { BsCalendar3 } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { PiBagBold } from "react-icons/pi";
import { MdOutlineDocumentScanner } from "react-icons/md";

export const Forms = () => {
    return (
        // <div className='container'>

        <div className="d-flex" style={{ width: "100%", height: "100vh" }}>
            <aside className='col-md-4' style={{ backgroundColor: "gainsboro", padding: "20px", overflowY: "auto", width: "400px" }}>
                <span style={{ display: "flex" }}><IoIosArrowForward style={{ fontSize: "30px" }} /> <h4>Back </h4></span>
                {/* side note-1 */}
                <div style={{ display: "flex", gap: "20px", backgroundColor: "white", borderRadius: "10px", paddingTop: "10px" }}>
                    <img src="../../images/Path 84535.jpg" alt="" style={{ width: "50px", height: "30px", marginTop: "10px" }} />
                    <div>
                        <h5>Primary Job Details</h5>
                        <small>Select account, igve a unique job title, and mention the job type and no of vacancies  </small>
                    </div>
                    <input type="radio" name='dots' style={{ marginRight: "10px" }} />
                </div>

                {/* side note-2 */}
                <div style={{ display: "flex", gap: "15px", backgroundColor: "white", borderRadius: "10px", marginTop: "20px" }}>
                    <img src="../../images/dvr.jpg" alt="" style={{ width: "30px", height: "30px", marginTop: "10px" }} />
                    <div >
                        <h5>Application Mode</h5>
                        <small>Choose the Application</small>
                    </div>
                    <input type="radio" name='dots' style={{ marginLeft: "100px" }} />
                </div>
                {/* side note-3 */}
                <div style={{ display: "flex", gap: "10px", backgroundColor: "white", borderRadius: "10px", padding: "10px", marginTop: "20px" }}>
                    <img src="../../images/Path 84552.jpg" alt="" style={{ width: "50px", height: "30px", marginTop: "10px" }} />
                    <div>
                        <h5>Job Description</h5>
                        <small>Give a complete job description. You can also select a prediefined template. </small>
                    </div>
                    <input type="radio" name='dots' />
                </div>
                {/* side note-4 */}
                <div style={{ display: "flex", gap: "10px", backgroundColor: "white", borderRadius: "10px", padding: "10px", marginTop: "20px" }}>
                    <img src="../../images/Frame 13.jpg" alt="" style={{ width: "px", height: "40px", marginTop: "10px" }} />
                    <div>
                        <h5>Candidate Eligibility Criteria</h5>
                        <small>Enter experience range, notice period, and required skills.Specify if the role is open to freshers to attract the right candidates.  </small>
                    </div>
                    <input type="radio" name='dots' />
                </div>
                {/* side note-5 */}
                <div style={{ display: "flex", gap: "10px", backgroundColor: "white", borderRadius: "10px", padding: "10px", marginTop: "20px" }}>
                    <img src="../../images/Path 84756.jpg" alt="" style={{ width: "50px", height: "30px", marginTop: "10px" }} />
                    <div>
                        <h5>Compensation & Work Details</h5>
                        <small>Mention salary or stipend details, pay frequency, and working days to set clear compensation expertaions for candidates.  </small>
                    </div>
                    <input type="radio" name='dots' />
                </div>
                {/* side note-6 */}
                <div style={{ display: "flex", gap: "10px", backgroundColor: "white", borderRadius: "10px", padding: "10px", marginTop: "20px" }}>
                    <img src="../../images/Path 84755.jpg" alt="" style={{ width: "50px", height: "30px", marginTop: "10px" }} />
                    <div>
                        <h5>Assignee</h5>
                        <small>Assign jobs to the recruiters.  </small>
                    </div>
                    <input type="radio" name='dots' style={{ marginLeft: "63px" }} />
                </div>
                {/* side note-7 */}
                <div style={{ display: "flex", gap: "10px", backgroundColor: "white", borderRadius: "10px", padding: "10px", marginTop: "20px" }}>
                    <img src="../../images/Union.jpg" alt="" style={{ width: "50px", height: "30px", marginTop: "10px" }} />
                    <div>
                        <h5>Screening Questions</h5>
                        <small>Add screening questions  </small>
                    </div>
                    <input type="radio" name='dots' style={{ marginLeft: "49px" }} />
                </div>
                {/* side note-8 */}
                <div style={{ display: "flex", gap: "10px", backgroundColor: "white", borderRadius: "10px", padding: "10px", marginTop: "20px" }}>
                    <img src="../../images/Path 84791.jpg" alt="" style={{ width: "50px", height: "30px", marginTop: "10px" }} />
                    <div>
                        <h5>Interview Round & Panel Selection</h5>
                        <small>Add interview rounds to the job with specifications related to duration, asessments, panel.  </small>
                    </div>
                    <input type="radio" name='dots' />
                </div>
            </aside>
            {/* the side scroll is end here */}

            {/* the main form starts here */}
            {/* the heading part starts here */}
            <main className='col-md-1 ' style={{ gap: "800px" }}></main>
            <main className=' mt-5' style={{ overflowY: "auto",flexGrow:"1" ,padding:"20px"}}>
                <h5 className='text-center'><b>Candidate Eligiblilty Criterla</b></h5><br />
                <p className='text-center text-secondary'>Specify the minimum education, relevant specialization, certifications, and experience required fro this role. This helps ensure only suitable candidates apply - making your hiring process faster and more efficient.</p><br />
 {/* the heading part ends here */}

 {/* input starts here */}

                {/* input 1 */}
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label"><b>Highest qualification</b></label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Select Highest qualification" />
                </div>
                <div className="mb-3 ">
                    <label for="formGroupExampleInput2" className="form-label"><span><b style={{ marginRight: "240px" }}>Educational qualification</b> <small className='text-secondary ms-5'>Choose"Any Qualification"if the jod doesn't required a specific qualification</small> </span></label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Select educational qualification" />
                </div>
                {/* input 2 */}

                <b>Is the above Educational qualification mandatory for job aspirants?</b>  <br />
                <small className='text-secondary'>Choosing'yes' restricts this jod to candidates with the listed qualifications.</small><br />

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" for="inlineRadio1">Yes</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" for="inlineRadio1">No</label>
                </div><br /><br />

                {/* input 3 */}
                <b>Specializaton</b><br />
                <small className='text-secondary'>Select "Any Specialization" if the job doesn't require a specific one</small>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Select Specialization" /><br />

                {/* input 4 */}
                <b>Is the above specialization mandatory for job aspriants?</b><br />
                <small className='text-secondary'>Selecting'yes' limits this job to candidates with the specified specializatons</small><br />
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" for="inlineRadio1">Yes</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" for="inlineRadio1">No</label>
                </div><br /><br />

                {/* input 5 */}
                <label for="formGroupExampleInput2" className="form-label"><b style={{ marginRight: "340px" }}>Preferred Academic Completion Year</b> <small className='text-secondary'>Any One Graduate before and on this date can apply</small></label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Select Date" aria-label="Recipient’s username" aria-describedby="basic-addon2" />
                    <span className="input-group-text" id="basic-addon2"><BsCalendar3 /></span>
                </div> <br />

                {/* input 6 */}
                <b>Experience</b>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="0                                                Minimum (Years)" aria-label="First name" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="0                                                Maximum (Years)" aria-label="Last name" />
                    </div>
                </div><br />

                {/* input 7 */}
                <b>Certifications</b>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter certificate" /><br />

                {/* input 8 */}
                <b>Industry</b>
                <div className="row">
                    <div className="col-6">
                        <input type="text" className="form-control" placeholder="Select Industry" aria-label="First name" />
                    </div>
                    <div className="col-6">
                        <input type="text" className="form-control" placeholder="Select Languages" aria-label="Last name" />
                    </div>
                </div><br />

                {/* input 9 */}
                <b>Written Languages</b><br />
                <div className="row">
                    <div className="col-6">
                        <input type="text" className="form-control" placeholder="Select Languages" aria-label="First name" />
                    </div>
                </div><br />
 {/* input higher ends here */}

{/* buttons part start */}
                <b>When can you start?</b>
                <div className="row">
                    <div className="col-1 " style={{width:"150px"}}>
                        <a href="#" class="btn active " role="button" data-bs-toggle="button" aria-pressed="true">Immediate Joiner</a>
                    </div>
                    <div className="col-1"style={{width:"150px"}}>
                        <a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true">Within 1 Week</a>
                    </div>
                    <div className="col-1" style={{width:"150px"}}>
                        <a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true">Within 15 days</a>
                    </div>
                    <div className="col-1" style={{width:"150px"}}>
                        <a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true">Within 1 month</a>
                    </div>
                </div> <br />
                <div className="row">
                    <div className='col-2'  style={{width:"150px"}}>
                        <a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true">Within 2 month</a>
                    </div>
                    <div className="col-2" style={{width:"150px"}}>
                        <a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true">Within 3 month</a>
                    </div>
                </div><br /><br />
 {/* buttons part ends */}
 <button type="button" class="btn btn-outline-secondary">Pervious</button>
 <button type="button" class="btn " style={{backgroundColor:"orange",color:"white",marginLeft:"700px"}}>Save & Continue</button>
            </main>
 {/* the main form starts here */}
 {/* <button style={{backgroundColor:"orange",borderRadius:"8px"}}>Save & Continue</button> */}
        </div>

    )
}
