const SearchIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path
          fill="orangered"
          d="M19 11a8 8 0 1 1-16 0a8 8 0 0 1 16 0"
          opacity={0.2}
        ></path>
        <path
          stroke="orangered"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
        ></path>
      </g>
    </svg>
  );
};

export default SearchIcon;
