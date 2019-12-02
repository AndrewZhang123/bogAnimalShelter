import React from 'react';
import './App.css';


function About(props) {
    return (
        <div className='about'>
            <img src="https://picsum.photos/1425/300" />
            <h2>Our Mission</h2>
            <p>Our mission is to advocate for animals by providing safety until home placement of those in
                our care. We promote spay and neuter programs as a means to control pet overpopluation.
            </p>
            <h2>Wish List</h2>
            <p>
                We always have a long shopping list at the Shelter! Donated items can be dropped off at the shelter located at
                56 Broad Street in Quincy during adoption hours and left with any of our Volunteers or shipped directly to us 
                from Amazon. Check out our wish list!
            </p>
            <h2>Volunteer</h2>
            <p>
                Volunteers are the backbone of our efforts to improve the lives of the animals in our care. You can also become 
                a guardian angel and sponsor a cage or kennel at the shelter. You can become a member of QAS or help out with 
                one of our available positions at QAS.
            </p>
            <h2>Adoption hours</h2>
            <ul>
                <li><b>Tuesday -</b> 6-9 PM</li>
                <li><b>Thursday -</b> 6-8 PM</li>
                <li><b>Saturday -</b> 10 AM - 4 PM</li>
            </ul>
        </div>
    )
}

export default About;