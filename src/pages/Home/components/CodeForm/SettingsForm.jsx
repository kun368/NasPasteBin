/* eslint  react/no-string-refs: 0 */
import React, {Component} from 'react';
import IceContainer from '@icedesign/container';
import {Input, Button, Radio, Switch, Upload, Grid, Select,Feedback} from '@icedesign/base';
import {
    FormBinderWrapper as IceFormBinderWrapper,
    FormBinder as IceFormBinder,
    FormError as IceFormError,
} from '@icedesign/form-binder';
import './SettingsForm.scss';

const {Row, Col} = Grid;
const {Group: RadioGroup} = Radio;
const {ImageUpload} = Upload;
const Toast = Feedback.toast;

const optionDataSource = [
    {label: 'plain', value: 'plain'},
    {label: 'abap', value: 'abap'},
    {label: 'actionscript', value: 'actionscript'},
    {label: 'ada', value: 'ada'},
    {label: 'apacheconf', value: 'apacheconf'},
    {label: 'apl', value: 'apl'},
    {label: 'applescript', value: 'applescript'},
    {label: 'arduino', value: 'arduino'},
    {label: 'asciidoc', value: 'asciidoc'},
    {label: 'aspnet', value: 'aspnet'},
    {label: 'autohotkey', value: 'autohotkey'},
    {label: 'autoit', value: 'autoit'},
    {label: 'bash', value: 'bash'},
    {label: 'basic', value: 'basic'},
    {label: 'batch', value: 'batch'},
    {label: 'bison', value: 'bison'},
    {label: 'brainfuck', value: 'brainfuck'},
    {label: 'bro', value: 'bro'},
    {label: 'c', value: 'c'},
    {label: 'clike', value: 'clike'},
    {label: 'coffeescript', value: 'coffeescript'},
    {label: 'cpp', value: 'cpp'},
    {label: 'crystal', value: 'crystal'},
    {label: 'csharp', value: 'csharp'},
    {label: 'cssExtras', value: 'cssExtras'},
    {label: 'css', value: 'css'},
    {label: 'd', value: 'd'},
    {label: 'dart', value: 'dart'},
    {label: 'diff', value: 'diff'},
    {label: 'django', value: 'django'},
    {label: 'docker', value: 'docker'},
    {label: 'eiffel', value: 'eiffel'},
    {label: 'elixir', value: 'elixir'},
    {label: 'erlang', value: 'erlang'},
    {label: 'fortran', value: 'fortran'},
    {label: 'fsharp', value: 'fsharp'},
    {label: 'gherkin', value: 'gherkin'},
    {label: 'git', value: 'git'},
    {label: 'glsl', value: 'glsl'},
    {label: 'go', value: 'go'},
    {label: 'graphql', value: 'graphql'},
    {label: 'groovy', value: 'groovy'},
    {label: 'haml', value: 'haml'},
    {label: 'handlebars', value: 'handlebars'},
    {label: 'haskell', value: 'haskell'},
    {label: 'haxe', value: 'haxe'},
    {label: 'http', value: 'http'},
    {label: 'icon', value: 'icon'},
    {label: 'inform7', value: 'inform7'},
    {label: 'ini', value: 'ini'},
    {label: 'j', value: 'j'},
    {label: 'java', value: 'java'},
    {label: 'javascript', value: 'javascript'},
    {label: 'jolie', value: 'jolie'},
    {label: 'json', value: 'json'},
    {label: 'jsx', value: 'jsx'},
    {label: 'julia', value: 'julia'},
    {label: 'keyman', value: 'keyman'},
    {label: 'kotlin', value: 'kotlin'},
    {label: 'latex', value: 'latex'},
    {label: 'less', value: 'less'},
    {label: 'livescript', value: 'livescript'},
    {label: 'lolcode', value: 'lolcode'},
    {label: 'lua', value: 'lua'},
    {label: 'makefile', value: 'makefile'},
    {label: 'markdown', value: 'markdown'},
    {label: 'markup', value: 'markup'},
    {label: 'matlab', value: 'matlab'},
    {label: 'mel', value: 'mel'},
    {label: 'mizar', value: 'mizar'},
    {label: 'monkey', value: 'monkey'},
    {label: 'n4js', value: 'n4js'},
    {label: 'nasm', value: 'nasm'},
    {label: 'nginx', value: 'nginx'},
    {label: 'nim', value: 'nim'},
    {label: 'nix', value: 'nix'},
    {label: 'nsis', value: 'nsis'},
    {label: 'objectivec', value: 'objectivec'},
    {label: 'ocaml', value: 'ocaml'},
    {label: 'opencl', value: 'opencl'},
    {label: 'oz', value: 'oz'},
    {label: 'parigp', value: 'parigp'},
    {label: 'parser', value: 'parser'},
    {label: 'pascal', value: 'pascal'},
    {label: 'perl', value: 'perl'},
    {label: 'phpExtras', value: 'phpExtras'},
    {label: 'php', value: 'php'},
    {label: 'powershell', value: 'powershell'},
    {label: 'processing', value: 'processing'},
    {label: 'prolog', value: 'prolog'},
    {label: 'properties', value: 'properties'},
    {label: 'protobuf', value: 'protobuf'},
    {label: 'pug', value: 'pug'},
    {label: 'puppet', value: 'puppet'},
    {label: 'pure', value: 'pure'},
    {label: 'python', value: 'python'},
    {label: 'q', value: 'q'},
    {label: 'qore', value: 'qore'},
    {label: 'r', value: 'r'},
    {label: 'reason', value: 'reason'},
    {label: 'renpy', value: 'renpy'},
    {label: 'rest', value: 'rest'},
    {label: 'rip', value: 'rip'},
    {label: 'roboconf', value: 'roboconf'},
    {label: 'ruby', value: 'ruby'},
    {label: 'rust', value: 'rust'},
    {label: 'sas', value: 'sas'},
    {label: 'sass', value: 'sass'},
    {label: 'scala', value: 'scala'},
    {label: 'scheme', value: 'scheme'},
    {label: 'scss', value: 'scss'},
    {label: 'smalltalk', value: 'smalltalk'},
    {label: 'smarty', value: 'smarty'},
    {label: 'sql', value: 'sql'},
    {label: 'stylus', value: 'stylus'},
    {label: 'swift', value: 'swift'},
    {label: 'tcl', value: 'tcl'},
    {label: 'textile', value: 'textile'},
    {label: 'twig', value: 'twig'},
    {label: 'typescript', value: 'typescript'},
    {label: 'vbnet', value: 'vbnet'},
    {label: 'verilog', value: 'verilog'},
    {label: 'vhdl', value: 'vhdl'},
    {label: 'vim', value: 'vim'},
    {label: 'wiki', value: 'wiki'},
    {label: 'xojo', value: 'xojo'},
    {label: 'yaml', value: 'yaml'},
];

const dappAddress = "n1p2MydveNYK2QBgoyxwhPQjbSqQ1PPb5Gb";


export default class SettingsForm extends Component {
    static displayName = 'SettingsForm';

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            value: {
                poster: '',
                type: '',
                content: ''
            },
        };
    }

    checkInstalledPlugin = () => {
        return typeof(webExtensionWallet) !== 'undefined';
    };

    formChange = (value) => {
        this.setState({
            value,
        });
    };

    validateAllFormField = () => {
        this.refs.form.validateAll((errors, values) => {
            console.log('error', errors, 'value', value);
            if (errors) {
                return;
            }
            if (!this.checkInstalledPlugin()) {
                Toast.error('还未安装Chrome扩展，请点击页面上方的下载按钮');
                return;
            }
            const contract = {
                function: 'sendMsg',
                args: `[]`,
            };
            window.postMessage({
                'target': 'contentscript',
                'data': {
                    'to': dappAddress,
                    'value': '0',
                    'contract': {
                        'function': contract.function,
                        'args': contract.args,
                    },
                },
                'method': 'neb_sendTransaction',
            }, '*');
            Toast.success('请确认已发起的交易！');
            window.addEventListener('message', resp => {
                console.log('response of push: ', resp);
                try {
                    const dat = resp.data.data;
                    if (!!dat.txhash) {
                        console.log('Transaction hash:\n' + JSON.stringify(dat.txhash, null, '\t'));
                        if (JSON.stringify(dat).indexOf('Error') === -1) {
                            Toast.success('已提交交易，请稍候！');
                        }
                    }
                } catch (e) {
                }
            });
        });
    };

    render() {
        return (
            <div className="settings-form"
                 style={{marginLeft: '16%', marginRight: '16%'}}>
                <IceContainer>
                    <IceFormBinderWrapper
                        value={this.state.value}
                        onChange={this.formChange}
                        ref="form"
                    >
                        <div style={styles.formContent}>
                            <h2 style={styles.formTitle}>创建PasteBin</h2>

                            <Row style={styles.formItem}>
                                <Col xxs="6" s="3" l="3" style={styles.label}>
                                    昵称：
                                </Col>
                                <Col s="18" l="18">
                                    <IceFormBinder name="poster" required max={24} message="请填写1-24字昵称">
                                        <Input size="large"/>
                                    </IceFormBinder>
                                    <IceFormError name="poster"/>
                                </Col>
                            </Row>

                            <Row style={styles.formItem}>
                                <Col xxs="6" s="3" l="3" style={styles.label}>
                                    语言：
                                </Col>
                                <Col s="18" l="18">
                                    <IceFormBinder name="type" required message="选择一个吧">
                                        <Select dataSource={optionDataSource}
                                                autoWidth
                                                style={{width: '100%'}}
                                        />
                                    </IceFormBinder>
                                    <IceFormError name="type"/>
                                </Col>
                            </Row>

                            <Row style={styles.formItem}>
                                <Col xxs="6" s="3" l="3" style={styles.label}>
                                    内容：
                                </Col>
                                <Col s="18" l="18">
                                    <IceFormBinder name="content">
                                        <Input size="large" multiple rows={20} required message="写点什么吧"/>
                                    </IceFormBinder>
                                    <IceFormError name="content"/>
                                </Col>
                            </Row>
                        </div>
                    </IceFormBinderWrapper>

                    <Row style={{marginTop: 20}}>
                        <Col offset="3">
                            <Button
                                size="large"
                                type="primary"
                                style={{width: 100}}
                                onClick={this.validateAllFormField}
                            >
                                提 交
                            </Button>
                        </Col>
                    </Row>
                </IceContainer>
            </div>
        );
    }
}

const styles = {
    label: {
        textAlign: 'right',
    },
    formContent: {
        width: '100%',
        position: 'relative',
    },
    formItem: {
        alignItems: 'center',
        marginBottom: 25,
    },
    formTitle: {
        textAlign: 'center',
        margin: '0 0 20px',
        paddingBottom: '10px',
        borderBottom: '1px solid #eee',
    },
};
