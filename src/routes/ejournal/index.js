import React,{useState,useEffect} from 'react';
import './index.css';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';
import { Tab } from './tab/ Tab.js';

const styles = {
    fontFamily: 'sans-serif',
  };
  
 function Ejournal () {
const [active,setActive] = useState("aTab");
const [items, setItems] = useState([]);
useEffect(() => {
      fetch("https://run.mocky.io/v3/bf14539c-691a-4084-a271-cd834b45a872")
          .then(res => res.json())
          .then(
              (result) => {
                  setItems(result)
              },
          )
  }, [])
      const  content = {
        aTab: <div className='Rectangle' >
              <br></br><br></br>
            {
                  items && items.map((x,idx)=> {
                        if(x.sl>=1 && x.sl<=18){
                              return <><header className="Box">
                                   
                                    <h1 className="text">{x.Name}</h1>
                                    
                              </header>
                              <br/></>
                        }
                  })
            }
        
        </div>,              
        bTab: <div className='Rectangle'>
              <br></br><br></br> 
              {
                  items && items.map((x,idx)=> {
                        if(x.sl>=19 && x.sl<=36){
                              return <><header className="Box">
                                   
                                    <h1 className="text">{x.Name}</h1>
                                    
                              </header>
                              <br/></>
                        }
                  })
            }
        </div>,
        cTab: <div className='Rectangle2'>
              <br></br><br></br> 
              {
                  items && items.map((x,idx)=> {
                        if(x.sl>=37 && x.sl<=42){
                              return <><header className="Box">
                                   
                                    <h1 className="text">{x.Name}</h1>
                                    
                              </header>
                              <br/></>
                        }
                  })
            }
        </div>,
        dTab: <div className='Rectangle1'>
              <br></br><br></br> 
              {
                  items && items.map((x,idx)=> {
                        if(x.sl>=43 && x.sl<=73){
                              return <><header className="Box">
                                   
                                    <h1 className="text">{x.Name}</h1>
                                    
                              </header>
                              <br/></>
                        }
                  })
            }
        </div>,
        eTab: <div className='Rectangle3'>
              <br></br><br></br> 
              {
                  items && items.map((x,idx)=> {
                        if(x.sl>=75 && x.sl<=78){
                              return <><header className="Box">
                                   
                                    <h1 className="text">{x.Name}</h1>
                                    
                              </header>
                              <br/></>
                        }
                  })
            }
        </div>,
        fTab: <div className='Rectangle4'>
              <br></br><br></br> 
              {
                  items && items.map((x,idx)=> {
                        if(x.sl>=79 && x.sl<=80){
                              return <><header className="Box">
                                   
                                    <h1 className="text">{x.Name}</h1>
                                    
                              </header>
                              <br/></>
                        }
                  })
            }
        </div>,
    };
      return (
            <>
        <div className="head">
                <h1>E-Journal </h1>
            </div>
        <br></br>
        <br></br>
        <div style={styles}>

        <Tab
          active={active}
          onChange={active => setActive(active)}
        >
          <div key="aTab">Mechanical Engineering  </div>
          <div key="bTab">Electronics & Communication Engineering</div>
          <div key="cTab">Basic Science</div>
          <div key="dTab">Computer Science & Engineering</div>
          <div key="eTab">EMBEDDED SYSTEMS</div>
          <div key="fTab">ADDITIONAL</div>
        </Tab>
        
       
      
    <br></br>
    <p>{content[active]}</p>
    </div>
     
      <Switch>
              <Route path="/tab">
                <Tab />
              </Route>
        </Switch> 
       
  </>   
  
        )
        
    }
export default Ejournal;
        