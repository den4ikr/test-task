import { Grid, Typography } from "@mui/material";
import React from "react";

interface Props {
  data: string[];
  bg: string;
  textColor: string;
}

const Panels: React.FC<Props> = ({ data, bg, textColor }: Props) => {
  return (
    // <div className="mt-[10px] flex space-x-2">
    //   {data.map((item) => (
    //     <div
    //       key={item}
    //       className={`w-[222px] h-[49px] bg-[${bg}]/[.60] rounded-[8px] flex justify-center items-center text-[#fff]`}
    //     >
    //       {item}
    //     </div>
    //   ))}
    // </div>
    <Grid container sx={{ gap: "10px" }}>
      {data.map((item) => (
        <Grid
          item
          key={item}
          sx={{
            minWidth: "222px",
            height: "49px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: bg,
            padding: 0,
            paddingLeft: "0px!important",
            paddingTop: "0px!important",
          }}
        >
          <Typography variant="h3" sx={{ color: textColor, fontWeight: 700 }}>
            {item}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Panels;
