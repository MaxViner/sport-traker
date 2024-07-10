export type Workout ={
    workoutDate: Date,
    workoutType: string;
}
export type RunningWorkout = Workout & {
    runningDuration:string;
    runningType:string;
    runningResults:{
        distance:string,
        workTime:string,
        restTime:string,
    }[]
  };
  

 export const fakeRunningWorkouts: RunningWorkout[] = [
    {
      workoutDate: new Date(),
      workoutType: "Running",
      runningDuration: "30 minutes",
      runningType: "Outdoor",
      runningResults: [
        { distance: "5 km", workTime: "25 minutes", restTime: "5 minutes" },
        { distance: "3 km", workTime: "15 minutes", restTime: "3 minutes" },
      ],
    },
    {
      workoutDate: new Date(),
      workoutType: "Running",
      runningDuration: "45 minutes",
      runningType: "Treadmill",
      runningResults: [
        { distance: "7 km", workTime: "35 minutes", restTime: "7 minutes" },
        { distance: "4 km", workTime: "20 minutes", restTime: "4 minutes" },
      ],
    },
    {
      workoutDate: new Date(),
      workoutType: "Running",
      runningDuration: "60 minutes",
      runningType: "Trail",
      runningResults: [
        { distance: "10 km", workTime: "50 minutes", restTime: "10 minutes" },
        { distance: "6 km", workTime: "30 minutes", restTime: "6 minutes" },
      ],
    },
  ];
  
  console.log(fakeRunningWorkouts);