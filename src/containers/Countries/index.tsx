import { GET_COUNTRIES } from "../../http/api";
import AutoComplete from "../../components/AutoComplete";
import { useEffect, useState } from "react";

export default function Countries(props: any) {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    GET_COUNTRIES().then((items) => {
      if (items.length) {
        setCountries(items);
      }
    });
  }, []);

  return <AutoComplete countries={countries} onChange={props.onChange} />;
}
