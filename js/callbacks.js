  /** 
   * @function callback1
   * @param {Response} response
   * @returns {Promise<any>}
  */

  export const callback1 = (response) => {
    const resData = response.json();
    console.log(resData);
    return resData;
  };

  /** 
   * @function callback2
   * @param {Promise<any>} resData
   * @returns {Promise<any>}
  */

  export const callback2 = (resData) => {
    console.log(resData);
    return resData;
  };
