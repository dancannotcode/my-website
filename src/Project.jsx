import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './style.css'
import './App.css'

import Header from './Header.jsx'
import Card from './Card.jsx'
import Repository from './Repository.jsx'

import BlackJackpic from './assets/BJgame.png'
import Slaybookingpic from './assets/slaybooking.png'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Header/>
    <div>
      <h1 className = "Heading1">Project Portfolio</h1>
      <div className='attachment1'></div>
      <div className='attachment2'></div>
    </div>
    <div className='card-wrapper-position'>
      <div className = 'card-wrapper'>
          <h3 className='card-title'>My Favorite Projects </h3>
          <div className='card-container'>
            <Card
            url='https://github.com/dancannotcode/Flight-System-Database' 
            title='Slay Booking'
            image = {Slaybookingpic}
            detail='When it came to this project I was really proud
            of the fact my team and I were able to design and develop a 
            flight booking system that manages to follow normalization rules
            for a database. It started as an ER model in which we had to create
            entites, all the way to a working web application.'/>
            <Card
            url='https://github.com/dancannotcode/BlackJackGame'
            title='BlackJack'
            image = {BlackJackpic}
            detail='The point of this project was to check on my skills with 
            object oriented programming. The reason why I love this project so 
            much is the fact I managed to build a working app in a day, that shows
            animation which was something I was new to in adroid development at the
            time.'/>
          </div>
      </div> 
      <div className='attachment2' style={{backgroundColor:"teal"}}></div>
      <div className='attachment3'></div>
      <div className='project-body'>
          <Repository
          title="Expense Tracking App"
          date="May 10th-Curr, 2025"
          description="Developed and designed a way for users to track and categorize
           expenses that they made all-time in Android Studio. I created an easy to use
            UI relying on intents and spinners so users can navigate the app freely. I 
            also used Shared Preferences in order for users to save their data locally 
            as well as json in order to store the expenses as objects within my program." 
          url="https://github.com/dancannotcode/ExpenseTrackingAndroidApp"
          />
          <Repository
          title="ConDantioning Tracker"
          date="February 7th- May 9th, 2025"
          description="Developed a fitness tracking web app using HTML, CSS, and 
          JavaScript, enabling users to log daily exercises, track weight changes,
           calculate BMI, and visualize progress through dynamic charts (Chart.js). 
           Implemented localStorage for user data and historical weight tracking. 
           Designed responsive UI elements and interactive forms to enhance user 
           engagement." 
          url="https://github.com/dancannotcode/conDANtioning-Tracker"/>
          <Repository
          title="BlackJack"
          date="December 17th, 2024"
          description="Developed within a given deadline to design and develop an 
          Android app that  used OOP to track the behavior of a given player's hand 
          of cards when placing or receiving new cards, as well as tracking their score. 
          As well as showing animations on screen. I also managed the back-end design for 
          how the logic of incriminating wins, loses, and storing data would work on the 
          app." 
          url="https://github.com/dancannotcode/BlackJackGame"/>  

          <Repository
          title="Slay Booking"
          date="October 20th- December 4th, 2024"
          description="Co-developed a program using React and JavaScript that allowed 
          users to interact with a database and book a flight on a plane. I worked on 
          the get and post requests, as well as json to allow a connection between my 
          database and the website to communicate with each other. I had to work with a 
          team and communicate timelines, as well as give updates on how I was doing." 
          url="https://github.com/dancannotcode/Flight-System-Database"/>
          <Repository
          title="Scrabble"
          date="August 29th- October 24th, 2024"
          description="Developed a program in Ruby that used OOP to track the behavior
           of a given player's hand of letters when placing or receiving new letters, as 
          well as tracking their score. I handled creating a hashmap in order to quickly 
          compare words a player has played, as well as handling the logic on how letters 
          interacted with each other on the board" 
          url="https://github.com/dancannotcode/Scrabble"/>
          <Repository
          title="Viral Clicker"
          date="February 18th-May 1st, 2024"
          description="Co-developed a game with others about widgets moving around the screen
           with customizable skins for the items moving around in the game. I worked on the 
           logic as well as aspects of setting the firebase for the game. I had to create the 
           animations for the moving widget as well as attributing points to the user when the 
           widget was clicked on, as well as make sure data would be saved on a cloud and accessed 
           through the user's account." 
          url="https://github.com/dancannotcode/ClickerGame"/>
      </div>
    </div>

  </StrictMode>,
)
