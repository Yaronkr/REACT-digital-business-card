import './Styles/App.css'
import MyDetails from './Components/MyDetails'
import Content from './Components/Content'
import Links from './Components/Links'


function App() {
  return (
    <div className="main--container">
      <div className="content--container">
        <MyDetails/>
        <Content/>
        <Links/>
      </div>
    </div>
  );
}

export default App;
