import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// slices
import blogReducer from "./slices/blog";
import portfoliosReducer from "./slices/portfolios";
import servicesReducer from "./slices/services";
import toolsAndTechnologyReducer from "./slices/toolsAndTechnology";
import testimonialsReducer from "./slices/testimonial";
import storyReducer from "./slices/story";
import eventReducer from "./slices/event";
import clientReducer from "./slices/client";
import contactUsReducer from "./slices/contact_us";

// ----------------------------------------------------------------------

export const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

export const productPersistConfig = {
  key: "product",
  storage,
  keyPrefix: "redux-",
  whitelist: ["sortBy", "checkout"],
};

const rootReducer = combineReducers({
  blog: blogReducer,
  portfolios: portfoliosReducer,
  services: servicesReducer,
  toolsAndTechnology: toolsAndTechnologyReducer,
  testimonials: testimonialsReducer,
  story: storyReducer,
  event: eventReducer,
  client: clientReducer,
  contactUs: contactUsReducer,
});

export default rootReducer;
