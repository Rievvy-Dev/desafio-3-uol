import React, { useEffect, useState, useCallback } from 'react';
import { useField } from '@unform/core';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import IconButton from '@mui/material/IconButton';
import { InputAdornment } from '@mui/material';

interface VDropDownSearchProps {
  name: string;
  options: string[];
  onChange: (newValue: string | null) => void;
}

const BootstrapInput: React.FC<any> = (props) => {
  return (
    <InputBase
      {...props}
      sx={{
        borderRadius: "4px",
        width:"100%",
        position: 'relative',
        color:"#FFF",
        backgroundColor: 'var(--formulary-color)',
        border: '1px solid var(--Other-Outline-Border, rgba(255, 255, 255, 0.23))',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: 'border-color 0.2s',
        '&:focus': {
          borderRadius: "4px",
          borderColor: 'var(--detail-color)',
          boxShadow: '0 0 0 0.2rem rgba(251, 164, 3, 0.25)',
        },
        '&.Mui-error': {
          borderColor: 'var(--error-color)',
        },
      }}
    />
  );
};

const VDropDownSearch: React.FC<VDropDownSearchProps> = ({
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
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue(newValue),
    });
  }, [registerField, fieldName, value]);

  return (
    <FormControl sx={{ m: 1, width:"100%" }} variant="standard">
      <InputLabel
        htmlFor={`dropdown-search-${fieldName}`}
        sx={{
          fontFamily: 'Roboto',
          top: '5px',
          fontSize: '16px',
          color: value ? '#FFFFFF' : '#666666',
          fontWeight: '400',
          lineHeight: '12px',
          letterSpacing: '0.15px',
          '&.Mui-focused': {
            color: 'var(--detail-color)',
            display: 'none',
          },
        }}
      >
        {value ? '' : 'Select'}
      </InputLabel>
      <Select
        id={`dropdown-search-${fieldName}`}
        value={value || ''}
        onChange={(event) => handleValueChange(event.target.value as string)}
        input={<BootstrapInput />}
        renderValue={(selected) => selected}
        IconComponent={() => (
          <InputAdornment position="end">
            <IconButton
              name="DropDown"
              style={{ padding: 8 }}
              color="inherit"
            >
              <ArrowDropDownOutlinedIcon style={{ color: '#FFFFFF' }} />
            </IconButton>
          </InputAdornment>
        )}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      {!!error && (
        <p
          style={{
            color: 'var(--error-color)',
            fontSize: '12px',
            marginTop: '4px',
          }}
        >
          {error}
        </p>
      )}
    </FormControl>
  );
};

export default VDropDownSearch;
