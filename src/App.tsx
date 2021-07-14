import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import initialdata from "./dummy/data.json"; 
import { Office_series, Game_series, Main_expert, Home_series } from "./views"
function  App(){
  const element = document.getElementById("root") as any;
  const [data, setdata] = useState(initialdata)
  useEffect(()=>{

    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type == "attributes") {
          let data = element?.getAttribute("customAttribute");
          setdata(data) // or JSON.parse(data);
        }
      });
    });
    observer.observe(element, {
      attributes: true  
    });
  }, [])
 
  

 return(
  <Router>
    <Switch>
      <Route exact path="/">
        <Home_series data={data.Home_series} />
      </Route>
      <Route path="/games_series">
        <Game_series data={data.Games_series} />
      </Route>
      <Route path="/main_expert">
        <Main_expert  data={data.Main_expert}/>
      </Route>
      <Route path="/Office_series">
        <Office_series data={data.Office_series}/>
      </Route>
    </Switch>
</Router>
 )
}
export default App;