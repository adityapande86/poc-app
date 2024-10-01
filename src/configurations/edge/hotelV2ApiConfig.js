const HOTELV2_BASE_URL_URLS = {
	"http://localhost:3000": "http://hotel-v2-core-ec-sit.edgedev.cloud.chotel.com:8080/v2"
}

export const hotelV2ApiConfig = {
	baseUrl: HOTELV2_BASE_URL_URLS[window.location.origin],
    // timeout: LPM_BACKEND_TIMEOUT_VALUES[window.location.origin],
	getHotelsPath: '/hotels'
};