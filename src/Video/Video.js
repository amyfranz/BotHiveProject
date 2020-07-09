import React from "react";
import "./Video.css";

export default function Video() {
  return (
    <div className="video">
      <iframe
        title="BotHiveIntro"
        src="https://www.youtube.com/embed/LurTQoCnPj4?autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&cc_load_policy=1&iv_load_policy=3&theme=light&fs=0&color=white&controls=0&disablekb=1"
        width="560"
        height="315"
        frameBorder="0"
      ></iframe>
      <p>
        <b>Bot-Hive</b> is a new online platform designed to make the process of
        getting started with <b>Robotics</b> & <b>Automation</b> technology,
        faster and simpler for <b>SMEs</b>.
      </p>
    </div>
  );
}
