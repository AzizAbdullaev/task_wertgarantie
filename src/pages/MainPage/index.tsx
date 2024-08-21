import { FC, useState } from "react";
import { CountryForm } from "./components/CountryForm";
import { CountryDataTable } from "./components/CountryDataTable";
import styles from "./styles.module.css";

export const MainPage: FC = () => {
  const [countryData, setCountryData] = useState([]);

  return (
    <div className={styles.container}>
      <CountryForm setCountryData={setCountryData} />
      {countryData.length ? (
        <CountryDataTable countryData={countryData} />
      ) : (
        <h2 className={styles.title}>Nothing found</h2>
      )}
    </div>
  );
};
