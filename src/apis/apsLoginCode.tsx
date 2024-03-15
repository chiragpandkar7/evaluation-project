import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAuth } from '../store/slices/auth.slice';
import { getApsToken } from './apsServices';
import { useDispatch } from 'react-redux';


const ApsLoginCode = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getAuthToken = useCallback(
    async (code: string) => {
      if (code) {
        console.log("haaaa")
        try {
          const { data: apsTokenData } = await getApsToken(code);
          console.log(JSON.stringify(apsTokenData))
          dispatch(setAuth({ success: true, tokenData: apsTokenData }));
          navigate('/dashboard');
        } catch (error) {
          console.error(error);
          dispatch(setAuth({ success: false }));
          navigate('/aps-oauth/login');
        }
      } else {
        return false;
      }
    },
    [dispatch, navigate,],
  );

  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    console.log('inside callback')
    if (authorizationCode) {
      getAuthToken(authorizationCode);
    } else {
      navigate('/aps-oauth/login');
    }
  }, [getAuthToken, navigate]);

  return <p> message="Authenticating to Autodesk..." </p>;
};

export default ApsLoginCode;
