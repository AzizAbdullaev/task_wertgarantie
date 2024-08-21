import { FC, useState } from "react";
import { Button, Input } from "../../../../components";
import styles from "./styles.module.css";

type Props = {
  setCountryData: (countryData: []) => void;
};

export const CountryForm: FC<Props> = ({ setCountryData }) => {
  const [countryName, setCountryName] = useState("");

  const onSubmit = () => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const countryNameUrl = `${baseUrl}/name/${countryName}`;
    const countryCodeUrl = `${baseUrl}/alpha/${countryName}`;
    const getAPIUrl = countryName.length > 3 ? countryNameUrl : countryCodeUrl;

    fetch(getAPIUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok (status ${response.status})`
          );
        }
        return response.json();
      })
      .then((data) => setCountryData(data))
      .catch((error) => {
        setCountryData([]);
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search by country name</h1>
      <div className={styles.inputWrapper}>
        <Input value={countryName} onChange={setCountryName} />
      </div>

      <Button
        onClick={onSubmit}
        title="Search"
        disable={countryName.length < 2}
      />
    </div>
  );
};
