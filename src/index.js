const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const {  sendBasicEmail } = require('./services/email-services');

const cron = require('node-cron');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, ()=> {
        console.log(`Server Started at port ${PORT}`);

        sendBasicEmail(
            'support@admin.com',
            'airlineremainderservice24@gmail.com',
            'This is a testing email',
            'Hey, how are you, I hope you like this support'
        );

        cron.schedule('*/2 * * * *', () => {
            console.log('running a task every two minutes');
          });
    });
}

setupAndStartServer();