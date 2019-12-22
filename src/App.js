import React,{useState,useEffect} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome'
import Form from './pages/Form'
import './css/app.scss';

function App() {
  const [display, setDisplay] = useState('none')
  useEffect(() => {
    // Update the document title using the browser API
    const paths = [
      require('@/img/index-feature.png'),
      require('@/img/form-bg.png'),
      require('@/img/form-reminder.png'),
      require('@/img/index-fosun-logo.png'),
      require('@/img/index-goods.png'),
      require('@/img/index-goods-circle.png')
    ]
    const imgHandleQuery = paths.map(el=>(imgOnload(el)))
  
    Promise.all(imgHandleQuery).then(()=>{
      const $pageLoading = document.querySelector('.page-loading')
      $pageLoading.parentNode.removeChild($pageLoading)
      setDisplay(true)
    })

    console.log('effect');
  },[]);

  return (
    <div className="app-container">
      <div className="App" style={{display: display}}>
        <Router>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/form'  component={Form} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
  
function imgOnload(path) {
  return new Promise((resolve,reject)=>{
      let time = 0
      const img = new Image()
      img.src = path
      //计时器->30秒仍然无法载入则直接通过
      const timeInterval = setInterval(()=>{
        time++
        if(time>=30000) {
          clearInterval(timeInterval) 
          resolve()
        }
      })
      img.onload = ()=>{
        clearInterval(timeInterval) 
        resolve()
      }
  })
}

export default App;
