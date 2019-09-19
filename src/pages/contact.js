import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet";

const Contact = (props) => (
	<Layout>

<Helmet>
          <meta charSet="utf-8" />
          <title>Contact Us | Urban Fetish - Abandoned Urbex Urban Exploration Photos and Locations</title>
	  </Helmet>
	  
<h1>Contact Twilightscapes</h1>
	  
	  
        <div className="inner1">
        
            <section>
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">

<input type="hidden" name="bot-field" />
<input type="hidden" name="form-name" value="contact"/>

<div className="form">
                    <div className="field half first">
                        
                        <input type="text" name="name" id="name" placeholder="Name" required/>
                        
                        <input type="text" name="email" id="email" placeholder="Email" required/>
                    </div>
                    
                    
                    <div className="field half right">
           
            <textarea name="message" id="message" rows="6" placeholder="Message" required></textarea>
                    </div>
                    </div>
                    
                    
<div className="actionable"><input type="submit" value="Send Message" className="special" /></div>
                        
                    
                </form>
            </section>
            
            


  
            
            
            
            

        </div>
    </Layout>
)

export default Contact