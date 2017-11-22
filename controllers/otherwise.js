'use strict';

const Telegram = require('telegram-node-bot');

class OtherwiseController extends Telegram.TelegramBaseController {
    handle($) {
        var textArray = [
            'Ya',
            'Tidak'
        ];
        var randomNumber = Math.floor(Math.random()*textArray.length);
        
        let message = $.message.text.split(' ');
        let validate_word = message[0].toLowerCase();
        let lastChar = $.message.text.substr($.message.text.length - 1);

        if(validate_word === 'apakah' && lastChar === '?'){
            $.sendMessage(textArray[randomNumber]);
        }else{
            //$.sendMessage('Lau ngomong apa sob?');
            console.log('No Message match with the criteria');
        }
    }
}
module.exports = OtherwiseController;