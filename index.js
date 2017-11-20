'use strict';

const Telegram                  = require('telegram-node-bot');
const TelegramBaseController    = Telegram.TelegramBaseController;
const tg                        = new Telegram.Telegram('454031224:AAFdztqGnn6ZfPKt88rvHBu-m1UbmFlmM8w', {
                                    workers: 1
                                });
const PingController            = require('./controllers/ping');
const OtherwiseController       = require('./controllers/otherwise');


tg.router.when(new Telegram.TextCommand('/ping', 'pingCommand'), new PingController())
    .otherwise(new OtherwiseController());