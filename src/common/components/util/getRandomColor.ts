// 랜덤 색상 목록
const colors = ["#4B367C", "#F6E652", "#E758B9", "#A6754E", "#B5ECE1"];

export const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
