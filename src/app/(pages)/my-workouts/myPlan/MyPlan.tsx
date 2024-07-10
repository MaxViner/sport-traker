import React from "react";
import DaylyPlan from "./daylyPlan/DaylyPlan";
import FeaturesWorkoutsPlan from "./featuresWorkoutsPlan/FeaturesWorkoutsPlan";
interface MyPlanProps {
  selectedDate: Date | null;
}
export default function MyPlan({ selectedDate }: MyPlanProps) {
  return (
    <div>
      {selectedDate ? (
        <DaylyPlan selectedDate={selectedDate} />
      ) : (
        <FeaturesWorkoutsPlan />
      )}
    </div>
  );
}
