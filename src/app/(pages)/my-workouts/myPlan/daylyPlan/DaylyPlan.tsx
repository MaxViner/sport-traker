import React from "react";
import styles from "./DaylyPlan.module.scss";
import WorkoutPlanItem from "../workoutPlanItem/WorkoutPlanItem";
import { fakeRunningWorkouts } from "@/app/api/models/Workout.type";

interface DaylyPlanProps {
  selectedDate: Date;
}

export default function DaylyPlan({ selectedDate }: DaylyPlanProps) {
  console.log("====================================");
  console.log(selectedDate.getDate());
  console.log(fakeRunningWorkouts);
  const date = new Date();
  const monthName = date.toLocaleString("en", { month: "short" });
  const workoutByDay = fakeRunningWorkouts.find(
    (workout) => workout.workoutDate.getDate() === selectedDate.getDate()
  );
  return (
    <div className={styles.DaylyPlan}>
      <h3 className={styles.DaylyPlan__Title}>
        тренировки на {selectedDate.getDate()} {monthName}
      </h3>
      <WorkoutPlanItem workout={workoutByDay} />
      <button>Смотреть предстоящие тренировки</button>
    </div>
  );
}
