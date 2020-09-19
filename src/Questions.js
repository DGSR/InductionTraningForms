import React from 'react';
import Modal from 'react-modal';

const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            zIndex: '10000',
            overflow: 'auto',
            textAlign: 'center',
            padding: '4px',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#003399'
        }
    }
;

function AnswerItem(props) {
    return <div className="jfField jfField-lastRowItem form-radio-item" style={{clear: "none"}}>
        <label className="jfRadio withoutImage" tabIndex="0">
            <input type="radio" className="jfRadio-input form-radio validate[required]"
                   name="q66_input66" value={props.item} id={props.id}/>
            <div className="jfRadio-label" name={props.id} onClick={props.next}>
                    <span className="jfRadio-customInput" name={props.id}>
                        <span className="jfRadio-customInputIcon" name={props.id}/></span>
                <span className="jfRadio-labelText" name={props.id}>{props.item}</span>
            </div>
        </label>
    </div>
}

class Questions extends React.Component {
    constructor(props) {
        super(props);
        if (props.prev === 8)
            this.state = {
                question: 15,
                ans: props.ans,
                showModal: false,
                modalLine1: "Это неправильный ответ!",
                modalLine2: ""
            };
        else this.state = {
            question: 0,
            ans: props.ans,
            showModal: false,
            modalLine1: "Это неправильный ответ!",
            modalLine2: ""
        };
        this.handleModal = this.handleModal.bind(this);
    }

    handleModal = (bool) => {
        this.setState({showModal: bool})
    };

    NextPage = (event) => {
        if (event.target.getAttribute("name") !== "next") {
            this.checkAnswer(this.state.question, event.target.getAttribute("name"));
            document.getElementsByTagName("li")[0].classList.remove("form-line-error");
            let temp = this.state.ans;
            temp[this.state.question] = event.target.getAttribute("name");
            if (this.state.question === 15) {
                this.setState({
                    ans: temp,
                    question: this.state.question
                });
                this.props.incr(1);
                this.props.set("answers", this.state.ans)
            } else {
                this.setState({
                    ans: temp,
                    question: this.state.question + 1
                });
            }
        } else {
            if (this.state.question === 15)
                this.props.incr(1);
            else if (!this.state.ans[this.state.question])
                this.setState({question: this.state.question + 1});
            else
                document.getElementsByTagName("li")[0].classList.add("form-line-error");
        }
    };
    PrevPage = () => {
        document.getElementsByTagName("li")[0].classList.remove("form-line-error");
        if (this.state.question === 0) {
            this.props.incr(-1);
            this.props.set("answers", this.state.ans)
        } else this.setState({question: this.state.question - 1});
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.ans[this.state.question]) document.getElementById(this.state.ans[this.state.question]).checked = true;
    }

    componentDidMount() {
        if (this.state.ans[this.state.question]) document.getElementById(this.state.ans[this.state.question]).checked = true;
    }

    checkAnswer = (quest, answer) => {
        switch (quest) {
            case 0:
            case 15:
                return true;
            case 1:
                if (answer !== "13") {
                    this.setState({modalLine2: "600"});
                    this.handleModal(true);
                }
                break;
            case 2:
                if (answer !== "22") {
                    this.setState({modalLine2: "Сообщить дежурному ЦОД информацию о перемещенном оборудовании"});
                    this.handleModal(true);
                }
                break;
            case 3:
                if (answer !== "32") {
                    this.setState({modalLine2: "Нет"});
                    this.handleModal(true);
                }
                break;
            case 4:
                if (answer !== "42") {
                    this.setState({modalLine2: "Забор воздуха из холодного коридора, выдув в горячий"});
                    this.handleModal(true);
                }
                break;
            case 5:
                if (answer !== "52") {
                    this.setState({modalLine2: "Всегда, когда есть свободные юниты. Заглушки небольших размеров доступны в помещении 210. Заглушки больших размеров доступны у дежурных ЦОД."});
                    this.handleModal(true);
                }
                break;
            case 6:
                if (answer !== "61") {
                    this.setState({modalLine2: "Запрещен"});
                    this.handleModal(true);
                }
                break;
            case 7:
                if (answer !== "72") {
                    this.setState({modalLine2: "Немедленно эвакуироваться по путям эвакуации, не пользоваться лифтами и полноростовым турникетом"});
                    this.handleModal(true);
                }
                break;
            case 8:
                if (answer !== "81") {
                    this.setState({modalLine2: "Сотрудник ЦОД организует место сбора на автобусном кольце"});
                    this.handleModal(true);
                }
                break;
            case 9:
                if (answer !== "93") {
                    this.setState({modalLine2: "На стенах в серверных и руководстве клиента"});
                    this.handleModal(true);
                }
                break;
            case 10:
                if (answer !== "101") {
                    this.setState({modalLine2: "На видном месте"});
                    this.handleModal(true);
                }
                break;
            case 11:
                if (answer !== "111") {
                    this.setState({modalLine2: "Запрещено"});
                    this.handleModal(true);
                }
                break;
            case 12:
                if (answer !== "123") {
                    this.setState({modalLine2: " За 1 рабочий день на адрес support@linxdatacenter.com"});
                    this.handleModal(true);
                }
                break;
            case 13:
                if (answer !== "134") {
                    this.setState({modalLine2: " В помещении 210"});
                    this.handleModal(true);
                }
                break;
            case 14:
                if (answer !== "144") {
                    this.setState({modalLine2: "Мелкий мусор - в урны, крупный отдать дежурному ЦОД"});
                    this.handleModal(true);
                }
                break;
            default:
                console.warn("Out of range in switch check answer")
        }
    };

    render() {
        let question;
        let answers = [];
        let dataColumnCount = 1;
        switch (this.state.question) {
            case 0:
                question = "Контрольные вопросы";
                answers.push({id: 1, text: "Для окончания инструктажа, пожалуйста, ответьте на контрольные вопросы."});
                break;
            case 1:
                dataColumnCount = 2;
                question = "Какой максимально допустимый вес оборудования клиента в стойке, кг?";
                answers.push({id: 11, text: "450"});
                answers.push({id: 12, text: "700"});
                answers.push({id: 13, text: "600"});
                answers.push({id: 14, text: "800"});
                break;
            case 2:
                dataColumnCount = 2;
                question = "Что нужно сделать после установки/демонтажа/переноса оборудования?";
                answers.push({id: 21, text: "Покинуть ЦОД"});
                answers.push({id: 22, text: "Сообщить дежурному ЦОД информацию о перемещенном оборудовании"});
                break;
            case 3:
                dataColumnCount = 2;
                question = "Можно ли хранить посторонние предметы в стойках, серверных и других технических помещениях?";
                answers.push({id: 31, text: "Да, если это необходимо"});
                answers.push({id: 32, text: "Нет"});
                break;
            case 4:
                question = "Как должно быть размещено оборудование в стойке для правильной организации воздушных потоков?";
                answers.push({id: 41, text: "Забор воздуха из горячего коридора, выдув в холодный"});
                answers.push({id: 42, text: "Забор воздуха из холодного коридора, выдув в горячий"});
                answers.push({id: 43, text: "Расположение забора воздуха неважно для размещения"});
                break;
            case 5:
                question = "В каких случаях требуется устанавливать заглушки в стойки? Если установка необходима, где можно взять заглушки?";
                answers.push({id: 51, text: "Необязательно, они только для внешнего вида"});
                answers.push({
                    id: 52,
                    text: "Всегда, когда есть свободные юниты. Заглушки небольших размеров доступны в помещении 210. Заглушки больших размеров доступны у дежурных ЦОД."
                });
                break;
            case 6:
                question = "Разрешен ли клиентам доступ под фальшпол?";
                answers.push({id: 61, text: "Запрещен"});
                answers.push({id: 62, text: "Разрешен"});
                break;
            case 7:
                dataColumnCount = 2;
                question = "Что нужно сделать в случае пожарной тревоги?";
                answers.push({id: 71, text: "Попытаться самостоятельно найти и потушить возгорание"});
                answers.push({
                    id: 72,
                    text: "Немедленно эвакуироваться по путям эвакуации, не пользоваться лифтами и полноростовым турникетом"
                });
                break;
            case 8:
                question = "Где находится место сбора при эвакуации?";
                answers.push({id: 81, text: "Сотрудник ЦОД организует место сбора на автобусном кольце"});
                answers.push({id: 82, text: "Сотрудник ЦОД организует место сбора во внутреннем дворе"});
                answers.push({id: 83, text: "Сотрудник ЦОД организует место сбора на ресепшене"});
                answers.push({id: 84, text: "Правилами не предусмотрено организованное место сбора"});
                break;
            case 9:
                question = "Где можно ознакомиться с рекомендованной схемой подключения оборудования в стойке?";
                answers.push({id: 91, text: "На сайте компании и на стенах в серверных"});
                answers.push({id: 92, text: "В руководстве клиента и на сайте компании"});
                answers.push({id: 93, text: "На стенах в серверных и руководстве клиента"});
                answers.push({id: 94, text: "На планшете на входе в ЦОД и в руководстве клиента"});
                break;
            case 10:
                dataColumnCount = 2;
                question = "Где следует носить электронный пропуск и идентификационную ленту?";
                answers.push({id: 101, text: "На видном месте"});
                answers.push({id: 102, text: "В кармане"});
                break;
            case 11:
                question = "Можно ли передавать пропуск другому лицу?";
                answers.push({id: 111, text: "Запрещено"});
                answers.push({id: 112, text: "Разрешено, если он из этой же организации"});
                break;
            case 12:
                question = "За какое время нужно отправлять заявки на ввоз/вывоз, разовый доступ?";
                answers.push({id: 121, text: "За 3 рабочих дня на адрес support@linxdatacenter.com"});
                answers.push({id: 122, text: "Клиентам ЦОД не требуется отправка такой заявки"});
                answers.push({id: 123, text: "За 1 рабочий день на адрес support@linxdatacenter.com"});
                answers.push({id: 124, text: "Непосредственно перед приходом на охране"});
                break;
            case 13:
                dataColumnCount = 2;
                question = "Где нужно распаковывать оборудование?";
                answers.push({id: 131, text: "На ресепшене"});
                answers.push({id: 132, text: "В машинном зале"});
                answers.push({id: 133, text: "В коридоре"});
                answers.push({id: 134, text: "В помещении 210"});
                break;
            case 14:
                question = "Куда нужно утилизировать мусор?";
                answers.push({id: 141, text: "Весь мусор надо отдать дежурному ЦОД"});
                answers.push({id: 142, text: "Сложить в коридоре"});
                answers.push({id: 143, text: "Самостоятельно вывезти весь мусор"});
                answers.push({id: 144, text: "Мелкий мусор - в урны, крупный отдать дежурному ЦОД"});
                break;
            case 15:
                break;
            default:
                console.warn("Question switcher is out of range")
        }
        for (let i = 0; i < answers.length / 2; i++) {
            let r = Math.floor(Math.random() * answers.length);
            [answers[i], answers[r]] = [answers[r], answers[i]];
        }
        const page = <p style={{textAlign: "center"}}>
                            <span style={{fontSize: "18pt", fontFamily: "verdana, geneva, sans-serif"}}>
                                        Вы успешно ответили на контрольные вопросы!</span></p>;
        const answerItems = this.state.question !== 15 ? answers.map(item => <AnswerItem key={item.id} id={item.id}
                                                                                         item={item.text}
                                                                                         next={this.NextPage}/>) : page;
        return <div className="jfForm-wrapper" style={{paddingBottom: "96px", paddingTop: "46px"}}>
            <div style={{justifyContent: 'center'}}>
                <Modal isOpen={this.state.showModal} contentLabel="WrongAnswer"
                       style={customStyles} ariaHideApp={false}>
                    <div>
                        <div style={{alignContent: "center"}}>
                            <img src={process.env.PUBLIC_URL + "/assets/img/wrong.png"}
                                 style={{maxHeight: "200px", maxWidth: "200px"}}
                                 alt="Wrong Answer!"/>
                        </div>
                        <div style={{alignContent: "center"}}>
                            <br/>
                            <span style={{color: "white"}}>
                            {this.state.modalLine1}
                                <hr/>
                            Правильный ответ:<br/>
                            <h4>
                            {this.state.modalLine2}
                            </h4>
                        </span>
                        </div>
                        <div className="jfWelcome-buttonWrapper">
                            <button className="jfWelcome-button"
                                    onClick={() => this.handleModal(false)}>Далее&nbsp;
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
            <div className="jfForm-backgroundContainer"/>
            <ul className="jfForm-all  transition-all-03s">
                <li className="form-line" data-type="control_widget">
                    <div className="jfCard-wrapper isVisible transition-all-015s" style={{width: "100%"}}>
                        <div className="jfCard" data-type="control_widget" style={{maxWidth: "832px"}}>
                            <div className="jfCard-question">
                                <label htmlFor="input_66" className="jfQuestion-label isCenterAlign"
                                       id="label_66" style={{display: this.state.question === 15 ? 'none' : 'block'}}>
                                    <span className="jsQuestionLabelContainer">{question}</span>
                                    <span className="jfRequiredStar">*
                                            <span className="jfRequiredStar-message" style={{maxWith: "none"}}>
                                                Это поле необходимо для заполнения.</span></span></label><span
                                className="jfQuestion-description" id="input_66_description"/>
                                <div className="jfQuestion-fields form-single-column" data-component="radio"
                                     id="answers" data-columncount={dataColumnCount}>{answerItems}
                                </div>
                            </div>
                            <div className="jfCard-actions">
                                <button type="button" className="jfInput-button forPrev u-left"
                                        data-component="button" onClick={this.PrevPage}>НАЗАД
                                </button>
                                <button type="button" name="next" className="jfInput-button forNext u-right"
                                        data-component="button" onClick={this.NextPage}>ДАЛЕЕ
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

export default Questions;
