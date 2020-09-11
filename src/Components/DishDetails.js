import React from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

    

    function RenderDish({dish}) {
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

        function RenderComments({dish}) {
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
          else
          {
            return(<div></div>)
          }
        }

 function DishDetails(props) {
        
      return(<div className="col-12 col-md-7 m-1">
          < RenderDish dish = {props.dish} />
          < RenderComments dish = {props.dish} />
      </div>
      );
  }


export default DishDetails;