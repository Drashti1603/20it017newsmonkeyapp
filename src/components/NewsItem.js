import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title, discription,imgurl,newsUrl} = this.props
    return (
      <div className='my-3'>
        <div class="card" style={{width: "18rem;"}}>
  <img src={imgurl} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}...</h5>
    <p class="card-text">{discription}...</p>
    <a href={newsUrl} target="blank" class="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
