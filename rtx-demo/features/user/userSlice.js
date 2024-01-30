const createSlice = require('@reduxjs/toolkit').createSlice;
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const axios = require('axios');

const initialState = {
  loading: false,
  users: [],
  error: '',
};

//generated pending, fulfilied and rejected action types
const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  axios.get('https://jsonplaceholder.typicode.come/users').then((response) => response.data.map((user) => user.id));
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {},
});
