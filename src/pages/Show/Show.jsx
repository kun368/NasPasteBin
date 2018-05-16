import React, {Component} from 'react';
import TermsInfo from './components/TermsInfo';
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer';
import PlatformLanding from "../Home/components/PlatformLanding/PlatformLanding";


export default class Show extends Component {
    static displayName = 'Show';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="show-page">
                <Header/>
                <PlatformLanding/>
                <TermsInfo/>
                <Footer/>
            </div>
        );
    }
}
