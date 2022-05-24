import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { PdfServiceContext } from "../../App";

export const Greeting: FC<any> = () => {
  const pdfService = useContext(PdfServiceContext);

  return (
    <PageWrapper>
      <div className="greeting">
        <Typography
          style={{ marginBottom: "15px" }}
          className="greeting__title"
          variant="h4"
          component="h1"
          align="center"
        >
          Договор купли-продажи онлайн
        </Typography>

        <Link to="/onboarding" style={{ textDecoration: "none" }}>
          <Button color="primary" variant="contained">
            Заполнить договор
          </Button>
        </Link>
      </div>
    </PageWrapper>
  );
};
