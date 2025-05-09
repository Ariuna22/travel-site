import { useState, useEffect } from "react";
import LoaderPage from "./LoaderPage";
import './AboutUs.css';

function AboutUs() {
  const [stateLoader, setStateLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setStateLoader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about">
      <h2>Контакты</h2>

      <p className="paragraph">
        Мы исследуем всю Америку от шумных мегаполисов до диких национальных парков.<br />
        Наша цель — показать, что каждое место заслуживает внимания: будь то скрытая тропа в горах или уютное кафе в маленьком городке.<br />
        Мы едем, чтобы вдохновлять — и приглашаем вас в наше путешествие! 🧳🚗
      </p>

      <p className="paragraph">
        <strong>Phone:</strong> (929) 995-8842 Найдан
      </p>

      <p className="paragraph">
        <a href="https://t.me/Naidash" target="_blank" rel="noopener noreferrer">
          Telegram
        </a>
      </p>

      <p className="paragraph">
        <a href="https://instagram.com/naidandashadondokov" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </p>

      {stateLoader && <LoaderPage />}
    </div>
  );
}

export default AboutUs;



