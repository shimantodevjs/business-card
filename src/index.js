import ReactDOM from 'react-dom';
import './index.css';
import Info from './components/info';
import Main from './components/main';
import Footer from './components/footer';

function App(){
  return <div className="app">
              <Info />
              <Main />
              <Footer />
         </div>
}

ReactDOM.render(<App />,document.getElementById('root'))
