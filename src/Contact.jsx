import React,{ useState  } from "react";

const Contact = () => {

    const [fname, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

        function fullName(e) {
            setName(e.target.value);
        }

        function phoneNum(e) {
            setPhone(e.target.value);
        }

        function emailAdress(e) {
            setEmail(e.target.value);
        }

        function Message(e) {
            setMessage(e.target.value);
        }

        function onSubmit() {
            alert("WellCome (" + fname + ") and your phone number is (" + phone + ") and email adress is  (" + email + "). Your message is (" + message + ")");
        }


return (
    <>
<div className="my-5">
    <h1 className="text-center"> Contact US </h1>
</div>
<div className="container contact_div">
    <div className="row">
        <div className="col-md-6 col-10 mx-auto">
            <form>
            <div className="mb-3">
  <label className="form-label"> 
  FullName
   </label>
  <input
   type="text"
    className="form-control"
     onChange={fullName}
      placeholder="Enter your name"/>
</div>
<div className="mb-3">
  <label className="form-label">
  Phone
  </label>
  <input
   type="number"
    className="form-control" 
     onChange={phoneNum}
     placeholder="phone Number"/>
</div>
<div classNameName="mb-3">
  <label className="form-label">Email address</label>
  <input
   type="email" 
   className="form-control" 
   placeholder="Your Email adress"
     onChange={emailAdress}
     />
</div>

<div className="mb-3">
  <label 
  className="form-label"> Message </label>
  <textarea
   className="form-control" 
   rows="3"
  onChange={Message}
   placeholder="Enter your message"
  >

  </textarea>
 </div> 
  <div className="col-12">
    <button className="btn btn-outline-primary" onClick={onSubmit} type="submit">Submit form</button>
  </div>
  
</form>
        </div>
    </div>
</div>

    </>
);
};
export default Contact;