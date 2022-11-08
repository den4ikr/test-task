import React from "react";
import { JobListItem } from "../types/Home";
import ratingMobile from "../assets/RatingMobile.png";
import { dateToTimeAgo } from "../helpers/formats";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import colors from "../theme/colors";
import location from "../assets/Location.png";

interface Props {
  data: JobListItem;
  handleRedirectOnDetailsPage(job: JobListItem): void;
}

const JobCardMobile: React.FC<Props> = ({
  data,
  handleRedirectOnDetailsPage,
}: Props) => {
  return (
    // <div className="flex justify-center m-2">
    //   <div className="container mx-w-[1400px] h-[206px] bg-[#EFF0F5] rounded-xl shadow border px-[16px] py-[24px] mb-3">
    //     <div className="flex space-x-4 items-center">
    //       <div className="w-[66px]">
    //         <img
    //           className="w-[66px] h-[66px] rounded-full object-cover"
    //           src={data.pictures[0]}
    //           alt="avatar"
    //         />
    //       </div>
    //       <div className="grow">
    //         <div className="flex justify-between items-center mb-2">
    //           <div>
    //             <img src={ratingMobile} alt="rating-mobile" />
    //           </div>
    //           <div className="text-[#878D9D] text-[14px]">
    //             Posted {dateToTimeAgo(new Date(data.createdAt))}
    //           </div>
    //         </div>
    //         <div>
    //           <div>
    //             <div
    //               className="text-[#3A4562] text-[14px] font-bold mb-2 w-[720px] hover:cursor-pointer max-w-[300px] max-sm:w-[200px]"
    //               onClick={() => handleRedirectOnDetailsPage(data)}
    //             >
    //               {data.title}
    //             </div>
    //             <p className="text-500 text-[16px] text-[#878D9D] max-sm:text-[14px]">
    //               {data.name} • {data.address}
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Card
      sx={{ background: colors.mobileCardBg, mt: 2 }}
      onClick={() => handleRedirectOnDetailsPage(data)}
    >
      <CardContent>
        <Grid container flexWrap="nowrap">
          <Grid item sx={{ width: "100px" }}>
            <Box
              component="img"
              src={data.pictures[0]}
              sx={{ width: "66px", height: "66px", borderRadius: "50%" }}
            />
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Box component="img" src={ratingMobile} />
              </Grid>
              <Grid item>
                <Typography variant="subtitle2">
                  Posted {dateToTimeAgo(new Date(data.createdAt))}
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="column" spacing={1} sx={{ mt: 1 }}>
              <Grid item>
                <Typography variant="h3" sx={{ fontSize: "16px" }}>
                  {data.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" sx={{ fontSize: "14px" }}>
                  {data.name} • {data.address}
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Box component="img" src={location} />
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">Vienna, Austria</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default JobCardMobile;
