import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import apiKeys from '../js/apiKeys'
import './Components.css'


class Contact extends Component{

    state = {
        email: '',
        name: '',
        message: ''
    }


    emailOnChangedHandler = e => {
        
        this.setState({
            ...this.state,
            email: e.target.value
        })
    }

    nameOnChangedHandler = e => {
            
        this.setState({
            ...this.state,
            name: e.target.value
        })
    }

    messageOnChangedHandler = e => {
            
        this.setState({
            ...this.state,
            message: e.target.value
        })
    }

    sendEmailHandler = e => {
        e.preventDefault()

        let email = {
            name: this.state.name,
            message: this.state.message,
            email: this.state.email
        }
        
        emailjs
        .sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID, email)
        .then(
          result => {
            console.log(result.text)
          },
          error => {
            console.log(error.text)
          }
        )
    }

    render() {

        return (
            
        <section className="contact-section pb-5">
            <div className="container">

                <div class="custom-shape-divider-top-1598896223">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className="card p-5 w-75 mx-auto">
                    <h1 className="section-text border-gradient border-gradient-yellow pl-3">GET IN TOUCH</h1>
                    <form className="form my-4 mt-5" onSubmit={this.sendEmailHandler}>
                        <div className="form-group">
                            <input name='name' type="text" onChange={this.nameOnChangedHandler}  placeholder="FULL NAME" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input name='email' onChange={this.emailOnChangedHandler} type="text" placeholder="EMAIL" className="form-control"  />
                        </div>
                        <div className="form-group">
                            <textarea name='message' onChange={this.messageOnChangedHandler} type="text" placeholder="Your message here" rows="5" className="form-control"  ></textarea>
                        </div>
    
                        <button type="submit" className="btn btn-primary form-control">SUBMIT</button>
                    </form>
                </div>

            </div>
        </section>
        )
    }
    }

export default Contact