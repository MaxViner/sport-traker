"use client";
import React, { use, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/navigation";

import Image from "next/image";
import styles from "./sliderStyle.module.scss";
import { Navigation, EffectFade } from "swiper/modules";
import run from "../../../../assets/img/run.jpg";
import swim from "../../../../assets/img/swim.jpg";
import gym from "../../../../assets/img/gym.jpg";
import RunningSlide from "./slide/RunningSlideSlide";
import { TraningTypes } from "./slide/runOptions.const";

export default function AddWorkoutSlider() {
  const types = [
    { title: TraningTypes.run, img: run },
    { title: TraningTypes.swiming, img: swim },
    { title: TraningTypes.gym, img: gym },
  ];

  return (
    <div className={styles.SliderWrapper}>
      <Swiper
        className={styles.swiper}
        modules={[Navigation, EffectFade]}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
      >
        {types.map((workout: any, index: number) => {
          return (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <h2 className={styles.Title}>{workout.title}</h2>
              <Image
                src={workout.img}
                alt={"sliderComponent.media"}
                className={styles.image}
                width={600}
                height={400}
              />

              {workout.title === TraningTypes.run ? (
                <RunningSlide slideName={workout.title}></RunningSlide>
              ) : (
                <></>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
