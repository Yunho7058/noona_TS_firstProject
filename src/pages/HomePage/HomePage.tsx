import { useGetNewReleases } from "../../hooks/useGetNewReleases";
import AlbumSection from "./components/AlbumSection";
import NewReleases from "./components/NewReleases";
import TrackSection from "./components/TrackSection";

const HomePage = () => {
  const { data: newReleases, error, isLoading } = useGetNewReleases();
  if (!newReleases) return null;
  const albumIds = newReleases.albums.items.map((a) => a.id);

  return (
    <>
      <NewReleases releases={newReleases} error={error} isLoading={isLoading} />
      <TrackSection />
      <AlbumSection ids={albumIds} />
    </>
  );
};

export default HomePage;
