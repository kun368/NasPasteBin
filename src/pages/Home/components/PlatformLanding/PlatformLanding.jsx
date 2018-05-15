import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Icon} from '@icedesign/base';

export default class PlatformLanding extends Component {
    static displayName = 'PlatformLanding';

    static propTypes = {
        value: PropTypes.string,
    };

    static defaultProps = {
        value: 'string data',
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <div style={styles.body}>
                    <h2 style={styles.title}>
                        <Icon type="similar-product" /> 星云 PasteBin
                    </h2>
                    <h5 style={styles.title2}>
                        本网站旨在用作各方之间短期交流的粘贴信息（特别是程序代码）。
                        所有提交的数据都被视为公开信息。
                        与大多数PasteBin网站不同，本站提交的数据保证是永久的，并且记录在星云区块链上不可篡改。
                    </h5>
                </div>
            </div>
        );
    }
}

const styles = {
    buttons: {textAlign: 'center', marginTop: 33},
    body: {
        position: 'absolute',
        top: '100px',
        left: '50%',
        marginLeft: '-300px',
        width: '600px',
        color: '#fff',
        maxHeight: '260px',
        overflow: 'hidden',
        textAlign: 'center',
    },
    wrapper: {
        overflow: 'hidden',
        height: 400,
        backgroundImage:
            'url("http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-15/36833857.jpg")',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundColor: '#66ABFF',
        boxShadow: '0 1px 16px 0 rgba(0,0,0,0.10)',
    },
    title: {
        fontSize: '32px',
        // color: '#333',
        letterSpacing: '2px',
        lineHeight: '48px',
        textAlign: 'center',
    },
    title2: {
        // fontSize: '32px',
        // color: '#333',
        letterSpacing: '2px',
        // lineHeight: '48px',
        textAlign: 'center',
    },
    primaryButton: {
        height: 50,
        fontSize: 16,
        padding: '0 58px',
        lineHeight: '50px',
        color: '#fff',
    },
    secondaryButton: {
        height: 50,
        fontSize: 16,
        padding: '0 58px',
        lineHeight: '50px',
        marginRight: 20,
        backgroundColor: 'transparent',
        borderColor: '#5485f7',
        color: '#5485f7',
    },
};
