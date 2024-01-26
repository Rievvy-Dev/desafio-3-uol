import React, { useEffect, useState, useCallback } from "react";
import Autocomplete, {
  AutocompleteRenderInputParams,
} from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { useField } from "@unform/core";

type TVDropDownSearchProps = {
  name: string;
  options: string[];
  onChange: (newValue: string | null) => void;
  maxItems?: number;
};

const VDropDownSearch: React.FC<TVDropDownSearchProps> = ({
  name,
  options,
  onChange,
}) => {
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [value, setValue] = useState<string | null>(defaultValue || null);

  const handleValueChange = useCallback(
    (newValue: string | null) => {
      setValue(newValue);
      onChange(newValue);
    },
    [setValue, onChange]
  );

  useEffect(() => {
    console.log("Options:", options);
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue(newValue),
    });
  }, [registerField, fieldName, value, options]);

  return (
    <Autocomplete
      options={options || ['AAAAAAA', 'AAAAAAAA']}
      value={value}
      onChange={(_, newValue) => handleValueChange(newValue)}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField
          {...params}
          label=""
          error={!!error}
          helperText={error}
          autoComplete="off"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            alignSelf: "stretch",
            borderRadius: "4px",
            "& .MuiOutlinedInput-root": {
              width: "100%",
              "& fieldset": {
                border:
                  "1px solid var(--Other-Outline-Border, rgba(255, 255, 255, 0.23))",
              },
              "&:hover fieldset": {
                border:
                  "1px solid var(--Other-Outline-Border, rgba(255, 255, 255, 0.80))",
              },
              "&:focus-within fieldset": {
                border:
                  "1px solid var(--Other-Outline-Border, var(--detail-color))",
              },
              "& input": {
                color: "#FFFFFF",
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton name="DropDown" style={{ padding: 8 }} color="inherit">
                  <ArrowDropDownOutlinedIcon style={{ color: "#FFFFFF" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
      renderOption={(props, option, state) =>
        state.index !== null ? (
          <li {...props}>{option}</li>
        ) : null
      }
    />
  );
};

export default VDropDownSearch;
