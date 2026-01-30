export type SignUpProps = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface SignInProps {
  email: string;
  password: string;
}

export type TokenPayloadProps = {
  publicUserId: string
  isSuperAdmin: boolean
  isCollaborator: boolean
  exp?: number
}