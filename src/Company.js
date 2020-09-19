import React from 'react';

class Company extends React.Component {
    constructor(props) {
        super(props);
        this.state = {company: props.comp};
    }

    handleNameChange = (event) => {
        this.setState({company: event.target.value});
    };
    Click = (e) => {
        e.preventDefault();
        if (e.target.id === "back")
            this.props.incr(-1);
        else if (this.state.company !== "")
            this.props.incr(1);
        else {
            document.getElementsByTagName("li")[0].classList.add("form-line-error");
            document.getElementById("input_16").classList.add("form-validation-error");
        }
        this.props.set("company", this.state.company);
    };

    componentDidMount() {
        document.getElementById("input_16").focus();
    }

    render() {
        return <div className="jfForm-wrapper" style={{paddingBottom: "96px", paddingTop: "46px"}}>
            <div className="jfForm-backgroundContainer"/>
            <ul className="jfForm-all  transition-all-03s">
                <li className="form-line" data-type="control_textbox">
                    <div className="jfCard-wrapper isVisible transition-all-015s" style={{width: "100%"}}>
                        <div className="jfCard" style={{maxHeight: "794px", maxWidth: "832px"}}>
                            <div className="jfCard-question">
                                <label className="jfQuestion-label isCenterAlign">
                                    <span className="jsQuestionLabelContainer">Введите название компании</span>
                                    <span className="jfRequiredStar">* <span
                                        className="jfRequiredStar-message">Обязательное поле</span></span></label><span
                                className="jfQuestion-description" id="input_16_description"/>
                                <div className="jfQuestion-fields">
                                    <div className="jfField" data-type="textbox" id="input_16_0">
                                        <input type="text" id="input_16" className=" jfInput-input"
                                               value={this.state.company} onChange={this.handleNameChange}/>
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

export default Company;
