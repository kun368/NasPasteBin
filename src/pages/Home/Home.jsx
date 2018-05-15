import React, {Component} from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PlatformJoinus from './components/PlatformJoinus';
import PlatformLanding from './components/PlatformLanding';
import SettingsForm from "./components/CodeForm/SettingsForm";

export default class Home extends Component {
    static displayName = 'Home';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="home-page" style={{background: '#fff'}}>
                <Header/>
                <PlatformLanding/>
                <SettingsForm/>
                <PlatformJoinus/>
                <Footer/>
            </div>
        );
    }
}
