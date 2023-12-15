import './assets/css/App.css';
import logAa from './assets/js/scripts';


function App() {
  return (
    <div className="terminal_body">
      <div className='command_line'>
        <pre>
          <code>
            <div id='command_line'>
              <div>
                <p>fun117@Fun117-Mac-mini ~ % </p>
              </div>
            </div>
          </code>
        </pre>
      </div>
      <div className='before text_input_field'>
        <input id='command_input_field' className='command_input_field'></input>
        <button className='command_input_sub' onClick={logAa}>送信</button>
      </div>
    </div>
  );
}

export default App;