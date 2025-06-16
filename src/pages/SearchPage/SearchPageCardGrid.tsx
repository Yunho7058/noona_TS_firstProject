import React from "react";
import { Box, Typography, styled } from "@mui/material";

// 랜덤 색상 목록
const colors = ["#4B367C", "#F6E652", "#E758B9", "#A6754E", "#B5ECE1"];

const GridContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
  padding: "20px",
});

const CategoryCard = styled(Box)<{ bgcolor: string }>`
  position: relative;
  background-color: ${({ bgcolor }) => bgcolor};
  border-radius: 12px;
  height: 200px;
  overflow: hidden;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const CategoryImage = styled("img")({
  position: "absolute",
  width: "150px",
  bottom: "-10px",
  right: "-15px",
  transform: "rotate(20deg)",
  opacity: 0.8,
});

const categories: {
  title: string;
  imageUrl: string;
}[] = [
  {
    title: "Made For You",
    imageUrl: "https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg",
  },
  {
    title: "New Releases",
    imageUrl: "https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg",
  },
  {
    title: "Vietnamese Music",
    imageUrl: "https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg",
  },
  {
    title: "Pop",
    imageUrl: "https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg",
  },
  {
    title: "K-pop",
    imageUrl: "https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg",
  },
  {
    title: "Hip-Hop",
    imageUrl: "https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg",
  },
];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const SearchPageCardGrid = () => {
  return (
    <GridContainer>
      {categories.map((cat, idx) => (
        <CategoryCard key={idx} bgcolor={getRandomColor()}>
          <Typography variant="subtitle1" color="white" fontWeight="bold">
            {cat.title}
          </Typography>
          <CategoryImage src={cat.imageUrl} alt={cat.title} />
        </CategoryCard>
      ))}
    </GridContainer>
  );
};

export default SearchPageCardGrid;
