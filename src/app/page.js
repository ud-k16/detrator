import {
  Avatar,
  Divider,
  Grid2,
  InputAdornment,
  TextField,
  Input,
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
          <Input
            size={"small"}
            style={{
              width: 400,
              borderStyle: "solid",
              borderWidth: 1,
              paddingLeft: 5,
              paddingRight: 5,
            }}
            placeholder="what are you looking for?"
            endAdornment={<CiSearch />}
            disableUnderline={true}
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
      <Grid2 flexDirection={"row"} display={"flex"} container columnSpacing={1}>
        <Grid2
          offset={{ lg: 2, sm: 0, xs: 0, md: 1 }}
          size={{ lg: 6, sm: 12, xs: 12 }}
        >
          <div
            style={{
              height: 700,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "blue",
            }}
          ></div>
        </Grid2>
        <Grid2 size={{ lg: 3 }}>
          <div
            style={{
              height: 650,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "blue",
            }}
          ></div>
        </Grid2>
      </Grid2>
    </Grid2>
  );
}
