import React from 'react';

class Rules extends React.Component {
    constructor(props) {
        super(props);
        if (props.prev === 7)
            this.state = {
                rule: 10,
                isFinish: false
            };
        else
            this.state = {
                rule: 1,
                isFinish: false
            };
        this.myRef = React.createRef();
    }

    OnScroll = () => {
        const bottom = this.myRef.current.scrollHeight - this.myRef.current.scrollTop.toFixed() === this.myRef.current.clientHeight;
        if (bottom) this.setState({isFinish: true});
    };
    NextPage = () => {
            if (this.state.rule === 10)
                this.props.incr(1);
            else {
                this.myRef.current.scrollTop = 0;
                this.setState({
                    rule: this.state.rule + 1,
                    isFinish: false
                });
            }
    };
    PrevPage = () => {
        if (this.state.rule === 1)
            this.props.incr(-1);
        else {
            this.myRef.current.scrollTop = 0;
            this.setState({
                rule: this.state.rule - 1,
                isFinish: false
            });
        }
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(!this.state.isFinish) {
            setTimeout(function(){
            if (this.myRef.current.clientHeight === this.myRef.current.scrollHeight)
                this.setState({isFinish: true});
            }.bind(this),200);
        }
    }
    componentDidMount() {
        if(!this.state.isFinish) {
            setTimeout(function(){
            if (this.myRef.current.clientHeight === this.myRef.current.scrollHeight)
                this.setState({isFinish: true});
            }.bind(this),200);
        }
    }

    render() {
        let url = process.env.PUBLIC_URL;
        switch (this.state.rule) {
            case 1:
                url += "/assets/img/ch1.5badff0a39a2e8.32290425.jpg";
                break;
            case 2:
                url += "/assets/img/ch2.5badffa70953e1.04733664.jpg";
                break;
            case 3:
                url += "/assets/img/ch3.5bcd88966501a7.20567509.jpg";
                break;
            case 4:
                url += "/assets/img/ch4.5badf934ea2480.06392657.jpg";
                break;
            case 5:
                url += "/assets/img/ch5.5badfa39306c54.71933058.jpg";
                break;
            case 6:
                url += "/assets/img/ch6.5bcd88b13db4e9.18796229.jpg";
                break;
            case 7:
                url += "/assets/img/ch7.5bae0149d58b46.63532790.jpg";
                break;
            case 8:
                url += "/assets/img/ch8.5badfcd3068219.33130410.jpg";
                break;
            case 9:
                url += "/assets/img/ch9.5badfd346f21e8.02487303.jpg";
                break;
            case 10:
                url += "/assets/img/ch10.5badfe1662dff0.31122720.jpg";
                break;
            default:
                console.warn("Rule switcher is out of range")
        }
        return <div className="jfForm-wrapper" style={{paddingBottom: "54px", paddingTop: "46px"}}>
            <div className="jfForm-backgroundContainer"/>
            <ul className="jfForm-all  transition-all-03s">
                <li className="form-line" data-type="control_widget">
                    <div className="jfCard-wrapper isVisible transition-all-015s" style={{width: "100%"}}>
                        <div className="jfCard" data-type="control_widget" style={{maxWidth: "832px"}}>
                            <div className="jfCard-question" style={{padding: 0}}>
                                <div className="jfQuestion-fields imageRules" data-component="image"
                                     onScroll={!this.state.isFinish ? this.OnScroll : null} ref={this.myRef}>
                                    <div className="jfField" data-type="image">
                                        <div className="jfImage-wrapper isCenterAlign">
                                            <div className="jfImage-container">
                                                <img alt="" className="form-image jfImage isHigh" src={url}
                                                     height="2115px" width="618px" data-component="image"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jfCard-actions">
                                <button className="jfInput-button forPrev u-left" type="button"
                                        onClick={this.PrevPage}>НАЗАД
                                </button>
                                <button className="jfInput-button forNext u-right" data-component="button"
                                        type="button" id="next" disabled={!this.state.isFinish}
                                        onClick={this.NextPage}>ДАЛЕЕ
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

export default Rules;
