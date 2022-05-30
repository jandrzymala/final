// import './generic/reset.scss';
import './App.scss';

import UsersList from './components/UsersList/UsersList';
import QuizLeague from './components/QuizLeague/QuizLeague';
import UsersManager from './components/UsersManager/UsersManager';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';

const App = () => {
  return (
        <div className="App">
          <Nav/>
          <Header />
          
        <section>
          <div className='container'>
            <QuizLeague />
          </div> 
        </section>
        <Footer />
    </div>
  );
}

export default App;
