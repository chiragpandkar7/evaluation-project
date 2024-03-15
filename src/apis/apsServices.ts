import axios, { AxiosRequestConfig } from "axios";
import { ApsToken } from "../store/types";

const { VITE_APS_REDIRECT_URI, VITE_APS_CLIENT_ID, VITE_APS_CLIENT_SECRET } =import.meta.env;
const BASE_64_AUTH = btoa(`${VITE_APS_CLIENT_ID}:${VITE_APS_CLIENT_SECRET}`);

const accountId: string = "59b4539d-c418-4d78-b0e6-308bd58fd54d";

export const getApsToken = async (code: string) => {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "https://developer.api.autodesk.com/authentication/v2/token",
    headers: {
      Authorization: `Basic ${BASE_64_AUTH}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: `grant_type=authorization_code&code=${code}&redirect_uri=${VITE_APS_REDIRECT_URI}`,
  };

  return await axios(config);
};


export const refreshApsToken = async (token: ApsToken, scope: string) => {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "https://developer.api.autodesk.com/authentication/v2/token",
    headers: {
      Authorization: `Basic ${BASE_64_AUTH}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: `grant_type=refresh_token&refresh_token=${token.refresh_token}&scope=${scope}`,
  };

  return await axios(config);
};

export const threeLeggedOne = async () => {
  const authorizationUrl = `https://developer.api.autodesk.com/authentication/v2/authorize`;
  const redirectUri =     "http://localhost:3000/aps-oauth/callback";
  const clientId = VITE_APS_CLIENT_ID;
  const scope = "data:read account:read";

  const fullAuthorizationUrl = `${authorizationUrl}?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

  window.location.href = fullAuthorizationUrl;
  
};

export const getProjects = async (accessToken: string) => {
  const apiUrl = `https://developer.api.autodesk.com/construction/admin/v1/accounts/${accountId}/projects`;

  const response = await axios.get(apiUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};

export const getIssues = async (projectId: string, accessToken: string) => {
  const apiUrl = `https://developer.api.autodesk.com/construction/issues/v1/projects/${projectId}/issues`;
  const response = await axios.get(apiUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};

export const getIssuesTypes = async (projectId: string, accessToken: string) => {
  const apiUrl = `https://developer.api.autodesk.com/construction/issues/v1/projects/${projectId}/issue-types`;
  const response = await axios.get(apiUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};

export const getHubs = async (accessToken: string) => {
  const apiUrl = `https://developer.api.autodesk.com/project/v1/hubs`;
  const response = await axios.get(apiUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};
