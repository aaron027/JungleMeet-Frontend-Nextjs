import axios from "axios";

const REQUEST_TIMEOUT = 10000;

const axiosApi = axios.create({
    baseURL: "http://localhost:3000/v1/posts",
    timeout: REQUEST_TIMEOUT,
});

export const getPosts = async () => {
    return await axiosApi.get("/");
};

export const getPostById = async (id: string) => {
    return await axiosApi.get(`/${id}`);
};
export const getPostsByCondition = async (nPerPage: number, pageNumber: number, sortBy: string) => {
    return await axiosApi.get(`/?nPerPage=${nPerPage}&pageNumber=${pageNumber}&sortBy=${sortBy}`);
}

export const addNewPost = async (title: string, content: string, hashtag: string, token: string | null) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const reqBody = {
        title,
        content,
        hashtag,
    };
    
    return await axiosApi.post("/post/", reqBody, config)
}
