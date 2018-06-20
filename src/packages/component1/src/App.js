import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">

<div className="jumbotron">
  <div className="container text-center">
    <h1>My Portfolio</h1>      
    <p>Some text that represents "Me"...</p>
  </div>
</div>
  
<div className="container-fluid bg-3 text-center">    
  <h3>Some of my Work</h3><br/>
  <div className="row">
    <div className="col-sm-3">
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" alt="Image1"/>
    </div>
    <div className="col-sm-3"> 
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Image2"/>
    </div>
    <div className="col-sm-3"> 
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" alt="Image3"/>
    </div>
    <div className="col-sm-3">
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Image4"/>
    </div>
  </div>
</div><br/>

<div className="container-fluid bg-3 text-center">    
  <div className="row">
    <div className="col-sm-3">
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Image"/>
    </div>
    <div className="col-sm-3"> 
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Image"/>
    </div>
    <div className="col-sm-3"> 
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Image"/>
    </div>
    <div className="col-sm-3">
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Image"/>
    </div>
  </div>
</div><br/><br/>

<footer className="container-fluid text-center">
  <p>Footer Text</p>
</footer>

      </div>
    );
  }
}

export default App;
