"use client";
import React, { useState } from "react";
import styles from "./WorkoutScheduler.module.scss";
import CalendarHeader from "./montchHeader/CalendarHeader";
import CalendarCells from "./calendarCells/CalendarCells";

interface WorkoutSchedulerProps {
  selectedDate: Date | null;
  setSelectedDate: any;
}

const WorkoutScheduler = ({
  selectedDate,
  setSelectedDate,
}: WorkoutSchedulerProps) => {
  const [events, setEvents] = useState<any>([]);
  const [inputValue, setInputValue] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const onMonthChange = (newDate: Date) => {
    setCurrentDate(newDate);
  };
  const handleAddEvent = () => {
    if (inputValue && selectedDate) {
      setEvents((prevEvents: any) => [
        ...prevEvents,
        { date: selectedDate, description: inputValue },
      ]);
      setInputValue("");
    }
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div>
      <div className={styles.Wrapper}>
        <CalendarHeader
          onMonthChange={onMonthChange}
          currentDate={currentDate}
        />
        <div key="dayNames" className={styles.DayNamesRow}>
          {daysOfWeek.map((day) => (
            <div key={day} className={styles.DayNameCell}>
              {day}
            </div>
          ))}
        </div>
        <CalendarCells
          setSelectedDate={setSelectedDate}
          currentDate={currentDate}
          selectedDate={selectedDate}
        />
      </div>
      <div>
        {events.map((event: any, index: number) => (
          <div key={index}>
            <p>Date: {event.date.toDateString()}</p>
            <p>Description: {event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutScheduler;
