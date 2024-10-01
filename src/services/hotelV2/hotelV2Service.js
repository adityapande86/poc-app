import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { hotelV2ApiConfig } from "../../configurations/edge/hotelV2ApiConfig";

export const getHotel = async (hotelV2RequestParams) => {
  const requestHeaders = {
    'X-ChoiceEdge-TrackingId': uuidv4(),
    'X-ChoiceEdge-Requestor': 'RI_PO',
    'Authorization': 'Bearer eyJrYWgiOiJhdXRoc2VydmljZS0yMDE1IiwiYWxnIjoiUlMyNTYifQ.eyJpYXQiOjE3Mjg0Nzc5OTMsImV4cCI6MTcyODQ3ODg5Mywic3ViIjoie1wicHJpbmNpcGFsc1wiOlt7XCJuYW1lXCI6XCJ1c2VybmFtZVwiLFwidmFsdWVcIjpcImVkZ2VfcWFcIn0se1wibmFtZVwiOlwiY3JzZGVmUmVzSURcIixcInZhbHVlXCI6XCJNR0FSQ1wifSx7XCJuYW1lXCI6XCJjcnNkZWZEdXR5XCIsXCJ2YWx1ZVwiOlwiTU9cIn0se1wibmFtZVwiOlwiY25cIixcInZhbHVlXCI6XCJlZGdlX3FhXCJ9LHtcIm5hbWVcIjpcIm9yZ0NvZGVcIixcInZhbHVlXCI6XCJFQ1wifSx7XCJuYW1lXCI6XCJhY3RpdmVSb2xlXCIsXCJ2YWx1ZVwiOlwiTU9cIn0se1wibmFtZVwiOlwiYWxsb3dlZFJvbGVzXCIsXCJ2YWx1ZVwiOlwiTU9cIn1dfSIsImlzcyI6IkF1dGhlbnRpY2F0aW9uIFNlcnZpY2UgdjEifQ.AuvrPEyEJeWQTHZSkeoK7vEmCJONiGpximgpkz6q_IEBoH_PPplE2nSU7U4cn_IqA2AlhUsznYxQOXjBivbpJdgUNxh4TT1PZ6a4h5E-SOalgdfTA2QuNOZJoMApdV9AkXsc1J06rtsmiXaGUIDjCeAHlDh7DCmmEOAkcx45usb-WoI2HdrfFnNCN060yoWiGFv1sZzLrLESNuksg9H_RtNgdTM2WjTS7guyMWOp-J_lF58GxlT7N1bJoHR4qA_YtvEZzXdOGpIajllyG9F1GDQF_Tbwxd5RlijTBQNwMVJyMsk_aZThFMDdSVLexs8ymZIENw73lDS5KX4sTV04jw',
  };
  try {
    return await axios.get(
      `${hotelV2ApiConfig.baseUrl}${hotelV2ApiConfig.getHotelsPath}`,
      {
        headers: requestHeaders,
        params: hotelV2RequestParams
      }
    );
  } catch (err) {
    console.log(err);
    throw err;
  }
};
