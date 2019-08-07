import axios from "axios";
import {
  USERLIST_DATA,
  USERLIST_ERROR_DATA,
  USERLIST_LOADING,
  USERLIST_INITIAL_STATE
} from "./type";

// getMethod
export const getUserlist = ({ page, results }) => {
  console.log(page);
  return dispatch => {
    if (page === 1) {
      dispatch({
        type: USERLIST_LOADING
      });
    }

    axios
      .get(`https://randomuser.me/api?results=10&page=${page}`, {
        headers: {}
      })
      .then(response => {
        if (response.data == "") {
          dispatch({
            type: USERLIST_ERROR_DATA,
            payload: "Something went wrong please try again"
          });
        } else {
          if (response.data) {
            var isData = true;
            if (response.data.results.length === 0) {
              console.log("false");
              isData = false;
            }
            console.log("second time, 20001", response.data.results);
            if (page === 1) {
              dispatch({
                type: USERLIST_DATA,
                payload: {
                  list: response.data.results,
                  login: response.data.results.login,
                  picture: response.data.results.picture,
                  dob: response.data.results.dob,
                  isData
                }
              });
            } else {
              if (response.data.results.length > 0) {
                dispatch({
                  type: USERLIST_DATA,
                  payload: {
                    list: results.concat(response.data.results),
                    login: response.data.results.login,
                    picture: response.data.results.picture,
                    dob: response.data.results.dob,
                    isData
                  }
                });
              }
            }
          } else {
            console.log("not true");
            dispatch({
              type: USERLIST_ERROR_DATA,
              payload: "Something went wrong please try again"
            });
          }
        }
      })
      .catch(error => {
        console.log("USERLIST_ERROR_DATA  " + error);
        dispatch({
          type: USERLIST_ERROR_DATA,
          payload: "Something went wrong please try again"
        });
      });
  };
};

// post Method

// export const getRestorentEvent = (token, restaurantid) => {
//   return (dispatch) => {
//     dispatch({
//       type: EVENT_LOADING
//     });
//     axios.post(`${BASE_URL}getallevents`, {
//       restaurant_id: restaurantid,
//     }, {
//       headers: {
//         Accept: 'application/json',
//         Authorization: `Bearer ${token}`
//       }
//     })
//       .then(response => {
//         console.log('megha_res', response);
//         dispatch({ type: EVENT_DATA, payload: response });
//       })
//       .catch(error => {
//         console.log('order data failed', error);
//         dispatch({ type: EVENT_ERROR, payload: 'Something went wrong please try again' });
//         });
//       };
//   };


// form Data Method 


// export const getCouplePhotos = () => {
//   var details =  {
//     clientId: '1',
//     guestId: '178',
//     loginType: '0'
//   };
// var formBody = [];
// for (var property in details) {
//   var encodedKey = encodeURIComponent(property);
//   var encodedValue = encodeURIComponent(details[property]);
//   formBody.push(encodedKey + "=" + encodedValue);
// }
// formBody = formBody.join("&");
// return (dispatch) => {
//   dispatch({ type: COUPLE_PHOTOS_LOADING });
//   axios.post(`${BASE_URL}api/getAppImages`,formBody, {
//       headers: {
//       apikey:'W]XWqim{1vr+FKc',
//       accesstoken: 'E2PcBgx8jD4K1AZOGyw3',
//      'Content-Type':'application/x-www-form-urlencoded'
//     }
//   })
//   .then(response => {
//     console.log('pathik',response.data);
//     if (response.data.status === 200) {
//       console.log("get couplephotos data successfully");
//        dispatch({ type: COUPLE_PHOTOS_SUCCESS, payload: response.data.invitationImagesData.couple_pictures });
//     } else {
//       dispatch({ type: COUPLE_PHOTOS_ERROR, payload: 'Failed'});
//     }
//   })
//   .catch(error => {
//     console.log('get couplephotos data fail');
//     //console.log('invitation action', error);
//     dispatch({ type: COUPLE_PHOTOS_ERROR, payload:  response });
//   });
//   };
// };


