"use client";
import React, { useState } from "react";
import WorkoutScheduler from "./calendar/Calendar";
import MyPlan from "./myPlan/MyPlan";

export default function MyWorkoutsPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <>
      <WorkoutScheduler 
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></WorkoutScheduler>
      <MyPlan selectedDate={selectedDate} />
    </>
  );
}
