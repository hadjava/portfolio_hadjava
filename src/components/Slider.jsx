import { useState } from "react";
import "./slider.css";

const images = [
  {
    url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=755",
    title: "MyPC",
  },
  {
    url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1184",
    title: "Teamwork",
  },
  {
    url: "https://images.unsplash.com/photo-1582954820640-42c30eeabe35?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    title: "Hardware",
  },
  {
    url: "https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    title: "React",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=663",
    title: "AI",
  },
];

function Slider() {
  const [activeIndex, setActiveIndex] = useState(3); // по умолчанию 4-й активный

  return (
    <div className="slider-container">
      {images.map((item, index) => (
        <div
          key={index}
          className={`slide ${index === activeIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${item.url})` }}
          onClick={() => setActiveIndex(index)}
        >
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Slider;