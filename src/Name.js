import React from 'react';

class Name extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: props.name,
            surname: props.surname,
            patronymic: props.patronymic,
        };
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };
    Click = (e) => {
        e.preventDefault();
        if (this.state.firstName !== "" && this.state.surname !== "") {
            this.props.set("name", this.state.firstName);
            this.props.set("surname", this.state.surname);
            this.props.set("patronymic", this.state.patronymic);
            this.props.incr(1)
        } else {
            document.getElementsByTagName("li")[0].classList.add("form-line-error");
            document.getElementById("first_1").classList.add("form-validation-error");
            document.getElementById("last_1").classList.add("form-validation-error");
        }
    };

    componentDidMount() {
        if (this.state.firstName !== "")
            document.getElementById("patronymic_1").focus();
        else
            document.getElementById("last_1").focus();
    }

    render() {
        return <div className="jfForm-wrapper" style={{paddingBottom: "96px", paddingTop: "46px"}}>
            <div className="jfForm-backgroundContainer"/>
            <ul className="jfForm-all  transition-all-03s">
                <li className="form-line" data-type="control_imagechoice">
                    <div className="jfCard-wrapper isVisible transition-all-015s" style={{width: "100%"}}>
                        <div className="jfCard" style={{maxHeight: "794px", maxWidth: "832px"}}>
                            <div className="jfCard-question">
                                <label className="jfQuestion-label isCenterAlign"><span
                                    className="jsQuestionLabelContainer">Представьтесь, пожалуйста</span><span
                                    className="jfRequiredStar">* <span className="jfRequiredStar-message">Это поле необходимо для заполнения.</span></span></label>
                                <div className="jfQuestion-fields">
                                    <div className={"jfField " + (this.state.surname ? "isFilled" : null)} id="last_0"
                                         data-type="last">
                                        <input type="text" id="last_1" placeholder="Фамилия" name="surname"
                                               className="jfInput-input hasSublabel"
                                               value={this.state.surname} onChange={this.handleInputChange}/>
                                        <label className="jfField-sublabel">Фамилия</label>
                                    </div>
                                    <div className={"jfField " + (this.state.firstName ? "isFilled" : null)}
                                         id="first_0" data-type="first">
                                        <input type="text" id="first_1" placeholder="Имя" name="firstName"
                                               className={"jfInput-input hasSublabel "}
                                               value={this.state.firstName} onChange={this.handleInputChange}/>
                                        <label className="jfField-sublabel">Имя</label>
                                    </div>
                                    <div className={"jfField " + (this.state.patronymic ? "isFilled" : null)}
                                         id="patronymic_0" data-type="last">
                                        <input type="text" id="patronymic_1" placeholder="Отчество" name="patronymic"
                                               className="jfInput-input hasSublabel"
                                               value={this.state.patronymic} onChange={this.handleInputChange}/>
                                        <label className="jfField-sublabel">Отчество</label>
                                    </div>
                                </div>
                            </div>
                            <div className="jfCard-actions">
                                <button className="jfInput-button forNext u-right" onClick={this.Click}>ДАЛЕЕ
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

export default Name;
