import React from "react";
import styles from "../WorkoutScheduler.module.scss";
interface IMonthHeader {
  currentDate: Date;
  onMonthChange: (newDate: Date) => void;
}
const CalendarHeader = ({ currentDate, onMonthChange }: IMonthHeader) => {
  const currentMonth = currentDate.getMonth();

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    onMonthChange(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    onMonthChange(newDate);
  };

  const getMonthName = (monthNumber: number) => {
    const date = new Date();
    date.setMonth(monthNumber);
    const monthName = date.toLocaleString("en", { month: "short" });
    const dayOfWeek = date.toLocaleString("en", { weekday: "short" });
    const year = date.getFullYear();

    return (
      <div className={styles.monthName_and_eyar}>
        <p> {monthName}</p>
        <div className={styles.dayOfWeek_year}>
          <p>{dayOfWeek}</p>
          <p>{year}</p>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.WorkoutScheduler__Header}>
      <div className={styles.currentMonth__Wrapper}>
        {getMonthName(currentMonth)}
      </div>
      <div className={styles.btns}>
        <button className={styles.btn} onClick={handlePrevMonth}>
          {"<"}
        </button>
        <button className={styles.btn} onClick={handleNextMonth}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
