import React , {Component}from 'react';
 class BlogCard extends Component{
state = {
  likeCount : 0
}

getCurrentLike = () => {
  this.setState({likeCount : this.state.likeCount+1})
}
render(){
 return (   
  <div className= "style">
    <h1>{this.props.title}</h1>
    <p>{this.props.description}</p>
    <button className = "like-btn" onClick={this.getCurrentLike}>Like</button>
 <p><b><span className="likeStyle">Like Count : </span> <span className="countStyle">{this.state.likeCount}</span></b></p>
   </div>
 )
}
}

export default BlogCard;