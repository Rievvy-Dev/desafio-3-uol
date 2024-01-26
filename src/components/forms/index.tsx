import { TextField, TextFieldProps, IconButton, InputAdornment } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useField } from "@unform/core";
import { useEffect, useState } from "react";

type TVTextFieldProps = TextFieldProps & {
  name: string;
};

const VTextField: React.FC<TVTextFieldProps> = ({ name, ...rest }) => {
  const { fieldName, registerField, defaultValue, error,  } = useField(name);
  const [value, setValue] = useState(defaultValue || '');

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue(newValue),
    });
  }, [registerField, fieldName, value]);

  const handleClear = () => {
    setValue('');
  };

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
        sx: {
          fontFamily: "Roboto",
          top: "5px",
          fontSize: "16",
          color: "#FFFFFF", 
          fontWeight: "400",
          lineHeight: "12px",
          letterSpacing: "0.15px",
          "&.Mui-focused": {
            color: "var(--detail-color)", 
          },
        },
      }}
      {...rest}
      error={!!error}
      helperText={error}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        alignSelf: "stretch",
        borderRadius: "4px",
        "& .MuiOutlinedInput-root": {
          width: "100%",
          "& fieldset": {
            border: "1px solid var(--Other-Outline-Border, rgba(255, 255, 255, 0.23))",
          },
          "&:hover fieldset": {
            border: "1px solid var(--Other-Outline-Border, rgba(255, 255, 255, 0.80))",
          },
          "&:focus-within fieldset": {
            border: `1px solid var(--Other-Outline-Border, var(--detail-color))`, 
          },
          "& input": {
            color: "#FFFFFF",
          },
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {value && (
              <IconButton onClick={handleClear} style={{ padding: 8 }} color="inherit">
                <ClearIcon style={{ color: "#FFFFFF" }} />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default VTextField;
