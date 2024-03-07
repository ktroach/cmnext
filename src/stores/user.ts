import { UserSignUpType } from '@/types'
import { create } from 'zustand'

interface UserSignUpState {
  userSignUp: UserSignUpType | undefined
  setUserSignUp: (userSignUp: UserSignUpType) => void
}

export const useUserSignUpStore = create<UserSignUpState>()((set) => ({
  userSignUp: undefined,
  setUserSignUp: (userSignUp: UserSignUpType) => set(() => ({ userSignUp })),
}))
