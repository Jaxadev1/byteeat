import { Box, Typography, Button } from "@mui/material";

export const Banner = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#333", // Material-UI primary rang (ko'k)
          color: "#FFD700",
          textAlign: "center",
          padding: "40px 20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Hush Kelibsiz!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Bizning veb-saytimizda eng yaxshi mahsulotlarni toping!
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ marginTop: "20px" }}
        >
          Batafsil Ma'lumot
        </Button>
      </Box>
    </div>
  );
};
