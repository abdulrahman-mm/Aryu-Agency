import React from "react";
import Clock from "react-clock";
import "./clock.css";
import "react-clock/dist/Clock.css";
import { useState, useEffect } from "react";

const ContactUs_WorldClock = () => {
  const [IndiaTime, setIndiaTime] = useState(new Date());
  const [londonTime, setLondonTime] = useState("");
  const [moscowTime, setMoscowTime] = useState("");
  const [japanTime, setJapanTime] = useState("");
  const [newyorkTime, setnewyorkTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => setIndiaTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const time = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date());
      setLondonTime(time);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000); // Update every second
    return () => clearInterval(timer); // Clean up on unmount
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const time = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Tokyo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date());
      setJapanTime(time);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const updateTime = () => {
      const time = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Moscow",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date());
      setMoscowTime(time);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const updateTime = () => {
      const time = new Intl.DateTimeFormat("en-GB", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date());
      setnewyorkTime(time);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);


  return (
    <div className="px-20 mt-10 pb-20">

    <p className="font-lato font-semibold text-3xl">Who's when?</p>

      <div className="flex gap-5 justify-between mt-10">
        <div className="flex gap-5 items-center">
          <Clock value={IndiaTime} />
          <div className="flex flex-col gap-2">
            <p className="font-lato font-semibold text-xl">INDIA</p>
            <div className="flex text-gray-600">
              <p>
                {IndiaTime.getHours() >= 10
                  ? IndiaTime.getHours()
                  : `0${IndiaTime.getHours()}`}
              </p>
              <p>:</p>
              <p>
                {IndiaTime.getMinutes() >= 10
                  ? IndiaTime.getMinutes()
                  : `0${IndiaTime.getMinutes()}`}
              </p>
              <p>:</p>
              <p>
                {IndiaTime.getSeconds() >= 10
                  ? IndiaTime.getSeconds()
                  : `0${IndiaTime.getSeconds()}`}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <Clock value={londonTime} />
          <div className="flex flex-col gap-2 ">
            <p className="font-lato font-semibold text-xl">LONDON</p>
            <p className="text-gray-600">{londonTime}</p>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <Clock value={moscowTime} />
          <div className="flex flex-col gap-2">
            <p className="font-lato font-semibold text-xl">MOSCOW</p>
            <p className="text-gray-600">{moscowTime}</p>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <Clock value={japanTime} />
          <div className="flex flex-col gap-2">
            <p className="font-lato font-semibold text-xl">JAPAN</p>
            <p className="text-gray-600">{japanTime}</p>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <Clock value={newyorkTime} />
          <div className="flex flex-col gap-2">
            <p className="font-lato font-semibold text-xl">NEW YORK</p>
            <p className="text-gray-600">{newyorkTime}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUs_WorldClock;
