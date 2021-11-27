import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar data={props.state.navbar} />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile data={props.state.profilePage} />}/>
                        <Route path='/dialogs/*' element={<Dialogs data={props.state.messagesPage} />}/>
                        <Route path='/news' element={<News />}/>
                        <Route path='/music' element={<Music />}/>
                        <Route path='/settings' element={<Settings />}/>

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
