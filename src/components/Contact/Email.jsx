import React, { useState, useEffect, useContext } from 'react';
import emailjs, { init } from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailStyles from './email.module.css';
import Modal from 'react-bootstrap/Modal';
// import logo from '../images/romanroofinglogo.png';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

import PortfolioContext from '../../context/context';

//Need to generate user id on emailjs
init("user_eXTlPFIMTVKB0pWteQ45v");
const Email = () => {
    const { hero } = useContext(PortfolioContext);
    const { title, name, subtitle, cta } = hero;
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      if (window.innerWidth > 769) {
        setIsDesktop(true);
        setIsMobile(false);
      } else {
        setIsMobile(true);
        setIsDesktop(false);
      }
    }, []);
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [phone, setphone] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  let variables = {
    first_name: firstName,
    last_name: lastName,
    client_phone: phone,
    client_email: email,
    message: message,
  };
  //need to create an email template and generate template id
  const templateId = 'template_hv6cv3j';
  //add dif variables(email, firstname, lastname, phone,  message)
  const handleSubmit = (event) => {
    // event.preventDefault();
    const form = event.currentTarget;
    console.log(validated);
    console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    if (form.checkValidity()) {
      emailjs
        .send('service_0zyqi6o', templateId, variables)
        .then((res) => {
          console.log('Email successfully sent!');
          setfirstName('');
          setlastName('');
          setphone('');
          setemail('');
          setmessage('');
          setShow(true);
        })
        // Handle errors here however you like, or use a React error boundary
        .catch((err) =>
          console.error('Oh well, you failed. Here some thoughts on the error that occured:', err)
        );
    }
  };

  return (
    // <div id="contacts" className={emailStyles.primaryBG}>
    //   <div className={emailStyles.divBG}>
    //     <h1 className={emailStyles.title}>Contact Us Here</h1>
        <Form
          className={emailStyles.formBG}
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Row style={{ padding: '20px 30px 0 30px' }}>
            <div className="col-sm-6">
              <Form.Group controlId="exampleForm.ControlInput1" style={{ paddingRight: '20px' }}>
                <Form.Label className={emailStyles.labels}>First Name</Form.Label>
                <Form.Control
                  className={emailStyles.xorders}
                  type="text"
                  required
                  // placeholder="First Name"
                  onChange={(e) => {
                    setfirstName(e.target.value);
                  }}
                  value={firstName}
                />
                <Form.Control.Feedback type="invalid">Field Required.</Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-sm-6">
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label className={emailStyles.labels}>Last Name</Form.Label>
                <Form.Control
                  className={emailStyles.xorders}
                  type="text"
                  // placeholder="Last Name"
                  required
                  onChange={(e) => {
                    setlastName(e.target.value);
                  }}
                  value={lastName}
                />
                <Form.Control.Feedback type="invalid">Field Required.</Form.Control.Feedback>
              </Form.Group>
            </div>
          </Form.Row>
          <Form.Row style={{ padding: '5px 30px 0 30px' }}>
            <div className="col-sm-6">
              <Form.Group controlId="exampleForm.ControlInput3" style={{ paddingRight: '20px' }}>
                <Form.Label className={emailStyles.labels}>Phone Number</Form.Label>
                <Form.Control
                  className={emailStyles.xorders}
                  type="tel"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  required
                  maxLength="12"
                  placeholder="000-000-0000"
                  onChange={(e) => {
                    setphone(e.target.value);
                  }}
                  value={phone}
                />
                <Form.Control.Feedback type="invalid">Field Required.</Form.Control.Feedback>
              </Form.Group>
            </div>

            <div className="col-sm-6">
              <Form.Group controlId="exampleForm.ControlInput4">
                <Form.Label className={emailStyles.labels}>Email address</Form.Label>
                <Form.Control
                  className={emailStyles.xorders}
                  type="email"
                  pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$"
                  required
                  placeholder="name@example.com"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  value={email}
                />
                <Form.Control.Feedback type="invalid">Field Required.</Form.Control.Feedback>
              </Form.Group>
            </div>
          </Form.Row>
          <Form.Row style={{ padding: '5px 30px 0 30px' }}>
            <div className="col-sm-12">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className={emailStyles.labels}>Comments</Form.Label>
                <Form.Control
                  className={emailStyles.xorders}
                  as="textarea"
                  rows={5}
                  required
                  maxLength="500"
                  onChange={(e) => {
                    setmessage(e.target.value);
                  }}
                  value={message}
                />
                <Form.Control.Feedback type="invalid">Field Required.</Form.Control.Feedback>
              </Form.Group>
            </div>
          </Form.Row>
          <div className={emailStyles.centerBtn}>
            {/* <Button
              variant="primary"
              // onClick={handleSubmit}
              className={emailStyles.theBtn}
              type="submit"
            >
              Submit Form
            </Button> */}
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span>
      
              <Button 
              to="about"
              type='submit'
              variant="light"
              className="cta-btn cta-btn--hero"
               smooth duration={1000}>
         
                {cta || 'Submit'}
              </Button>
       
            </span>
          </p>
        </Fade>
          </div>
        </Form>
    //   </div>

    //   <Modal
    //     show={show}
    //     onHide={() => setShow(false)}
    //     dialogClassName="modal-90w"
    //     aria-labelledby="example-custom-modal-styling-title"
    //   >
    //     <Modal.Header closeButton>
    //       <Modal.Title id="example-custom-modal-styling-title">
    //         Thank you from Frank <br /> and all the Family at
    //       </Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body style={{ textAlign: 'center' }}>
    //       <div className={emailStyles.modalNameDiv}>
    //         <h1 className={emailStyles.modalName}>Roman Roofs</h1>
    //       </div>
    //       <p className={emailStyles.proudly}>
    //         Proudly serving Boise <br /> and the surrounding area <br /> for over 30 years.
    //       </p>
    //       {/* <img src={logo} style={{ width: '25%' }} /> */}
    //     </Modal.Body>
    //     <Modal.Footer>
    //       &copy;2020 Roman Roofs |{' '}
    //       <a
    //         className={emailStyles.banyan}
    //         href="https://banyanlabs.io/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Banyan Web Designs
    //       </a>
    //     </Modal.Footer>
    //   </Modal>
    // </div>
  );
};
export default Email;
