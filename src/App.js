import './App.scss';
import './QuizBody.scss';
import UsersList from './components/UsersList/UsersList';
import QuizLeague from './components/QuizLeague/QuizLeague';
import UsersManager from './components/UsersManager/UsersManager';

const App = () => {
  return (
        <div className="App">
          <nav>
            <div>
              <ul>
                <li><a>Lista uczestników</a><UsersList /></li>
              </ul>
            </div> 
          </nav>
          <header>
            <h1>Quizowa liga</h1>
            <p>Sprawdź, co wiesz!</p>
            <UsersManager />
          </header>
          
        <section>
          <div className='container'>
            <QuizLeague />
          </div> 
        </section>
        <footer>
          <h3>Projekt w budowie</h3>
        </footer>
    </div>
  );
}

export default App;
