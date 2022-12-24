import dayjs, { Dayjs } from 'dayjs';

const getZeroLocalString = (date: Dayjs) =>
  dayjs(
    new Date(
      date.year(),
      date.month(),
      date.date(),
      Math.trunc(date.utcOffset() / 60),
      date.utcOffset() % 60
    )
  ).toISOString();

export default getZeroLocalString;
