"use client";

import InputButton from "@/components/button/SubmitButton";
import InputField from "@/components/ui/InputField";
import { Box, Link, Typography, Divider, Checkbox } from "@mui/material";

import Image from "next/image";
import React from "react";

function page() {
  return (
    <Box sx={{ display: "flex", width: "100%", height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          bgcolor: "#172554",
          px: 20,
        }}
      >
        <Image src="/book.png" width={700} height={700} alt="logo" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          gap: 2,
          px: 20,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            width: "100%",
            gap: 1,
            mt: 10,
          }}
        >
          <Image src="/blue.png" width={80} height={80} alt="logo" />
          <Typography variant="h4">Book Rent</Typography>
        </Box>

        <Typography variant="h5" sx={{ mt: 4, width: "100%" }}>
          Signup into Book Rent
        </Typography>
        <Divider sx={{ width: "100%" }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            mt: 4,
            width: "100%",
          }}
        >
          <InputField
            label="Email address"
            value="john@gmail.com"
            type="email"
            helperText=""
            placeholder="email@gmail.com"
          />
          <InputField
            type="password"
            label="Password"
            value="password"
            helperText=""
            placeholder="Password"
          />
          <InputField
            type="password"
            label="Confirm Password"
            value="password"
            helperText=""
            placeholder="Password"
          />
          <InputField
            type="text"
            label="Location"
            value="Addis Ababa"
            helperText=""
            placeholder="Addis Ababa"
          />
          <InputField
            type="phone"
            label="Phone number"
            value="0911675435"
            helperText=""
            placeholder="0911223344"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Checkbox />
          <Typography variant="body2">
            I accept the terms and conditions
          </Typography>
        </Box>
        <InputButton>SIGN IN</InputButton>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account?{" "}
          <Link
            href="/admin/login"
            sx={{ color: "#0ea5e9", textDecoration: "none", ml: 1 }}
          >
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default page;
