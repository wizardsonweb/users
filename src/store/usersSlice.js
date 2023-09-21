import { createSlice } from "@reduxjs/toolkit";
import { clearUrl } from '../helpers/data';

export const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        init: (state, action) => {
            const data = action.payload.map((user) => ({
                id: user.id,
                avatar: clearUrl(user.avatar),
                name: user.first_name,
                surname: user.last_name,
                title: user.employment.title,
                email: user.email,
                phone: user.phone_number,
                dob: user.date_of_birth,
                city: user.address.city,
                street: user.address.street_name,
                address: user.address.street_address,
                country: user.address.country,
            }));

            return [...state, ...data];
        },
    },
});

export const { init } = usersSlice.actions;

export default usersSlice.reducer;
