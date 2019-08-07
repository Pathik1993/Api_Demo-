import {
  USERLIST_DATA,
  USERLIST_ERROR_DATA,
  USERLIST_LOADING,
  USERLIST_INITIAL_STATE
} from "../Actions/type";

const INTIAL_STATE = {
  results: [],
  login: "",
  picture: "",
  dob: "",
  authResult: "",
  isdata: false,
  isLoading: false,
  // couple_pictures: [],
  // Restoevents: []

};

export default (state = INTIAL_STATE, action) => {
  const responce = action.payload;
  switch (action.type) {
    case USERLIST_LOADING:
      return {
        ...state,
        isLoading: true,
        authResult: ""
      };
    case USERLIST_DATA:
      console.log("response userlist", action.payload);
      return {
        ...state,
        authResult: "success",
        isLoading: false,
        results: action.payload.list,
        login: action.payload.login,
        picture: action.payload.picture,
        dob: action.payload.dob,
        isdata: action.payload.isData
      };
    case USERLIST_ERROR_DATA:
      console.log("Error");
      return {
        ...state,
        authResult: "fail",
        isLoading: false
      };

      // case EVENT_DATA:
      //     console.log('response history', responce.data.data.events);
      //     console.log('seating array', responce.data.data.events);
      //     return { ...state,
      //             authResult: 'success',
      //             isLoading: false,
      //             Restoevents: responce.data.data.events,
      //            };
      // case EVENT_ERROR:
      //     console.log('Error');
      //     return { ...state, authResult: 'fail', isLoading: false };


    //   case COUPLE_PHOTOS_LOADING:
    //   return { ...state,
    //     isLoading: true
    //   };
    // case COUPLE_PHOTOS_SUCCESS:
    //    console.log('reducer couplephotos response of list', action.payload);
    //   return { ...state,
    //     authResult: 'success',
    //     isLoading: false,
    //     couple_pictures: action.payload,
    //   };
    // case COUPLE_PHOTOS_ERROR:
    //   console.log('Error', action.payload);
    //   return { ...state,
    //     authResult: 'fail',
    //     isLoading: false,
    //   };
    


    default:
      return state;
  }
};
