import Title from "../../atoms/Title/Title";
import * as HotelV2Service from "../../../services/hotelV2/hotelV2Service";
import * as HotelV2Mappers from "../../../mappers/hotelV2/hotelV2.mapper";

import { useEffect, useState } from "react";

const Home = () => {
  const [hotelAddressDetails, setHotelAddressDetails] = useState([]);

  useEffect(() => {
    getHotel();
  }, []);

  const getHotel = () => {
    const hotelV2RequestParams = {
      hotelCodes: "FLC49",
      orgCode: "EC",
      expand: "all",
    };

    HotelV2Service.getHotel(hotelV2RequestParams)
      .then((res) => {
        console.log(res);
        applyChangesForSuccessfulHotelV2HttpResponse(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const applyChangesForSuccessfulHotelV2HttpResponse = (res) => {
    setHotelAddressDetails(HotelV2Mappers.mapJSONToSimpleObject(res.data));
  };

  return (
    <div className="flex items-center justify-center w-full">
      {
        hotelAddressDetails
      }
    </div>
  );
};
export default Home;
