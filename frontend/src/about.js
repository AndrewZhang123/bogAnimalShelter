import React from 'react';
import './App.css';


function About() {
    return (
        <div>
            <div className='image'>
                <img src="https://picsum.photos/1519/400?blur" />
            </div>
            <div className='about'>

                <h2>Our Mission</h2>
                <div className="paragraph"><p>Our mission is to advocate for animals by providing safety until home placement of those in
                    our care. We promote spay and neuter programs as a means to control pet overpopluation.
            </p></div>

                <h2>Wish List</h2>
                <div className="paragraph"><p>
                    We always have a long shopping list at the Shelter! Donated items can be dropped off at the shelter located at
                    56 Broad Street in Quincy during adoption hours and left with any of our Volunteers or shipped directly to us
                    from Amazon. Check out our wish list!
            </p></div>


                <h2>Volunteer</h2>
                <div className="paragraph"><p>
                    Volunteers are the backbone of our efforts to improve the lives of the animals in our care. You can also become
                    a guardian angel and sponsor a cage or kennel at the shelter. You can become a member of QAS or help out with
                    one of our available positions at QAS.
            </p></div>


                <h2>Adoption hours</h2>
                <div className="hours">
                    <div>
                        <ul>
                            <li><b>Tuesday </b></li>
                            <li><b>Thursday</b></li>
                            <li><b>Saturday</b></li>
                        </ul>
                    </div>
                    <div className='lines'>
                        <ul>
                            <li>- </li>
                            <li>- </li>
                            <li>- </li>
                        </ul>
                    </div>
                    <div className='times'>
                        <ul>
                            <li>6 PM - 9 PM</li>
                            <li>6 PM - 8 PM</li>
                            <li>10 AM - 4 PM</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;