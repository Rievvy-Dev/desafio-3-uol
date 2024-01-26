import React, { useEffect, useState } from 'react';
import {
  Select,
  InputBase,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
  InputAdornment,
} from '@mui/material';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useField } from '@unform/core';

interface VDropDownSearchProps {
    name: string;
    options: string[];
    onChange: (newValue: string | null) => void;
    disabled?: boolean;
    loadOptions?: (country: string | null) => Promise<string[]>;
  }

const BootstrapInput: React.FC<any> = (props) => {
  return (
    <InputBase
      {...props}
      sx={{
        borderRadius: '4px',
        width: '100%',
        position: 'relative',
        color: '#FFF',
        backgroundColor: 'var(--formulary-color)',
        border: '1px solid var(--Other-Outline-Border, rgba(255, 255, 255, 0.23))',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: 'border-color 0.2s',
        '&:focus': {
          borderRadius: '4px',
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
  disabled = false,
  loadOptions,
}) => {
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [value, setValue] = useState<string | null>(defaultValue || null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [cities, setCities] = useState<string[]>([]);

  const handleValueChange = (newValue: string | null) => {
    setValue(newValue);
    onChange(newValue);
  };

  const handleCountryChange = async (newValue: string | null) => {
    setSelectedCountry(newValue);

    if (loadOptions) {
      try {
        const data = await loadOptions(newValue);
        setCities(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching city data:', error);
        setCities([]);
      }
    }
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue(newValue),
    });
  }, [registerField, fieldName, value]);

  return (
    <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
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
        disabled={disabled}
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
