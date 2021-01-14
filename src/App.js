import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import AuthApi from "./AuthApi";
import Cookies from 'js-cookie';

function App() {
  const [auth, setAuth] = React.useState(false);

  const readCookie = () => {
    const user = Cookies.get("user");
    console.log("user in readCookie --> " + user);
    console.log("nodalUser in readCookie --> " + Cookies.get("nodalUser"));
    console.log("studyCntrUser in readCookie --> " + Cookies.get("studyCntrUser"));
    if(user) {
      setAuth(true);
    }
  }
  
  React.useEffect(() => {
    readCookie();
  }, [])


  return (
    <div className="App">
      <AuthApi.Provider value={{auth,setAuth}}>
      <Router>
        <Routes />
      </Router>
      </AuthApi.Provider>
    </div>
  );
}

const NodalLogin = () => {
  const Auth = React.useContext(AuthApi);
  const handleOnClick = () => {
    Cookies.set("user", "loginTrue");
    Cookies.set("nodalUser", "loginTrue");
    Auth.setAuth(true);
    window.nodalLoggedIn = true;
    window.studyCntrLoggedIn = false;
    window.homePage = false;
  }
  return (
    <div>
      <button onClick={handleOnClick}>Login</button>
    </div>
  )
}

const StudyCntrLogin = () => {
  const Auth = React.useContext(AuthApi);
  const handleOnClick = () => {
    Cookies.set("user", "loginTrue");
    Cookies.set("studyCntrUser", "loginTrue");
    Auth.setAuth(true);
    window.studyCntrLoggedIn = true;
    window.nodalLoggedIn = false;
    window.homePage = false;
  }
  return (
    <div>
      <button onClick={handleOnClick}>Login</button>
    </div>
  )
}

const NodalDashboard = () => {
  const Auth = React.useContext(AuthApi);
  const handleOnClick = () => {
    Auth.setAuth(false);
    Cookies.remove("user");
    Cookies.remove("nodalUser");
    window.studyCntrLoggedIn = false;
    window.nodalLoggedIn = false;
    window.homePage = true;
  }
  return(
    <div>
      <h1>Nodal Dashboard</h1>
      <button onClick={handleOnClick}>Logout</button>
    </div>
  )
}

const StudyCntrDashboard = () => {
  const Auth = React.useContext(AuthApi);
  const handleOnClick = () => {
    Auth.setAuth(false);
    Cookies.remove("user");
    Cookies.remove("studyCntrUser");
    window.nodalLoggedIn = false;
    window.studyCntrLoggedIn = false;
    window.homePage = true;
  }
  return(
    <div>
      <h1>Study Center Dashboard</h1>
      <button onClick={handleOnClick}>Logout</button>
    </div>
  )
}

const HomeComponent= () => {
      return(
          <div>
            <p>SVUDDE Online Application</p>
          </div>  
      )
}

const Routes = () => {
  const Auth = React.useContext(AuthApi);
  const [value, setValue] = React.useState(0);

  const handleTabs = (e, val) => {
    console.warn("tab value is " + val)
    setValue(val);

    
  }
  var displayHome = true;
  var nodalUserVal = Cookies.get("nodalUser");
  var displayNodal = false;
  if(nodalUserVal) {
    console.log("Set Display Nodal User True");
    displayNodal = true;
    displayHome = false;
  }

  var studyCntrUserVal = Cookies.get("studyCntrUser");
  var displayStudyCntr = false;
  if(studyCntrUserVal) {
    console.log("Set Display Study Center User True");
    displayStudyCntr = true;
    displayHome = false;
  }

  console.log("users --> " + " Nodal value -> " + nodalUserVal + " Study Center value -> " + studyCntrUserVal)

  return(
    <div>
    <AppBar position="static" >
      {displayNodal && <Tabs value={value} onChange={handleTabs} >
        <Tab label="Home"  component={Link} to="/"/>
        <Tab label="Dashboard" component={Link} to="/nodalDashboard" />
      </Tabs>}

      {displayStudyCntr && <Tabs value={value} onChange={handleTabs} >
        <Tab label="Home"  component={Link} to="/"/>
        <Tab label="Dashboard" component={Link} to="/studyCntrDashboard" />
      </Tabs>}

      {displayHome && 
        <Tabs value={value} onChange={handleTabs} >
        <Tab label="Home"  component={Link} to="/"/>
        <Tab label="Study Center" component={Link} to="/studyCntrLogin"/>
        <Tab label="Nodal" component={Link} to="/nodalLogin"/>
      </Tabs>}

    </AppBar>
    <switch>
      <Route path="/" component={HomeComponent} auth={Auth.auth}/>
      <ProtectedStudyCntrLogin path="/studyCntrLogin" component={StudyCntrLogin} auth={Auth.auth} />
      <ProtectedNodalLogin path="/nodalLogin" component={NodalLogin} auth={Auth.auth} />
      <ProtectedNodalRoute path="/nodalDashboard" auth={Auth.auth} component={NodalDashboard} />
      <ProtectedStudyCntrRoute path="/studyCntrDashboard" auth={Auth.auth} component={StudyCntrDashboard} />
    </switch>
    </div>
  )
}

const ProtectedStudyCntrRoute = ({auth, component: Component, ...rest}) => {
  return(
    <Route
    {...rest}
    render = {() => auth? (
      <Component />
      
    ): (
      <Redirect to="/studyCntrLogin" />
    )
    }
    />
  )
}

const ProtectedNodalRoute = ({auth, component: Component, ...rest}) => {
  return(
    <Route
    {...rest}
    render = {() => auth? (
      <Component />
      
    ): (
      <Redirect to="/nodalLogin" />
    )
    }
    />
  )
}

const ProtectedNodalLogin = ({auth, component: Component, ...rest}) => {
  return(
    <Route
    {...rest}
    render = {() => !auth? (
      <Component />
    ): (
      <Redirect to="/nodalDashboard" />
    )
    }
    />
  )
}

const ProtectedStudyCntrLogin = ({auth, component: Component, ...rest}) => {
  return(
    <Route
    {...rest}
    render = {() => !auth? (
      <Component />
    ): (
      <Redirect to="/studyCntrDashboard" />
    )
    }
    />
  )
}


export default App;
