import React from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle, BreadcrumbItem,Breadcrumb} from 'reactstrap';
import {Link} from 'react-router-dom';
    

    function RenderDish(props) {
          if(props.dish!=null) {
             return (
               <Card>
                 <CardImg width="100%"  src={props.dish.image} />
                 <CardBody>
                   <CardTitle>{props.dish.name}</CardTitle>
                   <CardText>{props.dish.description}</CardText>
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

        function RenderComments({comment}) {
          if(comment!=null) {
            return(
              <Card>
                 <CardBody>
                   {
                     <div>
                       <h1>Comments</h1>
                       {
                        comment.map((comm) => {
                        return(<div>
                          <p>
                            {comm.comment}
                          </p>
                           <p>
                             -- {comm.author          }  
                             {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}
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
        
      return(
      <div class="container">
        <div className="row">
          <Breadcrumb>
          <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
            </div>
        </div>
       
       <div className="row">
          < RenderDish dish = {props.dish} />
          < RenderComments comment = {props.comments} />
       </div>
      </div>
      );
  }


export default DishDetails;