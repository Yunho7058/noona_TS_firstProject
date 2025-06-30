import React, { Suspense, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import LoadingSpinner from "./common/components/util/LoadingSpinner";
import useExchangeToken from "./hooks/useExchangeToken";

/*
리팩토링 진행하기
필요없느 파일 삭제, 모바일 버전 안전화

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
            <Route path="search/:keyword?" element={<SearchPage />} />
            {/* <Route path="search/:keyword" element={<SearchPageWithPage />} /> */}
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

// useEffect(() => {
//   const alreadyExchanged = localStorage.getItem("access_token");
//   const isRedirectedFromInvalidToken =
//     sessionStorage.getItem("redirectedDueTo401");

//   if (
//     code &&
//     codeVerifier &&
//     !alreadyExchanged &&
//     !isRedirectedFromInvalidToken
//   ) {
//     exchangToken({ code, codeVerifier });
//   }
// }, [code, codeVerifier, exchangToken]);
