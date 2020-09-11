import React from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';
class DishDetails extends React.Component {
    constructor(props){
    super(props);
    }

    renderDish(dish) {
          if(dish!=null) {
             return (
               <Card>
                 <CardImg width="100%"  src={dish.image} />
                 <CardBody>
                   <CardTitle>{dish.name}</CardTitle>
                   <CardText>{dish.description}</CardText>
                 </CardBody>
               </Card>
             )
          }
          else{
            return (
              <div></div>
            );
          }
        }

        renderComments(dish) {
          if(dish!=null) {
            return(
              <Card>
                 <CardBody>
                   {
                     <div>
                       <h1>Comments</h1>
                       {
                        dish.comments.map((comment) => {
                        return(<div>
                          <p>
                            {comment.comment}
                          </p>
                           <p>
                             -- {comment.author          }  
                             {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                           </p>
                       </div>)
                     })
                    }
                     </div>
                   }
                 </CardBody>
               </Card>
            )
          }
        }

  render() {
        var currentDish = this.props.dish;
        //console.log(currentDish.name);
      return(<div className="col-12 col-md-7 m-1">
          {this.renderDish(this.props.dish)}
          {this.renderComments(this.props.dish)}
      </div>
      );
  }
}

export default DishDetails;