import React from "react";
import styles from "../WorkoutScheduler.module.scss";
interface IcalendarCeils {
  currentDate: any;
  setSelectedDate: any;
  selectedDate: Date | null;
}
export default function CalendarCells({
  currentDate,
  setSelectedDate,
  selectedDate,
}: IcalendarCeils) {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const handleCellClick = (date: Date) => {
    console.log(date.getDate());
    setSelectedDate(date);
  };
  const generateCalendarCells = () => {
    const cells = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const currentDay = new Date().getDate();
      const isActive = day === currentDay;
      const isSeected = selectedDate && day === selectedDate.getDate();
      const cellClassName = isActive
        ? `${styles.Cell} ${styles.ActiveCell}`
        : isSeected
        ? `${styles.Cell} ${styles.selectedCeil}`
        : styles.Cell;
      cells.push(
        <div
          key={day}
          onClick={() => handleCellClick(date)}
          className={cellClassName}
        >
          {date.getDate()}
        </div>
      );
    }
    return cells;
  };
  return <div className={styles.CellsWrapper}>{generateCalendarCells()}</div>;
}
