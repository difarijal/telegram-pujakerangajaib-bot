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
        let validate_word_1 = message[0].toLowerCase();
        let lastChar = $.message.text.substr($.message.text.length - 1);

        if(validate_word_1 === 'apakah' && lastChar === '?'){
            $.sendMessage(textArray[randomNumber]);
        }else{
            //$.sendMessage('Lau ngomong apa sob?');
        }
    }
}
module.exports = OtherwiseController;