import {
  Avatar,
  Divider,
  Grid2,
  InputAdornment,
  TextField,
} from "@mui/material";
import { CiSearch } from "react-icons/ci";

export default function Home() {
  return (
    <Grid2>
      <Grid2
        container
        marginBottom={2}
        alignItems={"center"}
        display={"flex"}
        flexDirection={"row"}
        boxSizing={"border-box"}
        size={{ lg: 12 }}
        paddingLeft={5}
        paddingRight={5}
        paddingTop={2}
        sx={{
          justifyContent: "space-evenly",
        }}
      >
        <Grid2 size={{ lg: 2, xs: 10, sm: 10 }}>
          <div>BrandName</div>
        </Grid2>
        <Grid2
          size={{ lg: 8 }}
          sx={{
            display: { xs: "none", lg: "block" },
          }}
        >
          <TextField
            size={"small"}
            style={{ width: 400 }}
            placeholder="what are you looking for?"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CiSearch />
                </InputAdornment>
              ),
            }}
          />
        </Grid2>

        <Grid2
          size={{ lg: 2 }}
          flexDirection={"row"}
          display={"flex"}
          alignItems={"center"}
          columnGap={5}
        >
          <Avatar sx={{ xs: 2, sm: 2 }} />
          <Grid2
            sx={{
              display: { xs: "none", lg: "block" },
            }}
          >
            John Abraham pa
          </Grid2>
        </Grid2>
      </Grid2>
      <Divider />
    </Grid2>
  );
}
