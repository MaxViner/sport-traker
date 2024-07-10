import { Workout } from "@/app/api/models/Workout.type";
import React from "react";
import styles from "./FeatureWorkoutItem.module.scss";
import { formatDateTo_DayName } from "@/helpers/timeFormaters";
interface FeatureWorkoutItemProps {
  workout?: Workout;
  key?: number;
}
export default function WorkoutPlanItem({
  workout,
  key,
}: FeatureWorkoutItemProps) {
  return (
    <div className={styles.FeatureWorkoutItem} key={key}>
      {workout ? (
        <>
          <p>{workout.workoutType}</p>
          <p>{formatDateTo_DayName(workout.workoutDate)}</p>
        </>
      ) : (
        <>
          <p>На этот день не запланировано тренировки</p>
          <button>добавить</button>
        </>
      )}
    </div>
  );
}
