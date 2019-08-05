class FactoryPattern{
    createBall = (type) => {
        var ball;
        if (type == 'football') {
            ball = new Football();
        }
        else if (type == 'basketball') {
            ball = new Basketball();
        }
        ball.roll = () => {
            console.log('the ' + `${type}` + ' is rolled');
        }
        return ball;
    }

   
}

class Basketball{
    constructor(){
        this._type = 'basketball';
    }

    bounce = () => {
        console.log('the ' + `${this._type}` + ' is bounced');
    }
}


class Football{
    constructor(){
        this._type = 'football';
    }

    kick = () => {
        console.log('the ' + `${this._type}` + ' is kicked');
    }
}

const ShowFactory = new FactoryPattern();
console.log('This is an example of Factory Pattern');
const FootBall = ShowFactory.createBall('football');
const BasketBall = ShowFactory.createBall('basketball');

FootBall.roll();
BasketBall.roll();
FootBall.kick();
BasketBall.bounce();