import React, { useEffect, useState } from "react";
import styles from "../Slide.module.scss";
import MySelect, { IOption } from "@/shared/select/MySelect";
interface IntervalsRunProps {
  register: any;
  setValue?: any;
}
export default function IntervalsRun({
  register,
  setValue,
}: IntervalsRunProps) {
  const [inputFields, setInputFields] = useState([""]);
  const [isTakedCount, setIsTakedCount] = useState(false);
  const [isOtherount, setIsOtherCount] = useState(false);
  const [selectedIntervalCount, setSelectedIntervalCount] =
    useState<IOption | null>(null);

  useEffect(() => {
    if (selectedIntervalCount) {
      const count = parseInt(selectedIntervalCount.value);
      const newInputFields = Array.from(
        { length: count },
        (_, index) => `Input ${index + 1}`
      );
      setInputFields(newInputFields);
    }
  }, [selectedIntervalCount]);
  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "other", label: "Другое значение" },
  ];
  const handleSelectChange = (selectedOption: any) => {
    if (selectedOption.value === "other") {
      setIsOtherCount(true);
      setIsTakedCount(false);
    } else {
      setSelectedIntervalCount(selectedOption);
      setValue("intervalsCount", selectedOption);
      setIsTakedCount(true);
    }
  };

  return (
    <>
      <div>
        <p>Колличество интервалов</p>
        {isOtherount ? (
          <input
            type="text"
            placeholder="Введите количество интервалов"
            className={styles.countInput}
            onChange={(e) => {
              const count = parseInt(e.target.value);
              if (count === 0 || count < 0 || count > 100) {
                setIsTakedCount(false);
              } else {
                const newInputFields = Array.from(
                  { length: count },
                  (_, index) => `Input ${index + 1}`
                );
                setInputFields(newInputFields);
                setIsTakedCount(true);
              }
            }}
          />
        ) : (
          <MySelect
            register={register}
            options={options}
            selectedOption={selectedIntervalCount}
            setSelectedOption={handleSelectChange}
            className={styles.Select}
            placeholder="Количество интервалов"
          />
        )}
      </div>
      {isTakedCount ? (
        <ol className={styles.inputsList}>
          <p className={styles.inputsList__Labels}>
            <span>величина интервала (м)</span>
            <span>Время (с)</span>
            <span>Отдых (с)</span>
          </p>
          {inputFields.map((input: any, index: number) => (
            <li className={styles.inputsList__Item} key={index}>
              <div className={styles.inputsList__Item__InputsRow}>
                <input
                  type="text"
                  {...register(`intervals.${index}.distance`)}
                  className={styles.inputsList__Item__Input}
                  placeholder={`величина интервала (м)`}
                />
                <input
                  type="text"
                  className={styles.inputsList__Item__Input}
                  placeholder={`время`}
                  {...register(`intervals.${index}.workTime`)}
                />
                <input
                  key={index}
                  type="text"
                  className={styles.inputsList__Item__Input}
                  placeholder={`отдых`}
                  {...register(`intervals.${index}.restTime`)}
                />
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <></>
      )}
    </>
  );
}
