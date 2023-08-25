const VERIFY_USER = `${process.env.NEXT_PUBLIC_API_URL}/auth/verify-user`;

const LOGIN = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;

const API_ROUTES = {
  VERIFY_USER,
  LOGIN,
};

export { API_ROUTES, LOGIN, VERIFY_USER };
