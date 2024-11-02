// import { AppRoutes } from "@/constants/app-routes";
// import type { GetTokenRs } from "@/http/types/UserService.types";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
// import { getSession, signOut } from "next-auth/react";

// export type SessionUserType = {
//   data: GetTokenRs;
// };

class HttpService {
  private axiosService: AxiosInstance;

  constructor() {
    this.axiosService = axios.create({
      baseURL: "https://fakestoreapi.com",
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.axiosService.interceptors.response.use(
      (successResponse) => {
        return successResponse;
      },
      (failedResponse) => {
        const { status } = failedResponse?.response || {};
        if (status === 401) {
          //   return signOut({ redirect: true, callbackUrl: AppRoutes.login });

          return;
        }
        return Promise.reject(failedResponse);
      }
    );

    this.axiosService.interceptors.request.use(async (request) => {
      //   const session = await getSession();
      //   const sessionToken = session?.user as SessionUserType;
      //   if (sessionToken) {
      //     request.headers.Authorization = `Bearer ${sessionToken?.data?.access_token}`;
      //   }
      return request;
    });
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosService.get(`${url}`, config);
  }

  async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosService.post(`${url}`, data, config);
  }

  async put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosService.put(`${url}`, data, config);
  }

  async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosService.delete(`${url}`, config);
  }
}

// Create an instance of HttpService with the ApiDefaultError type
const httpService = new HttpService();

export { httpService };
