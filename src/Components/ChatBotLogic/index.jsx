import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot'
import NormalFace from '../Images/finding.gif'
import { ThemeProvider } from 'styled-components';
import './index.css'

const titledetails = [
  {
    id:'1',
    answer:'2'
  }
]

const theme = {
  background: 'white',
  fontFamily: 'Arial',
  headerBgColor: 'skyblue',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}




const ChatbotLogic = () => {

  function Divdetails (){
    return(
      <>
      {titledetails.map(each=>each.id)}
      </>
    )
  }
  
const LogicSteps=[
  {
      id:'1',
      message: 'Hello and Welcome to the Hubnex Chat! Please Provide Your name',
      trigger: 'get_name',
  },

    {
      id: 'get_name',
      user: true,
      trigger: 'greet',
    },
    {
      id: 'greet',
      message: 'Hello, {previousValue}! Please choose one of the options below so we can connect with your Queries',
      trigger:'Main-menu'
    },
  
    {
      id:'Main-menu',
      options: [
        { value: 'Course Information', label: 'Course Details', trigger: 'Course Details' },
        { value: 'Academic Queries', label: 'Academic Queries', trigger: 'Academic Queries' },
        { value: 'Website Navagation', label: 'Website Navagation', trigger: 'Website Navagation' },
        { value: 'Feedback and Complaints', label: 'Feedback & Report', trigger: 'Feedback & Report' },

      ],
    },
  
    {
      id:'Course Details',
      options: [
       
        { value: 'Available Workshop', label: 'Available Workshop', trigger: 'Available Workshop' },
        { value: 'Enrollement Process', label: 'Enrollement Process', trigger: 'Enrollement Process' },
        { value: 'Main-menu', label: 'Back to Main menu', trigger: 'Main-menu' },
       
      ],
    },
    {
      id:'Available Workshop',
      options: [
        { value: 'Course1', label: 'HR Workshop', trigger: 'HR Workshop' },
        { value: 'Course2', label: 'Finance Workshop', trigger: 'Finance Workshop' },
        { value: 'Course3', label: 'Data Science Workshop', trigger: 'Data Science Workshop' },
        { value: 'Course4', label: 'Marketing Workshop', trigger: 'Marketing Workshop' },
        { value: 'Course5', label: 'Front End Workshop', trigger: 'Front End Workshop' },
        { value: 'Course6', label: 'AI/ML Workshop', trigger: 'AI/ML Workshop' },
        { value: 'Main-menu', label: 'go to Main menu', trigger: 'Main-menu' },
       
      ],
    },
    {
      id:'HR Workshop',
      component:(
        <div>
          Steps for booking mentorship
          <Divdetails/>
          
          <a href="">Click here</a>
        </div>
        ),
       trigger: 'redirect'
    },
    {
      id:'Finance Workshop',
      component:(
        <div>
          Steps for booking mentorship
          
          <a href="">Click here</a>
        </div>
        ),
       trigger: 'redirect'
    },
    {
      id:'Data Science Workshop',
      component:(
        <div>
          Steps for booking mentorship
          
          <a href="">Click here</a>
        </div>
        ),
       trigger: 'redirect'
    },
    {
      id:'Marketing Workshop',
      component:(
        <div>
          Steps for booking mentorship
          
          <a href="">Click here</a>
        </div>
        ),
       trigger: 'redirect'
    },
    {
      id:'Front End Workshop',
      component:(
        <div>
          Steps for booking mentorship
          
          <a href="">Click here</a>
        </div>
        ),
       trigger: 'redirect'
    },
    {
      id:'AI/ML Workshop',
      component:(
        <div>
          Steps for booking mentorship
          
          <a href="">Click here</a>
        </div>
        ),
       trigger: 'redirect'
    },
    {
      id:'Enrollement Process',
      component:(
        <div> Create an Account:  Most websites will require you to create an account by providing an email address and password. This establishes your identity on the platform and allows you to track your progress and access course materials.
        <br /> Browse Courses:  Once you have an account, you can explore the course offerings. Websites may allow you to filter by category, skill level, or instructor. Look for detailed descriptions about the course content, learning objectives, and instructor qualifications.
         <br />Enroll in a Course:  When you find a course that interests you, you can typically enroll with a simple click.  Free courses may require minimal information, while paid courses may prompt you to enter payment details.
       <br /> Verification and Payment if applicable:  For paid courses, you will likely need to provide your payment information. Secure payment gateways are essential for educational websites to ensure safe transactions. Some platforms may also require verification steps, such as confirming your email address.
        <br /> Course Access:  Upon successful enrollment, you should receive access to the course materials. This may involve immediate access to all content or a drip-feed approach where content is unlocked gradually</div>
       
      ),
      trigger:'redirect-enrol'
    },
   {
    id:'redirect-enrol',
    component:(
    <div><a href="">Redirect to Login Page Click me</a></div>
    )
   },

  //  _________________________________________________________________________________________________________________________________________


   {
    id:'Academic Queries',
    options: [
     
      { value: 'Important Dates', label: 'Important Dates', trigger: 'Important Dates' },
      { value: 'Events and News', label: 'Events and News', trigger: 'Events and News' },
      { value: 'Book MentorShip', label: 'Book MentorShip', trigger: 'Book MentorShip' },
      { value: 'Placement Assistance', label: 'Placement Assistance', trigger: 'Placement Assistance' },
      { value: 'Main-menu', label: 'Back to Main menu', trigger: 'Main-menu' },
     
    ],
  },
  {
    id:'Important Dates',
    component:(
      <div>Here are some important dates data fetch from backend

        for more information <a href="">Click here</a>
      </div>
      ),
     trigger: 'redirect'
  },
  {
    id:'Events and News',
    component:(
      <div>Here are some Events and News data fetch from backend

        for more information <a href="">Click here</a>
      </div>
      ),
     trigger: 'redirect'
  },
  {
    id:'Book MentorShip',
    component:(
      <div>
        Steps for booking mentorship
        
        <a href="">Click here</a>
      </div>
      ),
     trigger: 'redirect'
  },
  {
    id:'Placement Assistance',
    component:(
      <div>
        Steps for Placement Assistance
        
        <a href="">Click here</a>
      </div>
      ),
     trigger: 'redirect'
  },

// _______________________________________________________________________________________________________________________________________________________________-
{
id:'Website Navagation',
options: [
 
  { value: 'Login', label: 'Login', trigger: 'Login' },
  { value: 'Blog', label: 'Blog', trigger: 'Blog' },
  { value: 'About', label: 'About', trigger: 'About' },
  { value: 'Serives', label: 'Serives', trigger: 'Serives' },
  { value: 'Pricing', label: 'Pricing', trigger: 'Pricing' },
  
  { value: 'Main-menu', label: 'Back to Main menu', trigger: 'Main-menu' },
 
],
},
{
id:'Login',
component:(
  <div>
    Assistance for Login or we provide some visual images
    <br />
   For redirection please <a href="">Click here</a>
  </div>
  ),
 trigger: 'redirect'
},
{
id:'Blog',
component:(
  <div>
    Assistance for Login or we provide some visual images
    <br />
   For redirection please <a href="">Click here</a>
  </div>
  ),
 trigger: 'redirect'
},
{
id:'About',
component:(
  <div>
    Assistance for Login or we provide some visual images
    <br />
   For redirection please <a href="">Click here</a>
  </div>
  ),
 trigger: 'redirect'
},
{
id:'Serives',
component:(
  <div>
    Assistance for Login or we provide some visual images
    <br />
   For redirection please <a href="">Click here</a>
  </div>
  ),
 trigger: 'redirect'
},
{
id:'Pricing',
component:(
  <div>
    Assistance for Login or we provide some visual images
    <br />
   For redirection please <a href="">Click here</a>
  </div>
  ),
 trigger: 'redirect'
},

// ________________________________________________________________________________________________________________________________________________________-

{
id:'Feedback & Report',
options: [
 
  { value: 'Report an Issues', label: 'Report an Issues', trigger: 'Report an Issues' },
  { value: 'Book an Appoinment', label: 'Book an Appoinment', trigger: 'Book an Appoinment' },
  
  
  { value: 'Main-menu', label: 'Back to Main menu', trigger: 'Main-menu' },
 
],
},
{
id:'Report an Issues',
component:(
  <div>
    Assistance for Login or we provide some visual images
    <br />
   For redirection please <a href="">Click here</a>
  </div>
  ),
 trigger: 'redirect'
},
{
id:'Book an Appoinment',
component:(
  <div>
    Assistance for Login or we provide some visual images
    <br />
   For redirection please <a href="">Click here</a>
  </div>
  ),
 trigger: 'redirect'
},


  {
id:'redirect',
options:[
{value:'main-menu', label:'Redirect to Main-Menu' , trigger:'Main-menu'},
{value:'End-chat', label:'End Chat' , trigger:'end_commmand'},
]
  },
   
    {
      id: 'end_commmand',
      message: 'Thank you',
      end: true,
    },

]


  return (
    <div>
      <ThemeProvider theme={theme}>
      <ChatBot
     botAvatar={NormalFace}
     
     steps ={LogicSteps}
   
  />
</ThemeProvider>
   
    </div>
  )
}

export default ChatbotLogic
