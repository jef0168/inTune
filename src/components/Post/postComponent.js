import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './postStyle.scss';

export class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      mainText: '',
      mood: '',
      date: new Date(),
      users: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeMainText = this.onChangeMainText.bind(this);
    this.onChangeMood = this.onChangeMood.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      users: ['test user'],
      username: 'test user'
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeMainText(e) {
    this.setState({
      mainText: e.target.value
    });
  }

  onChangeMood(e) {
    this.setState({
      mood: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const post = {
      username: this.state.username,
      mainText: this.state.mainText,
      mood: this.state.mood,
      date: this.state.date
    };

    console.log(post);

    window.location = '/profile';
  }

  render() {
    return (
      <div className='mainPost'>
        <form onSubmit={this.handleSubmit}>
          <h3>Create New Post</h3>
          <div className='containerPost'>
            <div className='form-group'>
              <label>Username: </label>
              <select
                ref='userInput'
                required
                className='form-control'
                value={this.state.username}
                onChange={this.onChangeUsername}
              >
                {this.state.users.map(function(user) {
                  return (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className='form-group'>
              <label>
                Post:
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter post'
                  value={this.state.mainText}
                  onChange={this.onChangeMainText}
                />
              </label>
            </div>
            <div className='form-group'>
              <label>
                Mood:
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter mood'
                  value={this.state.mood}
                  onChange={this.onChangeMood}
                />
              </label>
            </div>
            <div className='form-group'>
              <label>Date: </label>
              <div>
                <DatePicker
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                />
              </div>
            </div>

            <div className='form-group'>
              <input
                type='submit'
                value='Create Post'
                className='btn btn-primary'
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Post;
