import { createContext, useRef } from "react";

export default createContext({
	bannerLoaded: false,
	setBannerLoaded: (val) => { },
});