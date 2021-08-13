/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import firebase from 'firebase';
import { auth } from '../api/firebase';
import { ProfileFormValues } from '../screens/profile-edit';
/* eslint-enable @typescript-eslint/no-unused-vars */

export type AuthState = {
  isSignedIn: boolean;
  user: Partial<
    Pick<
      firebase.User,
      'displayName' | 'email' | 'emailVerified' | 'photoURL' | 'phoneNumber'
    >
  > | null;
};

const initialState: AuthState = {
  isSignedIn: false,
  user: null,
};

export const signIn: firebase.auth.Auth['signInWithEmailAndPassword'] = (
  email,
  password
) => {
  return auth.signInWithEmailAndPassword(email, password);
};

// export const signIn = createAsyncThunk(
//   'auth/signIn',
//   async ({ email, password }: { email: string; password: string }) => {
//     const userCredential = await auth
//       .signInWithEmailAndPassword(email, password)
//       .then((res) => res);
//     if (userCredential.user) {
//       const {
//         displayName,
//         email: displayEmail,
//         emailVerified,
//         photoURL,
//         phoneNumber,
//       } = userCredential.user;
//       return {
//         displayName,
//         email: displayEmail,
//         emailVerified,
//         phoneNumber,
//         photoURL,
//       };
//     }
//     return null;
//   }
// );

export const updateProfile = createAsyncThunk(
  'auth/update',
  async (values: ProfileFormValues) => {
    if (!auth.currentUser) {
      return null;
    }

    const currentUserInfo = auth.currentUser;
    const updatedUserInfo = { ...currentUserInfo, ...values };

    const updatedValues = await auth
      .updateCurrentUser(updatedUserInfo)
      .then(() => {
        return values;
      });

    return updatedValues;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState['user'] | null>) => {
      return {
        ...state,
        isSignedIn: true,
        user: action.payload
          ? { ...state.user, ...action.payload }
          : initialState.user,
      };
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(signIn.fulfilled, (state, { payload }) => {
    //   if (!payload) {
    //     return;
    //   }
    //   state.user = payload;
    // });
    builder.addCase(updateProfile.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }
      state.user = { ...state.user, ...payload };
    });
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
