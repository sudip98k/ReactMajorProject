export * from './constant';
// export const getFormBody=(params) =>{
//     let formBody=[];
//     for(let property in params){
//         let encodedKey=encodeURIComponent(property);
//         let encodedValue=encodeURIComponent(params[property]);

//         formBody.push(encodedKey+'='+encodedValue);
//     }
//     return formBody.join('&');
// }

// export const setItemInLocalStorage=(value,key)=>{
//     if(!key || !value){
//         console.error('can not store in local storage');
//     }
//     const valueToStore= typeof value !== 'string' ? JSON.stringify(value) : value;
//     localStorage.setItem(key, valueToStore);
// }