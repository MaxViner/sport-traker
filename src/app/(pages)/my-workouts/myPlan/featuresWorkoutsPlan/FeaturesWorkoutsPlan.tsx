import React from "react";
import styles from "./FeaturesWorkoutsPlan.module.scss";
import { Workout, fakeRunningWorkouts } from "@/app/api/models/Workout.type";
import FeatureWorkoutItem from "../workoutPlanItem/WorkoutPlanItem";
export default function FeaturesWorkoutsPlan() {
  return (
    <div className={styles.FeaturesWorkoutsPlan}>
      <h3 className={styles.FeaturesWorkoutsPlan__Title}>
        Мои предстоящие тренировки
      </h3>
      <ul className={styles.FeaturesWorkoutsPlan__List}>
        {fakeRunningWorkouts
          .slice(0, 3)
          .map((workout: Workout, index: number) => {
            return <FeatureWorkoutItem workout={workout} key={index} />;
          })}
      </ul>
    </div>
  );
}
