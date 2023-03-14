import ReactDOM from 'react-dom';
import './index.css';
import Info from './components/info';

function App(){
  return <div className="app">
              <Info />
         </div>
}

ReactDOM.render(<App />,document.getElementById('root'))
