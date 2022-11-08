import React from "react";
import { JobListItem } from "../types/Home";
import { dateToTimeAgo } from "../helpers/formats";
import location from "../assets/Location.png";
import rating from "../assets/Rating.png";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import addToFavorite from "../assets/Rectangle 31.png";

interface Props {
  data: JobListItem;
  handleRedirectOnDetailsPage(job: JobListItem): void;
}

const JobCard: React.FC<Props> = ({
  data,
  handleRedirectOnDetailsPage,
}: Props) => {
  const breakpoint = useMediaQuery("(max-width:1080px)");

  return (
    // <div className="flex justify-center">
    //   <div className="container mx-w-[1400px] h-[164px] bg-white-200 rounded-xl shadow border px-[16px] py-[24px] mb-3">
    //     <div className="flex justify-between h-[100%] flex-wrap">
    //       <div>
    //         <div className="flex items-start space-x-4 ">
    //           <div>
    //             <img
    //               className="w-[85px] h-[85px] rounded-full"
    //               src={data.pictures[0]}
    //               alt="avatar"
    //             />
    //           </div>
    //           <div>
    //             <p
    //               className="text-3xl text-[#3A4562] text-xl font-bold mb-2 w-[720px] hover:cursor-pointer"
    //               onClick={() => handleRedirectOnDetailsPage(data)}
    //             >
    //               {data.title}
    //             </p>
    //             <p className="text-500 text-md text-[#878D9D]">
    //               {data.name} • {data.address}
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex space-x-7 lg: mt-4 ">
    //         <div className="flex items-center">
    //           <img src={rating} alt="rating" />
    //         </div>
    //         <div className="flex flex-col justify-between items-end lg:flex-row lg:space-x-4 md:flex-nowrap md:flex-row md:space-x-4 ">
    //           <div>
    //             <img src={icon} alt="add-to-favorite-icon" />
    //           </div>
    //           <div className="text-[#878D9D] text-[14px]">
    //             Posted {dateToTimeAgo(new Date(data.createdAt))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: "100%", marginTop: "10px", minHeight: "164px" }}>
        <CardContent>
          <Grid
            container
            justifyContent="space-between"
            alignItems={breakpoint ? "flex-start" : "center"}
            direction={breakpoint ? "column" : "row"}
            sx={{ height: "100%" }}
          >
            <Grid item>
              <Grid
                container
                spacing={2}
                flexWrap="nowrap"
                justifyContent="flex-start"
              >
                <Grid item sx={{ width: "100px" }}>
                  <Box
                    component="img"
                    sx={{ width: "85px", height: " 85px", borderRadius: "50%" }}
                    src={data.pictures[0]}
                  />
                </Grid>
                <Grid item xs>
                  <Grid
                    container
                    direction="column"
                    spacing={1}
                    alignContent="flex-start"
                    sx={{ maxWidth: "712px" }}
                  >
                    <Grid
                      item
                      onClick={() => handleRedirectOnDetailsPage(data)}
                    >
                      <Typography
                        variant="h2"
                        sx={{
                          whiteSpace: "normal",
                          "&:hover": { cursor: "pointer" },
                        }}
                      >
                        {data.title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">
                        {data.name} • {data.address}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid container spacing={1} alignItems="center">
                        <Grid item>
                          <Box component="img" src={location} />
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1">
                            Vienna, Austria
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ mt: breakpoint ? 2 : 0 }}>
              <Grid container alignItems="center" spacing={breakpoint ? 2 : 0}>
                <Grid item>
                  <Box component="img" src={rating} />
                </Grid>
                <Grid item sx={{ height: breakpoint ? "auto" : "120px" }}>
                  <Grid
                    container
                    direction={breakpoint ? "row" : "column"}
                    justifyContent="space-between"
                    alignItems={breakpoint ? "center" : "flex-end"}
                    spacing={breakpoint ? 2 : 0}
                    sx={{ height: "100%" }}
                  >
                    <Grid item>
                      <Box component="img" src={addToFavorite} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">
                        Posted {dateToTimeAgo(new Date(data.createdAt))}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default JobCard;
