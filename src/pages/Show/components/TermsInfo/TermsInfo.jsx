import React, {Component} from 'react';
import IceContainer from '@icedesign/container';
import {Checkbox, Button, Select,} from '@icedesign/base';
import DataBinder from '@icedesign/data-binder';
import {withRouter} from "react-router-dom";
import {Base64} from 'js-base64';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import {coy, funky, atomDark} from 'react-syntax-highlighter/styles/prism';

const ButtonGroup = Button.Group;

const dappAddress = "n22gG1rJ2YrGE3UhCwQZ1cMfbzxvGDDkUW8";
const userAddress = "n1ZTecB8Tpb7X7LBL7j3ZcGLVvMrXmVfLfy";


const themeDataSource = [
    {label: 'option1', value: 'option1'},
    {label: 'option2', value: 'option2'},
    {label: 'disabled', disabled: true}
];

@withRouter
@DataBinder({
    tableData: {
        // 详细请求配置请参见 https://github.com/axios/axios
        url: 'https://mainnet.nebulas.io/v1/user/call',
        method: 'post',
        headers: {'content-type': 'application/json;charset=UTF-8'},
        data: {
            from: userAddress,
            to: dappAddress,
            gasLimit: '2000000',
            gasPrice: '1000000',
            nonce: 0,
            value: '0',
            contract: {
                'args': `[""]`,
                'function': 'getItem'
            }
        },
        defaultBindingData: {
            content: '',
            createAddr: "",
            createTime: "",
            hash: "",
            id: "",
            nickname: "",
            type: "",
        },
        responseFormatter: (responseHandler, res, originResponse) => {
            console.log(res, originResponse);
            const isSucc = res.result.execute_err === "";
            res = {
                success: isSucc,
                message: isSucc ? "" : res.result.execute_err,
                data: isSucc ? JSON.parse(res.result.result) : {}
            };
            responseHandler(res, originResponse);
        },
    },
})
export default class TermsInfo extends Component {
    static displayName = 'TermsInfo';

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const hash = this.props.match.params.hash;
        this.props.updateBindingData('tableData', {
            data: {
                contract: {
                    'args': `["${hash}"]`,
                }
            }
        });
    }

    render() {
        const {tableData} = this.props.bindingData;
        console.log(tableData);

        return (
            <IceContainer style={{marginLeft: '12%', marginRight: '12%'}}>
                <h1 style={styles.title}>
                    SHARED BY &nbsp;
                    {tableData.nickname}
                    &nbsp;&nbsp;AT&nbsp;&nbsp;
                    {new Date(tableData.createTime).toLocaleString()}
                    &nbsp;&nbsp;USED&nbsp;&nbsp;
                    {tableData.type.toUpperCase()}
                </h1>

                <div style={styles.content}>
                    <SyntaxHighlighter language={tableData.type} style={atomDark}>
                        {Base64.decode(tableData.content)}
                    </SyntaxHighlighter>
                </div>
            </IceContainer>
        );
    }
}

const styles = {
    desc: {
        fontSize: '13px',
        lineHeight: '28px',
    },
    title: {
        textAlign: 'center',
        margin: 0,
        paddingBottom: '20px',
        fontSize: '20px',
        borderBottom: '1px solid #dedede',
    },
    themeSelect: {
        textAlign: 'center',
    },
    content: {
        color: '#666',
        fontSize: '14px',
        padding: '20px 0',
        borderBottom: '1px solid #dedede',
    },
    btn: {
        textAlign: 'center',
    },
};
