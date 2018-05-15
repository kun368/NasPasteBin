import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from '@icedesign/base';

export default class PlatformJoinUs extends Component {
    static displayName = 'PlatformJoinUs';

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
            <div
                style={{
                    ...styles.wrapper,
                    backgroundImage:
                        'url(http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-15/97529814.jpg)',
                }}
            >
                <div>
                    <div style={styles.titleWrapper}>
                        <h2 style={styles.title}>我们的优势</h2>
                        <p>把握区块链连接一切的未来</p>
                        <p>用最简单的方式传递最有价值信息</p>
                        <p> 承诺永久保存 不可篡改</p>
                        <p>支持百余种程序语言代码高亮</p>
                    </div>
                    <div style={styles.buttons}>
                        <Button
                            style={styles.secondaryButton}
                            type="primary"
                            component="a"
                            href="https://incentive.nebulas.io/cn/signup.html?invite=OILxo"
                        >
                            我也要开发
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    wrapper: {
        height: 740,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    titleWrapper: {
        textAlign: 'center',
        paddingTop: 200,
        color: '#fff',
    },
    title: {
        fontSize: 32,
        // color: '#333',
        letterSpacing: '2px',
        lineHeight: '48px',
        textAlign: 'center',
    },
    buttons: {textAlign: 'center', marginTop: '60px'},
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
        color: '#fff',
    },
};
