import React, { Component } from 'react';

class Courses extends Component {
  render() {

    if(this.props.data){
      var classes = this.props.data.classes.map(function(classes){

        return <div key={classes.title}><h3>{classes.title}</h3>
        <p className="info">{classes.fee} <span>&bull;</span><em className="date">{classes.duration}</em> </p>
        <p className="date">{classes.time} <span>&bull;</span><em className="date"> {classes.language}</em> </p>
        <p className="date">Location: {classes.location}</p>
        <p>{classes.background}</p>
        <p>{classes.topics}</p>
        <p className="info">Instructor: {classes.instructor}</p>
        <p>{classes.about}</p>
        
        </div>

      })

    }

    return (
      <section id="courses">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Courses</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {classes}
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default Courses;
