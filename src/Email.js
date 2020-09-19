import React from 'react';

class Email extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: props.mail};
    }

    handleNameChange = (event) => {
        this.setState({email: event.target.value});
        if (document.getElementById('input_10').value !== "") {
            document.getElementById("input_10").classList.remove("form-validation-error");
            document.getElementsByTagName("li")[0].classList.remove("form-line-error");
        } else {
            document.getElementById("input_10").classList.add("form-validation-error");
            document.getElementsByTagName("li")[0].classList.add("form-line-error");
        }
    };
    Click = (e) => {
        e.preventDefault();
        if (e.target.id === "back")
            this.props.incr(-1);
        else if (this.state.email !== "") {
            let reg = RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$');
            if (reg.test(this.state.email))
                this.props.incr(1)
            else {
                document.getElementById("error").innerText = "Введите правильный e-mail адрес";
                document.getElementsByTagName("li")[0].classList.add("form-line-error");
                document.getElementById("input_10").classList.add("form-validation-error");
            }
        } else {
            document.getElementById("error").innerText = "Это поле необходимо для заполнения.";
            document.getElementsByTagName("li")[0].classList.add("form-line-error");
            document.getElementById("input_10").classList.add("form-validation-error");
        }
        this.props.set("email", this.state.email);
    };

    componentDidMount() {
        document.getElementById("input_10_0").focus();
    }

    render() {
        return <div className="jfForm-wrapper" style={{paddingBottom: "96px", paddingTop: "46px"}}>
            <div className="jfForm-backgroundContainer"/>
            <ul className="jfForm-all  transition-all-03s">
                <li className="form-line" data-type="control_textbox">
                    <div className="jfCard-wrapper isVisible transition-all-015s" id="cid_16" style={{width: "100%"}}>
                        <div className="jfCard" data-type="control_email"
                             style={{maxHeight: "794px", maxWidth: "832px"}}>
                            <div className="jfCard-question">
                                <label className="jfQuestion-label isCenterAlign"><span
                                    className="jsQuestionLabelContainer">Введите ваш адрес электронной почты</span><span
                                    className="jfRequiredStar">* <span className="jfRequiredStar-message">This field is required</span></span></label><span
                                className="jfQuestion-description"
                                id="input_10_description">Вам будет отправлена полная версия Руководство клиента.</span>
                                <div className="jfQuestion-fields questionMode">
                                    <div className={"jfField " + (this.state.email ? "isFilled" : null)}
                                         data-type="email" id="input_10_0">
                                        <input type="email" id="input_10"
                                               className=" jfInput-input hasSublabel"
                                               value={this.state.email} onChange={this.handleNameChange}
                                               data-component="email"/>
                                        <label className="jfField-sublabel"
                                               id="sublabel_input_10">example@example.com</label>
                                    </div>
                                </div>
                            </div>
                            <div className="jfCard-actions">
                                <button type="button" id="back" className="jfInput-button forPrev u-left"
                                        onClick={this.Click}>НАЗАД
                                </button>
                                <button type="button" className="jfInput-button forNext u-right"
                                        onClick={this.Click}>ДАЛЕЕ
                                </button>
                                <div className="cf">
                                    <div className="jfCard-actionsNotification">
                                        <div className="form-error-message" id="error">Это поле необходимо для
                                            заполнения.
                                        </div>
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

export default Email;
