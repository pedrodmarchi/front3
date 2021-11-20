/* eslint-disable react/style-prop-object */
import './style.scss'

const AboutMe = () => {
  return (
    <div class="card mb-3" style={{width:'540px;'}}>
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="https://pbs.twimg.com/profile_images/3600372629/a82319a4ccf4843e777393d5b3954dce_400x400.jpeg" class="card-img" alt="descubra" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title" style={{fontWeight:'bold'}}>Quem sou?</h3>
            <h4 class="card-text"> Não tenho a menor ideia. </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;