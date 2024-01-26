import React, { useEffect, useRef, useState } from "react";
import { Box, Switch, Typography, Card, CardActionArea, CardContent } from "@mui/material";
import { Form } from "@unform/web";
import VTextField from "../forms/index";
import VDropDownSearch from "../dropdown/Dropdown";
import CustomButton from "../button/Button";
import { FormHandles } from "@unform/core";

const Formulary = () => {
  const [countries, setCountries] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [selectedCarType, setSelectedCarType] = useState<string | null>(null);

  const formRef = useRef<FormHandles>(null);

  const carType = [
    {
      id: 1,
      image: "/src/assets/car-sedan.svg",
      type: "Sedan"
    },
    {
      id: 2,
      image: "/src/assets/car-van.svg",
      type: "SUV/Van"
    },
    {
      id: 3,
      image: "/src/assets/car-semi.svg",
      type: "Semi Luxury"
    },
    {
      id: 4,
      image: "/src/assets/car-luxury.svg",
      type: "Luxury Car"
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/countries");
        const data = await response.json();
        setCountries(Object.keys(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCountryChange = (newValue: string | null) => {
    setSelectedCountry(newValue);
    setCities([]);
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleCarTypeClick = (carType: string) => {
    setSelectedCarType(carType);
  };

  const loadCityOptions = async (country: string | null) => {
    return country ? [country] : [];
  };

  const handleSubmit = (data: any) => {
    let formData: any = {
      fullName: data["Full Name"],
      emailAddress: data["Email Address"],
      country: selectedCountry,
      referralCode: data["Referral Code"],
      driveOwnCar: checked,
    };

    if (checked) {
      formData = {
        ...formData,
        city: data["City"],
        carType: selectedCarType,
      };
    }

    console.log(formData);
  };

  return (
    <Box>
      <Form
        placeholder='Digite'
        onSubmit={handleSubmit}
        ref={formRef}
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center"
        }}
      >
        <VTextField name="Full Name" shrink={false} label="Full Name" />
        <VTextField name="Email Address" shrink={false} label="Email Address" />
        <VDropDownSearch name="Country" options={countries} onChange={handleCountryChange} />
        <VTextField name="City" shrink={false} label="City" />
        <VTextField name="Referral Code" shrink={false} label="Referral Code" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            width: "100%"
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              fontFamily: "Roboto",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "26px"
            }}
          >
            I drive my own car
          </Typography>
          <Switch
            checked={checked}
            onChange={handleChange}
            sx={{
              "& .Mui-checked+.MuiSwitch-track": {
                backgroundColor: "rgba(251, 164, 3, 0.20)"
              },
              "& .Mui-checked": {
                color: "var(--detail-color)",
                "& .MuiSwitch-thumb": {
                  backgroundColor: "var(--detail-color)"
                }
              }
            }}
          />
        </Box>
        {checked ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
              gap: "16px"
            }}
          >
            <Typography
              sx={{
                color: "var(--detail-color)",
                fontFamily: "Roboto",
                fontSize: "20px",
                fontWeight: "500",
                lineHeight: "26px"
              }}
            >
              Select your car type
            </Typography>
            <Box sx={{ display: "flex", gap: "2%", width: "620px" }}>
              {carType.map((car) => (
                <CardActionArea
                  key={car.id}
                  onClick={() => handleCarTypeClick(car.type)}
                  sx={{
                    flex: "1 0 0",
                    borderRadius: "4px",
                    border: "1px solid #FFF",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)"
                    }
                  }}
                >
                  <Card
                    sx={{
                      width: "100%",
                      backgroundColor: "var(--background-color)",
                      height: "80px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "5px"
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column"
                      }}
                    >
                      <img src={car.image} alt={car.type} />
                      <CardContent
                        sx={{
                          "&:last-child": {
                            paddingBottom: "0px"
                          },
                          padding: "0",
                          color: selectedCarType === car.type ? "var(--detail-color)" : "#FFF",
                          textAlign: "center",
                          fontFamily: "Roboto",
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "26px"
                        }}
                      >
                        {car.type}
                      </CardContent>
                    </Box>
                  </Card>
                </CardActionArea>
              ))}
            </Box>
          </Box>
        ) : null}
        <Box sx={{ width: "100%", justifyContent: "flex-start" }}>
          <CustomButton label="Submit" width="max-content" padding="10px 24px" onSubmit={() => formRef.current?.submitForm()} />
        </Box>
      </Form>
    </Box>
  );
};

export default Formulary;
