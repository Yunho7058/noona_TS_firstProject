import React, { Suspense, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import LoadingSpinner from "./common/components/util/LoadingSpinner";
import useExchangeToken from "./hooks/useExchangeToken";

/*
1. 홈 /
2. 서치 /search
3. 서치 결과 /search/:keyword
4. 플레이리스트 디테일 페이지 /playlist/:id
5. 플레이리스트 보여주는 페이지 (모바일때 모여줌) /playlist
0. 사이드 바 생성 (플레이리스트, 메뉴)

리액트는 한페이지 안에서, 다른 컨텐츠 페이즈를 돌려가면서 보여줌

페이지가 많으면 큰 부담이 있음
그래서 사용하는 페이지만 로딩되게 lazy loading -> 초반에 빠르게 보여줌 , 번들 사이즈 작아짐
단점은 홈페이지 보여주고 있다가 다른 페이지 갈때 시간이 좀 걸린다.
그렇기 떄문에 로딩 처리 해주면 좋음
<Suspense> 아직안왔으면 로딩 보여줄게
 */
const AppLayout = React.lazy(() => import("./layout/AppLayout"));
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage/SearchPage"));
const SearchPageWithPage = React.lazy(
  () => import("./pages/SearchWithPage/SearchWithPage")
);
const PlaylistPage = React.lazy(
  () => import("./pages/PlaylistPage/PlaylistPage")
);
const PlaylistDetailPage = React.lazy(
  () => import("./pages/PlaylistPage/PlaylistDetailPage/PlaylistDetailPage")
);
// stored in the previous step

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const codeVerifier = localStorage.getItem("code_verifier");
  let code = urlParams.get("code");
  let { mutate: exchangToken } = useExchangeToken();
  useEffect(() => {
    const alreadyExchanged = localStorage.getItem("access_token");

    if (code && codeVerifier && !alreadyExchanged) {
      exchangToken({ code, codeVerifier });
    }
  }, [code, codeVerifier, exchangToken]);

  return (
    <div className="App">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="search/:keyword" element={<SearchPageWithPage />} />
            <Route path="playlist/:id" element={<PlaylistDetailPage />} />
            <Route path="playlist" element={<PlaylistPage />} />
          </Route>
          {/* <Route path="/admin"/> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
