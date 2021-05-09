import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './routes/routes.config'

function App() {
  return (
    <Router>
      <Switch>
        {
          routes.map((route, index) => (
            <Route 
              key={index}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))
        }
      </Switch>
    </Router>
  );
}

export default App;
