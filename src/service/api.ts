import {
  Add_To_Favorite,
  Category_List,
  Delete_Account,
  Login_URL,
  Manage_Password,
  Product_List,
  Service_Request_Insert,
  Sign_Up,
  Update_Profile,
  View_Favorite,
  View_Profile,
} from '../constants/APIURL';
import httpService from './httpService';

//Login

export function loginFunction(data: any) {
  if (data) {
    console.log('data', data);
    console.log('data', Login_URL);
    return httpService.post(Login_URL, data);
  }
  return Promise.reject(new Error('Error'));
}

// Sign Up
export function SignUpFunction(data: any) {
  if (data) {
    return httpService.post(Sign_Up, data);
  }
  return Promise.reject(new Error('Error'));
}

//Category List

export function getCategoryListFunction() {
  return httpService.post(Category_List);
}

// Product List
export function getProductListFunction(data: any) {
  if (data) {
    return httpService.post(Product_List, data);
  }
  return Promise.reject(new Error('Error'));
}

// Service Request Insert
export function ServiceRequestInsertFunction(data: any) {
  if (data) {
    return httpService.post(Service_Request_Insert, data);
  }
  return Promise.reject(new Error('Error'));
}

// View Profile
export function ViewProfileDetailsFunction(data: any) {
  if (data) {
    return httpService.post(View_Profile, data);
  }
  return Promise.reject(new Error('Error'));
}

// Update Profile
export function UpdateProfileDetailsFunction(data: any) {
  if (data) {
    return httpService.post(Update_Profile, data);
  }
  return Promise.reject(new Error('Error'));
}

// Password Manager
export function ManagePasswordFunction(data: any) {
  if (data) {
    return httpService.post(Manage_Password, data);
  }
  return Promise.reject(new Error('Error'));
}

// Delete Account
export function DeleteAccountFunction(data: any) {
  if (data) {
    return httpService.post(Delete_Account, data);
  }
  return Promise.reject(new Error('Error'));
}

// Add To Favorite
export function AddToFavoriteFunction(data: any) {
  if (data) {
    return httpService.post(Add_To_Favorite, data);
  }
  return Promise.reject(new Error('Error'));
}

// View Favorite
export function ViewFavoriteLIstFunction(data: any) {
  if (data) {
    return httpService.post(View_Favorite, data);
  }
  return Promise.reject(new Error('Error'));
}
