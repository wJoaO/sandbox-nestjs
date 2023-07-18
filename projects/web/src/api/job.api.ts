import axios from "axios";
import { API_BASE_URL } from "../config";
import { JobModel } from "../models";

export class JobAPI {
  static base_url = `${API_BASE_URL}/job`;

  public static async list(): Promise<JobModel[]> {
    const response = await axios.get(this.base_url);
    return response.data as JobModel[];
  }

  public static async add_multiple(count: number): Promise<boolean> {
    const url = `${this.base_url}/multiple_adds`;
    return axios.post(url, { count });
  }
}
