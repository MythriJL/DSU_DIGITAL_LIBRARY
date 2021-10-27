import React,{useState,useEffect} from 'react';
import './index.css';
import Switch from 'react-bootstrap/esm/Switch';
import { Route, Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { Tab } from '../ejournal/tab/ Tab';
const styles = {
    fontFamily: 'sans-serif',
};

function Ebook() {
    const [active,setActive] = useState("aTab")
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://run.mocky.io/v3/9e6df857-1353-48a0-86d1-ac25a4caae5c")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result)
                },
            )
    }, [])
        const content = {
            aTab:

                <Table striped bordered hover variant="dark" className="cd-table" >
                    <thead>
                        <tr>
                            <th>Sl. No.</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publisher</th>
                            <th>Edition</th>
                            <th>Pages</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items && items.map((x,idx)=>
                            {
                                if(x.sl>=1 && x.sl<=109){
                                    return <tr>
                                        <td>{idx+1}</td>
                                        <a href={x.Link}>
                                            <td>{x.Title}</td>
                                        </a>
                                        <td>{x.Author}</td>
                                        <td>{x.Publisher}</td>
                                        <td>{x.Edition}</td>
                                        <td>{x.Pages}</td>
                                        <td>{x.Remarks}</td>
                                    </tr>
                                }
                            }
                            )
                        }
                    </tbody>
                </Table>,
            bTab:
                <Table striped bordered hover variant="dark" className="cd-table" >
                    <thead>
                        <tr>
                            <th>Sl. No.</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publisher</th>
                            <th>Edition</th>
                            <th>Pages</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items && items.map((x,idx)=>
                            {
                                if(x.sl>=110 && x.sl<=346){
                                    return <tr>
                                        <td>{idx+1}</td>
                                        <a href={x.Link}>
                                            <td>{x.Title}</td>
                                        </a>
                                        <td>{x.Author}</td>
                                        <td>{x.Publisher}</td>
                                        <td>{x.Edition}</td>
                                        <td>{x.Pages}</td>
                                        <td>{x.Remarks}</td>
                                    </tr>
                                }
                            }
                            )
                        }
                       
                    </tbody>
                </Table>,

            cTab:
                <Table striped bordered hover variant="dark" className="cd-table" >
                    <thead>
                        <tr>
                            <th>Sl. No.</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publisher</th>
                            <th>Edition</th>
                            <th>Pages</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items && items.map((x,idx)=>
                            {
                                if(x.sl>=347 && x.sl<=350){
                                    return <tr>
                                        <td>{idx+1}</td>
                                        <a href={x.Link}>
                                            <td>{x.Title}</td>
                                        </a>
                                        <td>{x.Author}</td>
                                        <td>{x.Publisher}</td>
                                        <td>{x.Edition}</td>
                                        <td>{x.Pages}</td>
                                        <td>{x.Remarks}</td>
                                    </tr>
                                }
                            }
                            )
                        }
                       
                    </tbody>
                </Table>,

            dTab:
                <Table striped bordered hover variant="dark" className="cd-table" >
                    <thead>
                        <tr>
                            <th>Sl. No.</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publisher</th>
                            <th>Edition</th>
                            <th>Pages</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items && items.map((x,idx)=>
                            {
                                if(x.sl>=351 && x.sl<=354){
                                    return <tr>
                                        <td>{idx+1}</td>
                                        <a href={x.Link}>
                                            <td>{x.Title}</td>
                                        </a>
                                        <td>{x.Author}</td>
                                        <td>{x.Publisher}</td>
                                        <td>{x.Edition}</td>
                                        <td>{x.Pages}</td>
                                        <td>{x.Remarks}</td>
                                    </tr>
                                }
                            }
                            )
                        }
                       
                    </tbody>
                </Table>,
            eTab:
                <Table striped bordered hover variant="dark" className="cd-table" >
                    <thead>
                        <tr>
                            <th>Sl. No.</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publisher</th>
                            <th>Edition</th>
                            <th>Pages</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items && items.map((x,idx)=>
                            {
                                if(x.sl>=355 && x.sl<=392){
                                    return <tr>
                                        <td>{idx+1}</td>
                                        <a href={x.Link}>
                                            <td>{x.Title}</td>
                                        </a>
                                        <td>{x.Author}</td>
                                        <td>{x.Publisher}</td>
                                        <td>{x.Edition}</td>
                                        <td>{x.Pages}</td>
                                        <td>{x.Remarks}</td>
                                    </tr>
                                }
                            }
                            )
                        }
                       
                    </tbody>
                </Table>,
            fTab:
                <div class="table-responsive">
                    <Table striped bordered hover variant="dark" className="cd-table" >
                        <thead>
                            <tr>
                                <th>Sl. No.</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Publisher</th>
                                <th>Edition</th>
                                <th>Pages</th>
                                <th>Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            items && items.map((x,idx)=>
                            {
                                if(x.sl>=393 && x.sl<=408){
                                    return <tr>
                                        <td>{idx+1}</td>
                                        <a href={x.Link}>
                                            <td>{x.Title}</td>
                                        </a>
                                        <td>{x.Author}</td>
                                        <td>{x.Publisher}</td>
                                        <td>{x.Edition}</td>
                                        <td>{x.Pages}</td>
                                        <td>{x.Remarks}</td>
                                    </tr>
                                }
                            }
                            )
                        }
                       
                    </tbody>
                    </Table>
                </div>,
                gTab:
                <div class="table-responsive">
                    <Table striped bordered hover variant="dark" className="cd-table" >
                        <thead>
                            <tr>
                                <th>Sl. No.</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Publisher</th>
                                <th>Edition</th>
                                <th>Pages</th>
                                <th>Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            items && items.map((x,idx)=>
                            {
                                if(x.sl>=409 && x.sl<=579){
                                    return <tr>
                                        <td>{idx+1}</td>
                                        <a href={x.Link}>
                                            <td>{x.Title}</td>
                                        </a>
                                        <td>{x.Author}</td>
                                        <td>{x.Publisher}</td>
                                        <td>{x.Edition}</td>
                                        <td>{x.Pages}</td>
                                        <td>{x.Remarks}</td>
                                    </tr>
                                }
                            }
                            )
                        }
                       
                    </tbody>
                    </Table>
                </div>,
                 hTab:
                 <div class="table-responsive">
                     <Table striped bordered hover variant="dark" className="cd-table" >
                         <thead>
                             <tr>
                                 <th>Sl. No.</th>
                                 <th>Title</th>
                                 <th>Author</th>
                                 <th>Publisher</th>
                                 <th>Edition</th>
                                 <th>Pages</th>
                                 <th>Remarks</th>
                             </tr>
                         </thead>
                         <tbody>
                         {
                             items && items.map((x,idx)=>
                             {
                                 if(x.sl>=580 && x.sl<=620){
                                     return <tr>
                                         <td>{idx+1}</td>
                                         <a href={x.Link}>
                                             <td>{x.Title}</td>
                                         </a>
                                         <td>{x.Author}</td>
                                         <td>{x.Publisher}</td>
                                         <td>{x.Edition}</td>
                                         <td>{x.Pages}</td>
                                         <td>{x.Remarks}</td>
                                     </tr>
                                 }
                             }
                             )
                         }
                        
                     </tbody>
                     </Table>
                 </div>,
        };
        return (
            <>
                <div className="head">
                    <h1>E-BOOK </h1>
                </div>
                <br></br><br></br>
                <div style={styles}>

                    <Tab
                        active={active}
                        onChange={active => setActive(active)}
                    >
                        <div key="aTab">COMMERCE AND MANAGEMENT</div>
                        <div key="bTab">Computer Science</div>
                        <div key="cTab">Physics</div>
                        <div key="dTab">MCA</div>
                        <div key="eTab">Computer Technology</div>
                        <div key="fTab">Biotechnology</div>
                        <div key="gTab">General Study</div>
                        <div key="hTab">Mathematics</div>
                    </Tab>



                    <br></br>
                    <p>{content[active]}</p>
                </div>

                <Switch>
                    <Route path="/ejournal/tab">
                        <Tab />
                    </Route>
                </Switch>

            </>

        )

    }

export default Ebook;
