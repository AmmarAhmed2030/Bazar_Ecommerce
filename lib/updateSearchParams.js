import { useRouter } from 'next/navigation';

const router = useRouter();
const [paramValue, setParamValue] = useState('');

const updateSearchParams = () => {
  const query = { ...router.query, paramName: paramValue };
  router.push({
    pathname: router.pathname,
    query,
  });
};
