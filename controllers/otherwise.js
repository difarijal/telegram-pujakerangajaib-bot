'use strict';

const   Telegram = require('telegram-node-bot');

class OtherwiseController extends Telegram.TelegramBaseController {
    handler($) {
        $.sendMessage('Maap bray ga ngerti');
    }
}

module.exports = OtherwiseController;