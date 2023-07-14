import moment from 'moment';

export const verifyFutureDate = (visibleDatesInCalendar: any) => {
  const today = moment().subtract(0, 'day');
  return visibleDatesInCalendar.isBefore(today);
};