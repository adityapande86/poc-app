export const mapJSONToSimpleObject = (jsonData) => {
  let hotelsArrayNode = jsonData['hotels'];
  let hotelName = {};

  if (hotelsArrayNode.length > 0) {
    let hotelNode = jsonData['hotels'][0];

    hotelName = hotelNode['hotelName'];
    console.log(hotelName);
  }
  return hotelName;
};
