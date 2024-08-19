import React from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useContributeProjectMutation } from "../../../redux/apis/clientsApi";

const CustomProgressBar = styled("div")(({ progress }) => ({
  position: "relative",
  height: 20,
  borderRadius: 10,
  backgroundColor: "#555",
  overflow: "hidden",
  width: "100%",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: `${progress}%`,
    height: "100%",
    backgroundColor: "#ff9800",
    transition: "width 0.3s ease-in-out",
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1, 3),
  borderRadius: "20px",
  fontSize: "1rem",
  backgroundColor: "#FF7F00",
  alignItems: "center",
  color: "#000",
}));

const ProjectDetails = ({ project }) => {
  const currentAmount = project?.allocatedAmount;
  const targetAmount = project?.totalAmount;
  const progress = (currentAmount / targetAmount) * 100;
  const isPending = project?.status === "pending";
  const user = useSelector((state) => state?.user?.user);
  const [contributeProject] = useContributeProjectMutation();

  const handleToken = async () => {
    try {
      const contributionAmount = localStorage.getItem("contribution_amount");
      const contributionData = {
        amount: contributionAmount,
        user: user.id,
      };
      await contributeProject({ id: project.id, data: contributionData });
      console.log('Contribution successful');
      alert('Thank you for your contribution!');
    } catch (error) {
      console.error('Contribution failed', error);
      alert('Contribution failed. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        height: 500,
        margin: "auto",
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#f5f5f5",
        color: "#000",
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        PROJECT DETAILS
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            display: "inline-block",
            padding: "5px 5px",
            backgroundColor: isPending ? "#FEC879" : "#C3E886",
            color: "#000",
            borderRadius: "20px",
            marginRight: "5px",
          }}
        >
          {isPending ? "NEEDS FUNDING" : "ACHIEVED"}
        </Typography>
      </Box>
      <Divider />
      <Typography variant="body2" align="center" gutterBottom p={5}>
        TOTAL FUNDS COLLECTED:{" "}
        <span style={{ color: "#f0960f" }}>$ {currentAmount}</span> / ${" "}
        {targetAmount}
      </Typography>
      <Box sx={{ position: "relative", marginBottom: 2, px: 8 }}>
        <CustomProgressBar progress={progress} />
      </Box>
      <Typography variant="h6" align="center" gutterBottom>
        BUDGET: US ${targetAmount}
      </Typography>
      <Typography
        variant="body2"
        align="center"
        color="primary"
        gutterBottom
        p={2}
      >
        VIEW PROJECT BUDGET BREAKDOWN
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {isPending && user && user.role !== "admin" && (
          <StripeCheckout
            stripeKey='pk_test_51NDWMnDnOnVRIDi92NbgY9ebRx7zyZtSdTjRGOdGjv9ICqwK3zQg3VpKAKpUyP071p7DPtfYH0v5naP6iPxRKI1w00j76ULrXE'
            token={handleToken}
            amount={localStorage.getItem("contribution_amount") * 100} // Stripe expects the amount in cents
            name="Contribute to Project"
            currency="USD"
          >
            <CustomButton variant="contained">
              CONTRIBUTE TO THIS PROJECT →
            </CustomButton>
          </StripeCheckout>
        )}
      </Box>
      <Typography variant="caption" align="center" display="block" mx={10}>
        * 10% of all contributions will be allocated to Arstrate-Archeives to
        support museums and preserve artifacts.
      </Typography>
    </Box>
  );
};

export default ProjectDetails;
