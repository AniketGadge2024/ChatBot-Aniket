import React from 'react'
import ChatBot from 'react-simple-chatbot'
import NormalFace from '../Images/finding.gif'
import './index.css'

const LogicSteps=[
    {
        id:'0',
        message: 'Welcome to our website! tell me your name?',
        trigger: 'get_name',
    },
  
    {
        id: 'get_name',
        user: true,
        trigger: 'greet',
      },
      {
        id: 'greet',
        message: 'Hello, {previousValue}! Welcome!',
        trigger:'1'
      },
      {
        id: '1',
        message: 'kind of help do you need!',
        trigger: '2',
      },


    {
        id: '2',
        options: [
          { value: 1, label: 'Course Information', trigger: 'Course_Information' },
          { value: 2, label: 'Admission Queries', trigger: 'Admission_Queries' },
          { value: 3, label: 'Academic Support', trigger: 'Academic_Support' },
          { value: 4, label: 'Technical Assistance', trigger: 'Technical_Assistance' },
          { value: 5, label: 'General Information', trigger: 'General_Information' },
          { value: 6, label: 'Events and News', trigger: 'Events_and_News' },
          { value: 7, label: 'Career Guidance', trigger: 'Career_Guidance' },
          { value: 8, label: 'Feedback and Complaints', trigger: 'Feedback_and_Complaints' },

        ],
      },
      {
        id:'Course_Information',
        options: [
          { value: 'Available courses', label: 'Available courses', trigger: 'Available_courses' },
          { value: 'Course details', label: 'Course details', trigger: 'Course_details' },
          { value: 'Enrollment process', label: 'Enrollment process', trigger: 'Enrollment_process' }, 
        ],
      },
      {
        id: 'Available_courses',
        message: 'Here is your answer for Available_courses',
       trigger:'ask_another'
      },
      {
        id: 'Course_details',
        message: 'Here is your answer for Course_details',
       trigger:'ask_another'
      },
      {
        id: 'Enrollment_process',
        message: 'Here is your answer for Enrollment_process',
       trigger:'ask_another'
      },
      {
        id:'ask_another',
        message:'did you have any other question',
        trigger:'menu'
      },
      {
        id:'menu',
        options:[
          {value:'yes' , label:'Yes i have' ,trigger:'Course_Information'},
          {value:'main menu', label:'Go to main menu' ,trigger:'2'},
          {value:'No', label:'NO my doubt is clear' ,trigger:'end_commmand'}
        ]
      },




      {
        id:'Admission_Queries',
        options: [
          { value: 'admission deadlines', label: 'admission deadlines', trigger: 'admission_deadlines' },
          { value: 'exam dates', label: 'exam dates', trigger: 'exam_dates' },
        ],
      },
      {
        id: 'admission_deadlines',
        message: 'Here is your answer for admission_deadlines',
       trigger:'ask_another'
      },
      {
        id: 'exam_dates',
        message: 'Here is your answer for exam_dates',
       trigger:'ask_another'
      },
      {
        id:'ask_another',
        message:'did you have any other question',
        trigger:'menu'
      },
      {
        id:'menu',
        options:[
          {value:'yes' , label:'Yes i have' ,trigger:'Admission_Queries'},
          {value:'main menu', label:'Go to main menu' ,trigger:'2'},
          {value:'No', label:'NO my doubt is clear' ,trigger:'end_commmand'}
        ]
      },


      
      {
        id:'Academic_Support',
        options: [
          { value: 'Study materials', label: 'Study materials', trigger: 'Study_materials' },
          { value: 'Assignment help', label: 'Assignment help', trigger: 'Assignment_help' },
          { value: 'Exam preparation tips', label: 'Exam preparation tips', trigger: 'Exam_preparation_tips' },
        ],
      },
      {
        id: 'Study_materials',
        message: 'Here is your answer for Study_materials',
       trigger:'ask_another'
      },
      {
        id: 'Assignment_help',
        message: 'Here is your answer for Assignment_help',
       trigger:'ask_another'
      },
      {
        id: 'Exam_preparation_tips',
        message: 'Here is your answer for Exam_preparation_tips',
       trigger:'ask_another'
      },
      {
        id:'ask_another',
        message:'did you have any other question',
        trigger:'menu'
      },
      {
        id:'menu',
        options:[
          {value:'yes' , label:'Yes i have' ,trigger:'Academic_Support'},
          {value:'main menu', label:'Go to main menu' ,trigger:'2'},
          {value:'No', label:'NO my doubt is clear' ,trigger:'end_commmand'}
        ]
      },



      {
        id:'Technical_Assistance',
        options: [
          { value: 'Website navigation', label: 'Website navigation', trigger: 'Website_navigation' },
          { value: 'Login issues', label: 'Login issues', trigger: 'Login_issues' },
          { value: 'Accessing online classes', label: 'Accessing online classes', trigger: 'Accessing_online_classes' },
        ],
      },
      {
        id: 'Website_navigation',
        message: 'Here is your answer for Study_materials',
       trigger:'ask_another'
      },
      {
        id: 'Login_issues',
        message: 'Here is your answer for Assignment_help',
       trigger:'ask_another'
      },
      {
        id: 'Accessing_online_classes',
        message: 'Here is your answer for Exam_preparation_tips',
       trigger:'ask_another'
      },
      {
        id:'ask_another',
        message:'did you have any other question',
        trigger:'menu'
      },
      {
        id:'menu',
        options:[
          {value:'yes' , label:'Yes i have' ,trigger:'Technical_Assistance'},
          {value:'main menu', label:'Go to main menu' ,trigger:'2'},
          {value:'No', label:'NO my doubt is clear' ,trigger:'end_commmand'}
        ]
      },



      {
        id:'General_Information',
        options: [
          { value: 'Faculty details', label: 'Faculty details', trigger: 'Faculty_details' },
          { value: 'Campus facilities', label: 'Campus facilities', trigger: 'Campus_facilities' },
          { value: 'Contact information', label: 'Contact information', trigger: 'Contact_information' },
          { value: 'Scholarships', label: 'Scholarships', trigger: 'Scholarships' },
          { value: 'Payment plans', label: 'Payment plans', trigger: 'Payment_plans' },
          { value: 'Fee structure', label: 'Fee structure', trigger: 'Fee_structure' },
        ],
      },
      {
        id: 'Faculty_details',
        message: 'Here is your answer for Study_materials',
       trigger:'ask_another'
      },
      {
        id: 'Campus_facilities',
        message: 'Here is your answer for Assignment_help',
       trigger:'ask_another'
      },
      {
        id: 'Contact_information',
        message: 'Here is your answer for Exam_preparation_tips',
       trigger:'ask_another'
      },
      {
        id: 'Scholarships',
        message: 'Here is your answer for Exam_preparation_tips',
       trigger:'ask_another'
      },
      {
        id: 'Payment_plans',
        message: 'Here is your answer for Exam_preparation_tips',
       trigger:'ask_another'
      },
      {
        id: 'Fee_structure',
        message: 'Here is your answer for Exam_preparation_tips',
       trigger:'ask_another'
      },
      {
        id:'ask_another',
        message:'did you have any other question',
        trigger:'menu'
      },
      {
        id:'menu',
        options:[
          {value:'yes' , label:'Yes i have' ,trigger:'General_Information'},
          {value:'main menu', label:'Go to main menu' ,trigger:'2'},
          {value:'No', label:'NO my doubt is clear' ,trigger:'end_commmand'}
        ]
      },



      {
        id:'Events_and_News',
        options: [
          { value: 'Upcoming events', label: 'Upcoming events', trigger: 'Upcoming_events' },
          { value: 'Recent news and announcements', label: 'Recent news and announcements', trigger: 'Recent_news_and_announcements' },

        ],
      },
      {
        id: 'Upcoming_events',
        message: 'Here is your answer for Study_materials',
       trigger:'ask_another'
      },
      {
        id: 'Recent_news_and_announcements',
        message: 'Here is your answer for Assignment_help',
       trigger:'ask_another'
      },
      {
        id:'ask_another',
        message:'did you have any other question',
        trigger:'menu'
      },
      {
        id:'menu',
        options:[
          {value:'yes' , label:'Yes i have' ,trigger:'Events_and_News'},
          {value:'main menu', label:'Go to main menu' ,trigger:'2'},
          {value:'No', label:'NO my doubt is clear' ,trigger:'end_commmand'}
        ]
      },


      {
        id:'Career_Guidance',
        options: [
          { value: 'Internship opportunities', label: 'Internship opportunities', trigger: 'Internship opportunities' },
          { value: 'Job placement support', label: 'Job placement support', trigger: 'Job placement support' },
          { value: 'Career counseling', label: 'Career counseling', trigger: 'Career counseling' },

        ],
      },
      {
        id: 'Internship opportunities',
        message: 'Here is your answer for Study_materials',
       trigger:'ask_another'
      },
      {
        id: 'Job placement support',
        message: 'Here is your answer for Assignment_help',
       trigger:'ask_another'
      },
      {
        id: 'Career counseling',
        message: 'Here is your answer for Assignment_help',
       trigger:'ask_another'
      },
      {
        id:'ask_another',
        message:'did you have any other question',
        trigger:'menu'
      },
      {
        id:'menu',
        options:[
          {value:'yes' , label:'Yes i have' ,trigger:'Career_Guidance'},
          {value:'main menu', label:'Go to main menu' ,trigger:'2'},
          {value:'No', label:'NO my doubt is clear' ,trigger:'end_commmand'}
        ]
      },




      {
        id:'Feedback_and_Complaints',
        options: [
          { value: 'Reporting issues', label: 'Reporting issues', trigger: 'Reporting issues' },
          { value: 'Providing feedback on courses or services', label: 'Providing feedback on courses or services', trigger: 'Providing feedback on courses or services' },
         

        ],
      },
      {
        id: 'Reporting issues',
        message: 'Here is your answer for Study_materials',
       trigger:'ask_another'
      },
      {
        id: 'Providing feedback on courses or services',
        message: 'Here is your answer for Assignment_help',
       trigger:'ask_another'
      },
      {
        id:'ask_another',
        message:'did you have any other question',
        trigger:'menu'
      },
      {
        id:'menu',
        options:[
          {value:'yes' , label:'Yes i have' ,trigger:'Feedback_and_Complaints'},
          {value:'main menu', label:'Go to main menu' ,trigger:'2'},
          {value:'No', label:'NO my doubt is clear' ,trigger:'end_commmand'}
        ]
      },


      {
        id: 'end_commmand',
        message: 'Thank you',
        end: true,
      },

]




const ChatbotLogic = () => {
    
  return (
    <div>
      
      <ChatBot
     botAvatar={NormalFace}
     
     steps ={LogicSteps}
   
  />

   
    </div>
  )
}

export default ChatbotLogic
