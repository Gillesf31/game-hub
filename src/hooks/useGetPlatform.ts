import usePlatforms from './usePlatforms';

const useGetPlatform = (platformId?: number) => {
  const { data: platforms } = usePlatforms();
  if (!platformId) return undefined;
  const platform = platforms?.results.find(
    (platform) => platform.id === platformId
  );
  return platform;
};

export default useGetPlatform;
