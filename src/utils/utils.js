import * as moment from "moment";
//Dynamic Timestamp
export const getCustomTime = (time) => {
    var duration = moment.duration(new moment().diff(new moment(time)));
    return `${duration.humanize()} ago`;
  }

