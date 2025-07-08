import { useRouter, usePathname } from 'next/navigation';

interface QueryParams {
  [key: string]: string | number;
}

const usePathNavigator = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (nextPath: string, queryParams?: QueryParams) => {
    const normalizedPath = `${pathname}/${nextPath}`.replace(/\/+/g, '/');
    if (queryParams) {
      const queryString = new URLSearchParams(
        queryParams as Record<string, string>
      ).toString();
      router.push(`${normalizedPath}?${queryString}`);
    } else {
      router.push(normalizedPath);
    }
  };

  const goBack = () => {
    router.back();
  };

  return { pathname, navigateTo, goBack };
};

export default usePathNavigator;
