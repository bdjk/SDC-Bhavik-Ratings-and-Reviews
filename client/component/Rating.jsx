import React from 'react';
import axios from 'axios';
import RatingBar from './RatingBar.jsx';
import RatingStar from './RatingStar.jsx';
import RatingPercent from './RatingPercent.jsx';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    this.getUsers = this.getUsers.bind(this)
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers() {
    axios.get('/review').then((users) => {
      console.log('got users', users.data)
      this.setState({users: users.data})
    })
  }

  render() {
    return (<div className='rating'>
      <div>
        <RatingBar/>
      </div>
      <div className='ratingStar'>
        <RatingStar/>
      </div>
      <div className='ratingPercent'>
        <RatingPercent/>
      </div>
    </div>)
  }
}

export default Rating;
