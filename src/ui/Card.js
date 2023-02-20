import React, { useState, useEffect } from "react";
import classes from "./Card.module.css";
import Favorite from "./Favorite";

const Card = (props) => {
  const [sido, setSido] = useState(props.sido);
  const [dustData, setDustData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const url = `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=${props.sido}&pageNo=1&numOfRows=100&returnType=json&serviceKey=t0H9LyKbr4AS6R2PM9aOdq1rV8yJXB%2FtszCxX4Y7lx20eEbQjYoDjHFakqMW5bzFSWyyspE8Whq3wJYCAw1opg%3D%3D&ver=1.0`;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setDustData(data);
      setIsLoading(false);
    };
    fetchData();
  }, [props.sido]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div className={classes.block}>
      <div>
        {dustData ? (
          <div className={classes.card}>
            <div className={classes.title}>
              <span>
                {" "}
                {dustData["response"]["body"]["items"][1]["stationName"]}{" "}
              </span>
              <span>
                {" "}
                {dustData["response"]["body"]["items"][1]["sidoName"]}{" "}
              </span>
            </div>
            <Favorite className="favorite" />
            <div> {dustData["response"]["body"]["items"][1]["pm25Grade"]} </div>
            <div> 미세먼지 수치: {dustData["response"]["body"]["items"][1]["pm25Value"]} </div>
            <div> {dustData["response"]["body"]["items"][1]["dataTime"]} </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
        {dustData ? (
          <div className={classes.card}>
            <div className={classes.title}>
              <span>
                {" "}
                {dustData["response"]["body"]["items"][2]["stationName"]}{" "}
              </span>
              <span>
                {" "}
                {dustData["response"]["body"]["items"][2]["sidoName"]}{" "}
              </span>
            </div>
            <Favorite />
            <div> {dustData["response"]["body"]["items"][2]["pm25Grade"]} </div>
            <div className={classes.dustValue}> 미세먼지 수치: {dustData["response"]["body"]["items"][2]["pm25Value"]} </div>
            <div className={classes.time}> {dustData["response"]["body"]["items"][2]["dataTime"]} </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Card;
