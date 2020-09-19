import React from 'react';
import CanvasDraw from "react-canvas-draw";

class Final extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pg: 1,
            draw: this.props.draw,
        };
    }

    NextPage = () => {
        document.getElementsByTagName("li")[0].classList.remove("form-line-error");
        if (this.state.pg === 2) {
            this.props.send();
            window.location = process.env.PUBLIC_URL;
        } else {
            const a = document.getElementsByTagName("canvas")[1].toDataURL();
            const b = document.getElementsByTagName("canvas")[2].toDataURL();
            if (a === b)
                document.getElementsByTagName("li")[0].classList.add("form-line-error");
            else {
                this.props.set("draw", this.Canvas.getSaveData());
                this.props.set("photo", a);
                this.setState({
                    pg: this.state.pg + 1,
                    draw: this.Canvas.getSaveData()
                });
            }
        }
    };
    PrevPage = () => {
        document.getElementsByTagName("li")[0].classList.remove("form-line-error");
         if (this.state.pg === 1) {
            this.props.set("draw", this.Canvas.getSaveData());
            this.props.set("photo", document.getElementsByTagName("canvas")[1].toDataURL());
            this.props.incr(-1);
        } else {
            this.setState({pg: this.state.pg - 1})
        }
    };

    render() {
        let page = "";
        let button = <button type="button" className="jfInput-button forNext u-right"
                             onClick={this.NextPage}>ДАЛЕЕ</button>;
        switch (this.state.pg) {
            case 1:
                page = <>
                    <label htmlFor="input_61" className="jfQuestion-label isCenterAlign" id="label_61"
                           style={{maxHeight: "unset", overflowY: "unset", fontSize: "17px"}}><span
                        className="jsQuestionLabelContainer">Проставляя отметку в окне ниже, я подтверждаю, что мною были указаны корректные ФИО, место работы, должность и адрес электронной почты, необходимые для прохождения вводного инструктажа, фиксации факта его прохождения в электронном журнале вводного инструктажа Клиентов, а также получения экземпляра Руководства Клиента Linxdatacenter и презентации вводного инструктажа на мой адрес электронной почты. Я внимательно ознакомился с правилами поведения в ЦОД Linxdatacenter, подтверждаю, что мне понятна суть установленных правил и запретов, и я обязуюсь их соблюдать.</span>
                        <span className="jfRequiredStar">* <span className="jfRequiredStar-message">Это поле необходимо для заполнения.</span></span></label>
                    <span className="jfQuestion-description" id="input_61_description" style={{fontSize: "12px"}}/>
                    <div className="jfQuestion-fields" data-wrapper-react="true" style={{overflow: "hidden"}}>
                        <div className="jfField">
                            <div id="signature_pad_61" className="signature-pad-wrapper"
                                 style={{width: "402px", height: "202px", marginLeft: "auto", marginRight: "auto"}}>
                                <div className="signature-line signature-wrapper" data-component="signature"
                                     style={{width: "402px", height: "202px"}}>
                                    <div id="sig_pad_61" data-width="400" data-height="200" data-id="61"
                                         data-required="true" className="pad validate[required] signature-pad-wrapper"
                                         style={{width: "234px", height: "200px"}}>
                                        <CanvasDraw canvasWidth="400" canvasHeight="200" brushColor="#000"
                                                    saveData={this.state.draw} immediateLoading={true} brushRadius={1}
                                                    ref={canvasDraw => (this.Canvas = canvasDraw)}/>
                                        <span className="clear-pad-btn clear-pad clickable"
                                              onClick={() => this.Canvas.clear()}>Очистить</span>
                                    </div>
                                </div>
                                <label className="jfField-sublabel" htmlFor="input_61"/></div>
                        </div>
                    </div>
                </>;
                break;
            case 2:
                button = <button type="submit" className="jfInput-button forSubmit u-right"
                                 onClick={this.props.send}>Отправить</button>;
                page = <div className="jfQuestion-fields" style={{maxHeight: "none"}}>
                    <div className="jfField">
                        <div id="text_102" className="form-html" data-component="text" style={{width: "100%"}}><p
                            style={{textAlign: "center"}}><span
                            style={{fontSize: "20pt", fontFamily: "helvetica, arial, sans-serif"}}>Спасибо!</span>
                        </p>
                            <p style={{textAlign: "center"}}><br/><span
                                style={{fontSize: "14pt", fontFamily: "helvetica, arial, sans-serif"}}>Вы прошли инструктаж. После нажатия на кнопку "Отправить" на указанную Вами электронную почту будет выслана полная версия Руководства клиента. Ждем Вас в ЦОД по адресу: улица Репищева 20А, c документом, удостоверяющим личность, для завершения оформления доступа.</span>
                            </p>
                            <p style={{textAlign: "center"}}><br/>
                                <img alt="Карта" style={{maxWidth: "100%"}}
                                     src={process.env.PUBLIC_URL + "/assets/img/map.5be3f587933913.61575108.png"}
                                /></p></div>
                    </div>
                </div>;
                break;
            default:
                console.warn("Final switcher error out of bound")
        }
        return <div className="jfForm-wrapper" style={{paddingBottom: "96px", paddingTop: "46px"}}>
            <div className="jfForm-backgroundContainer"/>
            <li className="form-line" data-type="control_widget">
                <div className="jfCard-wrapper isVisible" style={{width: "100%"}}>
                    <div className="jfCard" style={{maxWidth: "832px"}} data-type="control-signature">
                        <div className="jfCard-question" style={{overflow: "auto", maxHeight: "95%"}}>{page}</div>
                        <div className="jfCard-actions">
                            <button className="jfInput-button forPrev u-left" onClick={this.PrevPage}>НАЗАД</button>
                            {button}
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
        </div>
    }
}

export default Final;
