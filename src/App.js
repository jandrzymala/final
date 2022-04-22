import './App.scss';
import UsersList from './UsersList';
import UsersManager from './UsersManager';
import QuizLeague from './QuizLeague';
const App = () => {
  return (
        <div className="App">
          <nav>
            <container>
              <ul>
                <li><a>Lista uczestników</a></li>
                <li><a>Lista quizów</a></li>
              </ul>
            </container> 
          </nav>
          <header>
            <h1>Quizowa liga</h1>
            <p>Sprawdź, co wiesz!</p>
            <UsersManager />
          </header>
          
        <section>
          <container>
            <QuizLeague />
            <UsersList />
          </container> 
        </section>
        <footer>
          <h3>Dołącz do ligi</h3>
        </footer>
    </div>
  );
}

export default App;
