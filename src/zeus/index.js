import {one_sec, msg} from './constants';
import cron from 'node-cron';

cron.schedule('*/5 * * * * *', () => {
    console.log(' hello from the watch mode::', msg);
});

