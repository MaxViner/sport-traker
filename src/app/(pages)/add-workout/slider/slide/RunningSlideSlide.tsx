"use client";
import React, { useState } from "react";
import styles from "./Slide.module.scss";
import MySelect from "@/shared/select/MySelect";
import { RaningTypes, TraningTypes, runOptions } from "./runOptions.const";
import IntervalsRun from "./formContent/IntervalsRun";
import { useForm } from "react-hook-form";
interface slideProps {
  slideName: string;
}

export default function RunningSlide({ slideName }: slideProps) {
  const options = slideName === TraningTypes.run ? runOptions : [];
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const [selectedType, setSelectedType] = useState("");
  const { register, handleSubmit, setValue, watch } = useForm();
  const RunningType = watch("RunningType");
  return (
    <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
      <input type="date" placeholder="date" {...register(`date`)} />
      <MySelect
        options={options}
        className={styles.Select}
        register={register}
        placeholder="тип бега"
        fieldName={"RunningType"}
        setValue={setValue}
        selectedOption={selectedType}
        setSelectedOption={setSelectedType}
      />
      {RunningType === RaningTypes.intervals ? (
        <IntervalsRun register={register} setValue={setValue} />
      ) : (
        <></>
      )}
      <button type="submit" className={styles.saveBtn}>
        save
      </button>
    </form>
  );
}
