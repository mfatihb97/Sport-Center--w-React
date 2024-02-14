import React from 'react'
// import { showClassName } from '../js/sport'

function classNamees() {
  return (
    <div>
      <div className="gym-className">
      <div className="top-outer">
        <h1 style={{color:"#375390" ,fontWeight: 900}}>OUR classNameES</h1>
        <hr className="line"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Itaque veniam sit sequi ipsum esse cupiditate culpa!</p>
          <div className="className-section col-12">
      <button className="classNamees col-3 active" onClick={() => showClassName('yoga', this)}>
        Yoga
      </button>
      <button className="classNamees col-3" onClick={() => showClassName('group', this)}>
        Group
      </button>
      <button className="classNamees col-3" onClick={() => showClassName('solo', this)}>
        Solo
      </button>
      <button className="classNamees col-3" onClick={() => showClassName('stretching', this)}>
        Stretching
      </button>
    </div>
        <div id="yoga" className="className-content show">
          <div className="col-6">
            <h2>Are you yoga?</h2>
            <br/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur architecto quia excepturi minus? Vero temporibus
              eaque modi labore odit laudantium.</p>
            <h2>When yoga you do?</h2>
            <br/>
            <p>Saturday-Sunday: 8:00am-10:00am</p>
            <p>Monday-Tuesday: 10:00am-12:00pm</p>
            <p>Wednesday-Friday: 3:00pm-6:00pm</p>
          </div>
          <div className="yoga-image col-6">
            <img src="photos/yoga.jpg" alt="yoga" width="400" height="300"/>
          </div>
        </div>
        <div id="group" className="className-content">
          <div className="col-6">
            <h2>Are you Group?</h2>
            <br/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur architecto quia excepturi minus? Vero temporibus
              eaque modi labore odit laudantium.</p>
            <h2>When group you do?</h2>
            <br/>
            <p>Saturday-Sunday: 8:00am-10:00am</p>
            <p>Monday-Tuesday: 10:00am-12:00pm</p>
            <p>Wednesday-Friday: 3:00pm-6:00pm</p>
          </div>
          <div className="yoga-image col-6">
            <img src="photos/group.webp" alt="group" width="400" height="300"/>
          </div>
        </div>
        <div id="solo" className="className-content">
          <div className="col-6">
            <h2>Are you SOLO?</h2>
            <br/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur architecto quia excepturi minus? Vero temporibus
              eaque modi labore odit laudantium.</p>
            <h2>When SOLO you do?</h2>
            <br/>
            <p>Saturday-Sunday: 8:00am-10:00am</p>
            <p>Monday-Tuesday: 10:00am-12:00pm</p>
            <p>Wednesday-Friday: 3:00pm-6:00pm</p>
          </div>
          <div className="yoga-image col-6">
            <img src="photos/solo.jpg" alt="solo" width="400" height="300"/>
          </div>
        </div>
        <div id="stretching" className="className-content">
          <div className="col-6">
            <h2>Are you stretttcthing?</h2>
            <br/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur architecto quia excepturi minus? Vero temporibus
              eaque modi labore odit laudantium.</p>
            <h2>When stretchging you do?</h2>
            <br/>
            <p>Saturday-Sunday: 8:00am-10:00am</p>
            <p>Monday-Tuesday: 10:00am-12:00pm</p>
            <p>Wednesday-Friday: 3:00pm-6:00pm</p>
          </div>
          <div className="yoga-image col-6">
            <img src="photos/stret.webp" alt="yoga" width="400" height="300"/>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom-gym">
      <div className="bottom-gym-inner">
        <div className="bmi-calculator">
          <h1 style={{color:"#375390" ,fontWeight: 900}}>BMI Calculator</h1>
          <br/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae est, consequuntur ut numquam repudiandae mollitia
            consequatur incidunt placeat dolor! Soluta mollitia doloremque eius commodi eum.
          </p>
          <br/>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Nam accusamus, blanditiis delectus maiores aut laudantium inventore
            dolorem perspiciatis harum sapiente deserunt animi autem beatae deleniti?
          </p>
          <br/>
          <div className="calculation">
            <input type="number" id="heightInput" placeholder="Your Height-cm"/>
            <p style={{marginTop: 15}}>cm</p>
            <input type="number" id="weightInput" placeholder="Your Weight"/>
            <p style={{marginTop: 15}}>kg</p>
          </div>
          <p id="result"></p>
        </div>
        <div className="bmi-image">
          <h3 style={{fontWeight: 900}}>Your BMI</h3>
          <img src="photos/bmi-index.jpg" alt="bmi-index"/>
          <div className="triangle"></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default classNamees
