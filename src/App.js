import './App.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {

    return (
            <div className="app-wrapper">
                <HeaderContainer />
                <NavbarContainer />
                <div className='app-wrapper-content'>
                        <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
                        <Route path='/dialogs' render={ () => <DialogsContainer />} />
                        <Route path='/news' render={ () => <News />} />
                        <Route path='/music' render={ () => <Music />} />
                        <Route path='/users' render={ () => <UsersContainer />} />
                        <Route path='/settings' render={ () => <Settings />}/>
                </div>
            </div>
    );
}

export default App;
