/**
 * Configs.
 */

const currentStage = 1;
let originURL = "";
let API_KEY="";


const rootURL = (stage = currentStage) => {
  //add url for test environments 
  switch (stage) {
    case 1:
      originURL = `https://www.googleapis.com/youtube/v3`; 
      API_KEY = "AIzaSyCEobeERFEU69PiSoxPPMaK1FxjOtiu-ac"
      break;
    default:
      break;
  }
  return `${originURL}`;
};

export { originURL, rootURL, currentStage ,API_KEY };
