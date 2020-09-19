import React from 'react';

class Position extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: props.position};
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    };
    Click = (e) => {
        e.preventDefault();
        if (e.target.id === "back")
            this.props.incr(-1);
        else if (this.state.name !== "")
            this.props.incr(1);
        else {
            document.getElementsByTagName("li")[0].classList.add("form-line-error");
            document.getElementById("first_1").classList.add("form-validation-error");
        }
        this.props.set("position", this.state.name);
    };

    componentDidMount() {
        document.getElementById("first_1").focus();
    }

    render() {
        return <div className="jfForm-wrapper" style={{paddingBottom: "96px", paddingTop: "46px"}}>
            <div className="jfForm-backgroundContainer"/>
            <ul className="jfForm-all  transition-all-03s">
                <li className="form-line" data-type="control_imagechoice">
                    <div className="jfCard-wrapper isVisible transition-all-015s"
                         style={{width: "100%"}}>
                        <div className="jfCard" data-type="control_fullname"
                             style={{maxHeight: "794px", maxWidth: "832px"}}>
                            <div className="jfCard-question">
                                <label className="jfQuestion-label isCenterAlign"><span
                                    className="jsQuestionLabelContainer">Введите Вашу должность</span><span
                                    className="jfRequiredStar">* <span className="jfRequiredStar-message"> Обязательное поле</span></span></label><span
                                className="jfQuestion-description" id="input_1_description"/>
                                <div className="jfCard-mobileError jsMobileErrorWrapper">
                                    <div className="form-mobile-error-message"> Обязательное поле.</div>
                                </div>
                                <div className="jfQuestion-fields" data-wrapper-react="true">
                                    <div className="jfField" id="first_0" data-type="first">
                                        <input type="text" id="first_1"
                                               className=" forFullname jfInput-input hasSublabel"
                                               value={this.state.name} onChange={this.handleNameChange}/>
                                        <label className="jfField-sublabel" id="sublabel_1_first"/>
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
                                        <div className="form-error-message">Это поле необходимо для заполнения.
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

export default Position;
