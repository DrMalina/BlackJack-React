import React from 'react';

let animation='animated flip';

/************************************    DEAL BUTTON     *******************************/

class DealBtn extends React.Component{
    handleClick=()=>{
        if (typeof this.props.onDeal === 'function') {
            this.props.onDeal(this.props.result)
        }
    }
    render(){
        if(this.props.score===0) {
            return (
                <button className='dealBtn' onClick={this.handleClick}>Deal</button>
            )
        }else {
            if(this.props.newGame===false) {
                return <button className='dealBtn disabled' disabled='true'>Deal</button>
            }else {
                return <button className='dealBtn' onClick={this.handleClick}>Deal</button>
            }
        }
    }
}

/***************************************    HIT BUTTON     *******************************/

class HitBtn extends React.Component{
    handleClick=()=>{
        if(typeof this.props.onHit === 'function'){
            this.props.onHit()
        }
    }
    render(){
        if(this.props.stand===false) {

            if(this.props.deal=== false){
                return (
                    <button className='hitBtn' disabled='true' style={{cursor: 'auto'}} onClick={this.handleClick}>Hit</button>
                )
            }else {
                if(this.props.score>21){
                    return <button className='hitBtn disabled' disabled='true'>Hit</button>
                }else {
                    return (
                        <button className='hitBtn' onClick={this.handleClick}>Hit</button>
                    )
                }
            }
        }else {
            return (
                <button className='hitBtn disabled' disabled='true'>Hit</button>
            )
        }
    }
}

/***************************************    STAND BUTTON     *******************************/

class StandBtn extends React.Component{
    handleClick=()=>{
        if(typeof this.props.onStand === 'function'){
            this.props.onStand()
        }
    }
    render(){
        if(this.props.stand===false) {

            if(this.props.deal === false) {
                return (
                    <button className='standBtn' disabled='true' style={{cursor: 'auto'}} onClick={this.handleClick}>Stand</button>
                )
            }else {
                if(this.props.score>21){
                    return <button className='standBtn disabled' disabled='true'>Stand</button>
                }
                return (
                    <button className='standBtn' onClick={this.handleClick}>Stand</button>
                )
            }
        }else {
            return (
                <button className='standBtn disabled' disabled='true' >Stand</button>
            )
        }
    }
}

/*************************************    DEALER CARDS     *******************************/

class DealerCards extends React.Component {

    render(){
        let view;
        if(this.props.display.length===0) {
            return (
                <div className='dealer'>
                    <h1 style={{fontSize: '36px', fontWeight: 'bolder'}}>Dealer's Cards:</h1>
                    <section className='cards'>
                        {
                            this.props.cards.map((element) => {
                                return (
                                    <div className='card' key={element}>
                                        <img/>
                                    </div>
                                )
                            })
                        }
                    </section>
                </div>
            )
        }else {

            let result=0;

            view = (
                <div className='dealer'>
                    <h1 style={{fontSize: '36px', fontWeight: 'bolder'}}>Dealer's Cards:</h1>
                    <ScoreDealer score={this.props.score}/>
                    <section className='cards'>
                        {
                            this.props.display.map((img, index) => {
                                if(this.props.counter>index){


                                    if(img.value==='JACK' || img.value==='QUEEN' || img.value==='KING') {
                                        result += 10
                                    }else if(img.value==='ACE') {
                                        result +=11
                                    }else {
                                        result+=Number(img.value);
                                    }

                                    return (
                                        <div className='card show animated flipInY' key={index}>
                                            <img src={img.image}/>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className='card hide' key={index}>
                                            <img src={img.image}/>
                                        </div>
                                    )
                                }
                            })
                        }
                    </section>
                </div>
            )
            if( this.props.score !== result )
                this.props.onDealerTurn( result )

        }

        return view;
    }
}

/**************************************    PLAYER CARDS     *******************************/

class PlayerCards extends React.Component{


    constructor(props){
        super(props)

        this.state = {
            cardClassHide: 'card hide',
            cardClassAnimate: 'card show animated flipInY',
            mounted: false
        }
    }

    render(){
        let view;

        if(this.props.display.length===0) {
            view = (
                <div className='player'>
                    <h1  style={{fontSize: '36px', fontWeight: 'bolder'}}>Your cards:</h1>
                    <section className='cards'>
                        {
                            this.props.cards.map((element,index) => {
                                return <div className='card' key={index}></div>
                            })
                        }
                    </section>
                </div>
            )
        }else {

            let result=0;

                view = (
                    <div className='player'>
                        <h1  style={{fontSize: '36px', fontWeight: 'bolder'}}>Your cards:</h1>
                        <section className='cards'>
                            {
                                this.props.display.map((img, index) => {
                                    if(this.props.counter>index){


                                        if(img.value==='JACK' || img.value==='QUEEN' || img.value==='KING') {
                                            result += 10
                                        }else if(img.value==='ACE') {
                                            result +=11
                                        }else {
                                              result+=Number(img.value);
                                        }

                                        return (
                                            <div className='card show animated flipInY' key={index}>
                                                <img src={img.image}/>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className='card hide' key={index}>
                                                <img src={img.image}/>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </section>
                    </div>
                )

            /*console.log(this.props.score,result)*/

            if( this.props.score !== result )
                this.props.onHit( result )

        }

        return view
    }
}

/*****************************************    SCORE PLAYER    *******************************/

class ScoreInfo extends React.Component {
    render() {

        if (this.props.stand === false) {
            if (this.props.score === 0) {
                return null
            } else if (this.props.score < 21) {
                return (
                    <div className='score'>
                        <h1>Your score is: <span className='points'> {this.props.score}</span> </h1> <br/>
                        <h2>Hit or Stand?</h2>
                    </div>
                )
            } else if (this.props.score === 21) {
                return (
                    <div className='score'>
                        <h1>Your score is: <span className='points'> {this.props.score}</span> </h1> <br/>
                    </div>
                )
            } else {
                return (
                    <div className='score'>
                        <h1>Your score is: <span className='points'> {this.props.score}</span> </h1> <br/>
                        <h2 style={{color:'red'}}>{this.props.msg}</h2>
                    </div>
                )
            }
        } else {

            if(this.props.winner==='') {
                return (
                    <div className='score'>
                        <h1>Your score is:<span className='points'> {this.props.score}</span> </h1> <br/>
                    </div>
                )
            }else if(this.props.winner==='player'){
                return (
                    <div className='score'>
                        <h1>Your score is: <span className='points'> {this.props.score}</span> </h1> <br/>
                        <h1 style={{color: '#00FF00'}}>{this.props.msg}</h1>
                    </div>
                )
            } else if(this.props.winner==='dealer'){
                return (
                    <div className='score'>
                        <h1>Your score is: <span className='points'> {this.props.score}</span> </h1> <br/>
                        <h1 style={{color: 'red'}}>{this.props.msg}</h1>
                    </div>
                )
            } else if(this.props.winner==='draw') {
                return (
                    <div className='score'>
                        <h1>Your score is: <span className='points'> {this.props.score}</span></h1> <br/>
                        <h1 style={{color: 'yellow'}}>{this.props.msg}</h1>
                    </div>
                )
            }
        }

    }
}

/*****************************************    SCORE  DEALER   *********************************/

class ScoreDealer extends React.Component {
    render(){
        return (
            <div>
                <h1>Score: <span className='points'>{this.props.score}</span></h1>
            </div>
        )
    }
}



/**************************************    GAME     *******************************/



class Game extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data: false,
            dealBtn: false,
            cardsDl:[],
            cardsPl:[],
            cards:[1,2,3,4,5],
            hitCounter: 2,
            dlCounter: 1,
            score: 0,
            scoreDl:0,
            stand: false,
            winner: '',
            msg:'',
            newGame: false
        }
    }


    componentDidMount(){
        this.startGame()
    }

    startGame = () => {
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52').then(resp=>{
            return resp.json()
        }).then(data=>{
            this.setState({
                data: data.cards
            })
        })

        this.dealerTurnInterval = setInterval(()=>{
            if(this.state.stand===true){
                if(this.state.scoreDl<17) {

                    this.setState({
                        dlCounter: this.state.dlCounter + 1
                    })

                } else {
                    clearInterval(this.dealerTurnInterval)
                    this.setState({
                        dlCounter: this.state.dlCounter
                    })

                   if(this.state.scoreDl>21){
                        this.setState({
                            winner: 'player',
                            msg: 'You win! Dealer went over 21',
                            newGame: true
                        })


                    } else if (this.state.scoreDl>0||this.state.scoreDl<=21) {
                        if(this.state.scoreDl>this.state.score){
                            this.setState({
                                winner: 'dealer',
                                msg: 'Dealer won!',
                                newGame: true
                            })

                        } else if(this.state.score>this.state.scoreDl){
                            this.setState({
                                winner: 'player',
                                msg: 'You win!',
                                newGame: true
                            })
                        } else if(this.state.score === this.state.scoreDl){
                            this.setState({
                                winner: 'draw',
                                msg: 'Draw!',
                                newGame: true
                            })
                        }
                    }
                }
            }
        },3200)
    }


    addCards=()=>{

        let startCardsDl=[];
        let startCardsPl=[];

        for (let i=0;i<5;i++){
            startCardsDl.push(this.state.data[Math.floor((Math.random() * 52) + 0)])
        }
        for (let i=0;i<5;i++){
            startCardsPl.push(this.state.data[Math.floor((Math.random() * 52) + 0)])
        }

        this.setState({
            cardsDl:[...startCardsDl],
            cardsPl:[...startCardsPl],
            stand: false,
            hitCounter: 2,
            dlCounter: 1,
            dealBtn: true,
            newGame: false,
            msg: ''


        })
        /*console.log(this.state.data[Math.floor((Math.random() * 52) + 0)]);*/
    }

    increaseCounter=()=>{
        this.setState({
            hitCounter: this.state.hitCounter+1
        })

        if(this.state.hitCounter===5){
            this.setState({
                hitCounter: 2
            })
        }
    }

    countScore=(result)=>{
        this.setState({
            score: result
        },()=>{
            if(this.state.score>21) {
                this.setState({
                    winner: 'dealer',
                    msg: 'You lost! You went over 21',
                    newGame: true
                })

            }
        })

    }

    standTour=()=>{
        this.setState({
            stand: true
        }, () => {
            this.startGame()
        })
    }

    countScoreDealer=(result)=>{
        this.setState({
            scoreDl: result
        })

    }

   /* defineWinner=()=>{
        if(this.state.scoreDl>21){
            this.setState({
                winner: 'player'
            })

            console.log(this.state.winner);

        }else if (this.state.scoreDl>0||this.state.scoreDl<21){
            if(this.state.scoreDl>this.state.score){
                this.setState({
                    winner: 'dealer'
                })
                console.log(this.state.winner);
            }
        }
    }*/

    render(){
        return(
            <div className='backgroundTable'>
                <section className='container'>
                    <DealerCards cards={this.state.cards}
                                 display={this.state.cardsDl}
                                 counter={this.state.dlCounter}
                                 score={this.state.scoreDl}
                                 newGame={this.state.newGame}
                                 onDealerTurn={this.countScoreDealer}/>
                    <PlayerCards cards={this.state.cards}
                                 display={this.state.cardsPl}
                                 counter={this.state.hitCounter}
                                 score={this.state.score}
                                 newGame={this.state.newGame}
                                 onHit={this.countScore}/>
                    <section className='buttonsGame'>
                        <HitBtn onHit={this.increaseCounter}
                                score={this.state.score}
                                deal={this.state.dealBtn}
                                stand={this.state.stand}/>
                        <StandBtn onStand={this.standTour}
                                  stand={this.state.stand}
                                  score={this.state.score}
                                  deal={this.state.dealBtn}/>
                        <DealBtn onDeal={this.addCards}
                                 score={this.state.score}
                                 newGame={this.state.newGame}
                                 stand={this.state.stand}/>
                    </section>
                    <ScoreInfo score={this.state.score}
                               stand={this.state.stand}
                               msg={this.state.msg}
                               winner={this.state.winner}/>
                </section>
            </div>
        )
    }
}

export default Game;