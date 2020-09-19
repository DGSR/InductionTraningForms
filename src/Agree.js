import React from 'react';

class Agree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {rules: this.props.rules};
    }

    Click = (e) => {
        e.preventDefault();
        if (e.target.id === "back")
            this.props.incr(-1);
        else {
            if (this.state.rules)
                this.props.incr(1);
            else
                document.getElementsByTagName("li")[0].classList.add("form-line-error");
        }
        this.props.set("rules", this.state.rules);
    };
    Check = () => {
        document.getElementsByTagName("li")[0].classList.remove("form-line-error");
        this.state.rule ? this.setState({rules: false}) : this.setState({rules: true});
    };

    componentDidMount() {
        document.getElementById("userInput").checked = this.state.rules;
    }

    render() {
        return <div className="jfForm-wrapper" style={{paddingBottom: "96px", paddingTop: "46px"}}>
            <div className="jfForm-backgroundContainer"/>
            <ul className="jfForm-all  transition-all-03s">
                <li className="form-line" data-type="control_widget">
                    <div className="jfCard-wrapper isVisible transition-all-015s" style={{width: "100%"}}>
                        <div className="jfCard" data-type="control_widget" style={{maxWidth: "832px"}}>
                            <div className="jfCard-question">
                                <label htmlFor="input_22" className="jfQuestion-label isCenterAlign" id="label_22">
                                    <span className="jsQuestionLabelContainer">Подтверждение</span>
                                    <span className="jfRequiredStar">* <span
                                        className="jfRequiredStar-message">Обязательное поле</span></span></label>
                                <div className="jfQuestion-fields" style={{overflowY: "hidden"}}>
                                    <div className="jfField jfWidget form-input" datatype="textbox">
                                        <div className="jfWidget-frame"
                                             style={{textAlign: "center", overflowY: "hidden"}}
                                             data-component="widget-field">
                                            <div className="checkboxRules">
                                                <input type="checkbox" id="userInput" name="checkbox"
                                                       value={this.state.rules}
                                                       onChange={() => this.Check}/>
                                                <label htmlFor="userInput" onClick={this.Check}>
                                                    Предоставляя свои персональные данные, Вы соглашаетесь на их
                                                    обработку с соответствии с Политикой обработки персональных данных
                                                    ООО «Связь ВСД»
                                                    Пожалуйста, внимательно ознакомьтесь с документом, доступным
                                                    по&nbsp;
                                                    <a href="https://ru.linxdatacenter.com/upload/iblock/1d7/Privacy_policy.pdf"
                                                       id="_terms" rel="nofollow">ссылке</a>,
                                                    перед направлением своих персональных данных компании.</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jfCard-actions">
                                <button type="button" id="back"
                                        className="jfInput-button forPrev u-left" data-component="button"
                                        onClick={this.Click}>НАЗАД
                                </button>
                                <button type="button" disabled={!this.state.rules}
                                        className="jfInput-button forNext u-right" data-component="button"
                                        onClick={this.Click}>ДАЛЕЕ
                                </button>
                                <div className="cf">
                                    <div className="jfCard-actionsNotification">
                                        <div className="form-error-message">Это поле необходимо для заполнения.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    }
}

export default Agree;
