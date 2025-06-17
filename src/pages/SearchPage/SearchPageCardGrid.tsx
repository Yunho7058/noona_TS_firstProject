import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { getRandomColor } from "../../common/components/util/getRandomColor";
import useGetCategory from "../../hooks/useGetCategory";
import LoadingSpinner from "../../common/components/util/LoadingSpinner";

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
  height: 300px;
  overflow: hidden;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const CategoryImage = styled("img")({
  position: "absolute",
  width: "200px",
  bottom: "-10px",
  right: "-25px",
  transform: "rotate(20deg)",
  opacity: 0.8,
});

const SearchPageCardGrid = () => {
  const { data, isLoading } = useGetCategory();

  if (isLoading || !data || !data.categories.items) {
    if (!data) return <div>로그인을 해주세요.</div>;
    return <LoadingSpinner />;
  }
  return (
    <GridContainer>
      {data.categories.items.map((cat, idx) => (
        <CategoryCard key={idx} bgcolor={getRandomColor()}>
          <Typography variant="subtitle1" color="white" fontWeight="bold">
            {cat.name}
          </Typography>
          {cat.icons?.[0]?.url && (
            <CategoryImage src={cat.icons[0].url} alt={cat.name} />
          )}
        </CategoryCard>
      ))}
    </GridContainer>
  );
};

export default SearchPageCardGrid;
