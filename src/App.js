import React, {Component}     from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import AddPetPage             from './component/add_pet_page';
import EditPetPage            from './component/edit_pet_page';
import Home                   from './component/home';
import Footer                 from './component/footer';


class App extends Component{
  render(){
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddPetPage} />
          <Route exact path="/edit" component={EditPetPage} />
        </BrowserRouter>
        <Footer/>
      </div>
    )
  }
}


export default App;