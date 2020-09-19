import React from 'react';

class Hello extends React.Component {
    Click = (e) => {
        document.body.className = document.body.className.replace("welcomeMode", "formMode");
        this.props.incr(1);
    };

    componentDidMount() {
        document.getElementsByTagName("button")[0].focus();
    }

    render() {
        document.body.className = document.body.className.replace("formMode", "welcomeMode");
        return <div className="jfForm-wrapper">
            <div className="jfForm-backgroundContainer"/>
            <div className="jfWelcome-wrapper">
                <div className="jfWelcome">
                    <div className="jfWelcome-imageWrapper"><img
                        src={process.env.PUBLIC_URL + "/assets/img/linxdatacenter_logo_monochrome_white.5a8d5b3f11e942.64744864.5bec1caa56c3b2.12629927.png"}
                        alt="DC Security Point St. Petersburg" className="jfWelcome-image"/></div>
                    <div className="jfWelcome-header form-header">Вводный инструктаж</div>
                    <div className="jfWelcome-buttonWrapper">
                        <button className="jfWelcome-button" id="jfCard-welcome-start"
                                onClick={this.Click}>Вход&nbsp; |&nbsp; Enter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Hello;
