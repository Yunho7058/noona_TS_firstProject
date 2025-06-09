import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      // 주
      main: "#1ed760",
    },
    secondary: {
      // 부
      main: "#ffffff",
    },
    background: {
      default: "#000",
      paper: "#121212",
    },
    text: {
      primary: "#fff",
      secondary: "#b3b3b3",
    },
    action: {
      hover: "#282828",
      active: "#333",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "24px",
    },
    h2: {
      fontSize: "1rem",
    },
    body1: {
      fontSize: "14px",
    },
    subtitle1: {
      fontSize: "0.6875rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          textTransform: "none",
        },
        containedSecondary: {
          backgroundColor: "#ffffff",
          color: "#000000",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        },
        sizeLarge: {
          padding: "8px 32px",
          fontWeight: 700,
          fontSize: "16px",
        },
      },
    },
  },
});

export default theme;

/*
| 키 이름          | 뜻 및 역할                                  |
| ------------- | --------------------------------------- |
| `palette`     | **색상 팔레트**: 앱 전반에 쓰일 색상들 모음             |
| `typography`  | **폰트 스타일**: 글자 크기, 두께, 폰트 종류 지정         |
| `components`  | **컴포넌트 스타일 오버라이드**: MUI 기본 컴포넌트 디자인 커스텀 |
| `spacing`     | 공간(여백) 단위 설정                            |
| `breakpoints` | 반응형 디자인 위한 화면 크기 구분값 설정                 |

*/
