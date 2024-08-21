import { FC } from "react";

type Props = {
  countryData: any[]; // TODO fix
};

export const CountryDataTable: FC<Props> = ({ countryData }) => {
  const getCurrentCountryInfo = (country: any) => {
    const getCurrencyNames = (currenciesObject: any) => {
      const currencyEntries = Object.keys(currenciesObject)[0];
      console.log("currencyEntries :>> ", currencyEntries);

      return currenciesObject[currencyEntries]?.name;
    };

    const firstLanguageKey = Object.keys(country?.languages)[0];
    const firstLanguageValue = country?.languages[firstLanguageKey];
    return (
      <>
        <td>{country?.name?.common}</td>
        <td>{country?.cca2}</td>
        <td>{getCurrencyNames(country?.currencies)}</td>
        <td>{country?.capital[0]}</td>
        <td>{firstLanguageValue}</td>
        <td>{country?.flag}</td>
        <td>{country?.population}</td>
      </>
    );
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>cca2</th>
            <th>currencies</th>
            <th>capital</th>
            <th>languages</th>
            <th>flag</th>
            <th>population</th>
          </tr>
        </thead>
        <tbody>
          {countryData.map((country) => (
            <tr key={country.cca2}>{getCurrentCountryInfo(country)}</tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
