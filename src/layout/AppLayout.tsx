import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  NavLink,
  NavLinkProps,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryHead from "./components/LibraryHead";
import EmptyPlaylist from "./components/EmptyPlaylist";
import Library from "./components/Library";
import Navbar from "./components/Navbar";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
// <Outlet /> 라우터 아래있는 라우트 다 가져옴

const Layout = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100vh",
  padding: "8px",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
// 브레이크 포인트 -> 직접 설정 또는 theme 사용하기
const Sidebar = styled("div")(({ theme }) => ({
  width: "331px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
const ContentBox = styled(Box)(({ theme }) => ({
  borderRadius: "8px",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  width: "100%",
  padding: "8px",
  marginBottom: "8px",
  marginRight: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
}));
const NavList = styled("ul")({
  listStyle: "none",
  padding: "0px",
  margin: "0px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
});

interface StyledNavLinkProps extends NavLinkProps {
  currentPath: string;
  // NavLink 리액트라우터에서 제공해주는 함수
  // 우리는 currentPath prop을 전달해주기 위해 새로운 속성 타입 지정후 extends 후 타입 재 지정
}
const StyledNavLink = styled(NavLink, {
  shouldForwardProp: (prop) => prop !== "currentPath", // 리액트는 모든 요소를 DOM 넘김, 그래서 이건 내 스타일용이라 넘기지 말아라
})<StyledNavLinkProps>(({ theme, to, currentPath }) => ({
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  width: "40%",
  color:
    to === currentPath
      ? theme.palette.text.primary
      : theme.palette.text.secondary,
  "&:hover": {
    color: theme.palette.text.primary,
    cursor: "pointer",
  },
  "&:active": {
    color: theme.palette.text.primary,
  },
}));
const ScrollContainer = styled(ContentBox)({
  height: "100%",
  overflowY: "auto",
  scrollBehavior: "smooth",

  /* 스크롤바 커스터마이징 */
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#555",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
});
const StyledBox = styled(Box)({
  width: "100%",
  height: "300px",
  overflowY: "auto",
  scrollBehavior: "smooth",
  padding: "10px",

  /* 스크롤바 커스터마이징 */
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#555",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
});
// home, search 클릭후 그 페이지에 있으면 , 버튼 흰색 유지하기
const AppLayout = () => {
  const location = useLocation();
  const currentPath = location?.pathname;
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = useState(0);
  const [isLibraryMobile, setIsLibraryMobile] = useState(false);
  //console.log(currentPath);

  return (
    <>
      <Layout>
        {isMobile ? (
          <Paper
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 100,
              backgroundColor: "#111",
            }}
            elevation={3}
          >
            {isLibraryMobile && (
              <StyledBox>
                <LibraryHead />
                <Library />
              </StyledBox>
            )}
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => setValue(newValue)}
              sx={{
                backgroundColor: "#111",
                height: "70px",
                "& .Mui-selected": {
                  color: "#fff",
                },
                "& .MuiBottomNavigationAction-root": {
                  color: "#aaa",
                },
              }}
            >
              <BottomNavigationAction
                label="Home"
                icon={<HomeIcon />}
                onClick={() => navigate("/")}
              />
              <BottomNavigationAction
                label="Search"
                icon={<SearchIcon />}
                onClick={() => navigate("/search")}
              />
              <BottomNavigationAction
                label="Your Library"
                icon={<LibraryMusicIcon />}
                onClick={() => setIsLibraryMobile(!isLibraryMobile)}
              />
            </BottomNavigation>
          </Paper>
        ) : (
          <Sidebar>
            <ContentBox>
              <NavList>
                <StyledNavLink to="/" currentPath={currentPath}>
                  <HomeIcon />
                  <Typography variant="h2" fontWeight={700}>
                    Home
                  </Typography>
                </StyledNavLink>
                <StyledNavLink to="/search" currentPath={currentPath}>
                  <SearchIcon />
                  <Typography variant="h2" fontWeight={700}>
                    Search
                  </Typography>
                </StyledNavLink>
              </NavList>
            </ContentBox>
            <ScrollContainer
              sx={{ height: "100%", overflow: "auto", scrollBehavior: "" }}
            >
              <LibraryHead />
              <Library />
            </ScrollContainer>
          </Sidebar>
        )}

        <ContentBox>
          <Navbar />
          <Outlet />
        </ContentBox>
      </Layout>
      )
    </>
  );
};

export default AppLayout;
