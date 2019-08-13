import React, { Component } from 'react'
import axios from 'axios'
import qs from 'query-string'
import './NewBeer.css'


export default class NewBeer extends Component {
  constructor(props) {
    super(props)
    this.formRef = React.createRef();

    this.state = {
      tagline: '',
      description: '',
      first_brewed: '',
      attenuation_level: '',
      brewers_tips: '',
      contributed_by: '',
      name: ''
    }
    this.handleFormSubmit =
      this.handleFormSubmit.bind(this)
  }
  handleFormChange = (e) => {
    this.setState({
        [e.target.name]:e.target.value
      })
    }
  handleFormSubmit = (e) => {
    e.preventDefault();
    let form = new FormData(this.formRef.current)
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/beers/new`,
      data: form
    })
      .then((response) => {
        this.props.history.push("/")
      })
      .catch((error) => {
        console.log(error)
      })
  }
      render() {
      return (
      <div className="add-beer">
        <form ref={this.formRef} onSubmit={this.handleFormSubmit} style={{ display: "flex", "flexWrap": "wrap" }}>{/* we don't want the default form submitting behaviour, so we're adding own submit handler   */}
          <div>
            <label>Name:</label>
            <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleFormChange} /> {/* reacts wants to be in charge of all the data   */}
          </div>

          <div>
            <label>Tagline:</label>
            <input type="text" name="tagline" placeholder="tagline" value={this.state.tagline} onChange={this.handleFormChange} />{/* reacts wants to be in charge of all the data   */}
          </div>

          <div>
            <label>First Brewed:</label>
            <input type="text" name="first_brewed" placeholder="first brewed" checked={this.state.first_brewed} onChange={this.handleFormChange} />{/* reacts wants to be in charge of all the data   */}
          </div>

          <div>
            <label>Brewers Tips:</label>
            <input type="text" name="brewers_tips" placeholder="brewers tip" checked={this.state.brewers_tips} onChange={this.handleFormChange} />{/* reacts wants to be in charge of all the data   */}
          </div>
          <div>
            <label>Attenuation Level:</label>
            <input type="number" name="attenuation_level" placeholder="attenuation level" checked={this.state.attenuation_level} onChange={this.handleFormChange} />{/* reacts wants to be in charge of all the data   */}
          </div>
          <div>
            <label>Contributed By:</label>
            <input type="text" name="contributed_by" placeholder="contributed by" checked={this.state.first_brewed} onChange={this.handleFormChange} />{/* reacts wants to be in charge of all the data   */}
          </div>

          <div>
            <label>Description:</label>
            <textarea type="text" placeholder="description" name="description" value={this.state.description} onChange={this.handleFormChange} />{/* reacts wants to be in charge of all the data   */}
          </div>
          <div>
            <label>Upload your photo:</label>
            <input type="file" name="picture" />{/* reacts wants to be in charge of all the data   */}
          </div>
          <div>
              <input type="submit" value="Submit" />

          </div>
        </form>
      </div>
    )
  }
}


