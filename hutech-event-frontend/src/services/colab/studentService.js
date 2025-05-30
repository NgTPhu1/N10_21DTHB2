import axios from "axios";
import authHeader from "../authHeader";

const getStudents = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/colab/students",
      {
        headers: authHeader(),
      },
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const getStudentById = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/colab/students/${id}`,
      {
        headers: authHeader(),
      },
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const createStudent = async (student) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/colab/students",
      student,
      {
        headers: authHeader(),
      },
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const updateStudent = async (id, student) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/colab/students/${id}`,
      student,
      {
        headers: authHeader(),
      },
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { getStudents, getStudentById, createStudent, updateStudent };
