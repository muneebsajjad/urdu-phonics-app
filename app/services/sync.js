import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import BackgroundJob from "react-native-background-job";
import { getData } from '../database/DAL';


const JobKey = "sync_user_db";


// export default class SyncLogs extends Component {
export function syncUserLog() {
    BackgroundJob.register({
        jobKey: JobKey,
        job: () => {
            console.log("Background Job fired!");
            getData();
        }
    });

    BackgroundJob.schedule({
        jobKey: JobKey,
        period: 600000,
        timeout: 5000,
        //networkType: BackgroundJob.NETWORK_TYPE_UNMETERED
    });

}

// }
