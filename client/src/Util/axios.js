import axios from "axios";
import baseURI from "./baseURI";
// localhost
// const baseURL = "http://localhost/server";

// server
const baseURL = `${baseURI}server`;
// TODO: add ip address to the request

let api = axios.create({
  baseURL: baseURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "privatekey",
  },
});

// ======== API of BlogController starts here ========

// show all blog posts
let showAllBlogPost = async () => {
  let response = await api.get(`/blogs/showAllBlogPost`);
  console.log(response.data.result);
  return response.data.result;
};

// show posts by slug
let showSingleBlogPost = async (slug) => {
  let response = await api.get(`/blogs/showSingleBlogPost/${slug}`);
  console.log("showSingleBlogPost result", response.data.result);
  return response.data.result;
};

// show posts by category
let showBlogsByCategory = async (category) => {
  let response = await api.get(`/blogs/showBlogsByCategory/${category}`);
  console.log(response.data.result);
  return response.data.result;
};

// show popular posts
let showPopularPosts = async () => {
  let response = await api.get("/blogs/showPopular");
  console.log(response.data.result);
  return response.data.result;
};

// show latest posts
let showLatestPosts = async () => {
  let response = await api.get("/blogs/showLatest");
  console.log(response.data.result);
  return response.data.result;
};

// api to get featured posts
let showFeaturedPosts = async () => {
  let response = await api.get("/blogs/showFeatured");
  console.log(response.data.result);
  return response.data.result;
};

// api to get categories cards
let showCategoryMaster = async () => {
  let response = await api.get("/blogs/showCategoryMaster");
  // console.log(response.data.result);
  return response.data.result;
};

// get the post data with category filteration
let getCategoryPost = async () => {
  let response = await api.get("/blogs/getCategoryPost");
  console.log(response.data.result);
  return response.data.result;
};

// Similar post through slug
let showSimilarPosts = async (slug) => {
  let response = await api.get(`/blogs/showSimilarPosts/${slug}`);
  console.log(response.data.result);
  return response.data.result;
};

// ======== API of BlogController ends here ========

// ======== API of ApiController starts here ========

// contact us form at the footer
let contactUs = async (inputVal) => {
  let response = await api.post("/apis/contact", inputVal);
  console.log(response.data.result);
  return response;
};

// show all comments
let showComments = async (slug) => {
  let response = await api.get(`/apis/showComments/${slug}`);
  console.log(response.data.result);
  return response.data.result;
};

// show author details with a particular authorID
let showAuthor = async (authorID) => {
  let response = await api.get(`/apis/author/${authorID}`);
  console.log(response.data);
  return response.data.result;
};

// ======== API of ApiController ends here ========

// ======== API of UserController starts here ========

// register the user
let register = async (signupDetails) => {
  let response = await api.post(`/users/register/`, signupDetails);
  console.log(response.data);
  return response;
};

// login the user
let login = async (loginDetails) => {
  let response = await api.post(`/users/login/`, loginDetails);
  console.log(response);
  return response;
};

let forgetPass = async (forgotPassword) => {
  let response = await api.post(`/users/forget-password/`, forgotPassword);
  console.log(response);
  return response;
};

let resetPass = async (token, passObj) => {
  try {
    let response = await api.post(`/users/reset-pass/${token}`, passObj);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

// ======== API of UserController ends here ========

export {
  showAllBlogPost,
  showSingleBlogPost,
  showBlogsByCategory,
  showPopularPosts,
  showLatestPosts,
  showFeaturedPosts,
  showCategoryMaster,
  getCategoryPost,
  showSimilarPosts,
  contactUs,
  showComments,
  showAuthor,
  register,
  login,
  forgetPass,
  resetPass,
};
