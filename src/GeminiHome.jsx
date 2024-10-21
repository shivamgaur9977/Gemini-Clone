import './App.css';
import MainBox from './components/MainBox';
import SideBar from './components/SideBar';

export default function GeminiHome() {
    return (
        <div className='app'>
            <SideBar></SideBar>
            <MainBox></MainBox>
        </div>
    )
}