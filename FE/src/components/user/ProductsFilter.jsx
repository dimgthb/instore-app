import { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Button,
  FormLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  autocompleteClasses,
  Typography,
  TextField,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";
import axios from "axios";

export default function ProductsFilter () {
    return (
        <Box
            sx={{
                width: 500,
                height: autocompleteClasses,
                backgroundColor: 'rgb(245,251,253)',
                padding:3,
                boxShadow:3,
            }}
        >
            <Typography variant="h5" marginBottom="10px">Filter Products</Typography>
            <hr color="green"/>
            <TextField fullWidth margin="dense" label="Search For Name" variant="outlined"/>
            <FormControl>
                <FormLabel>Category</FormLabel>
                <RadioGroup
                    defaultValue="all"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="all" control={<Radio />} label="All" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                </RadioGroup>
            </FormControl>
            <FormControl fullWidth>
                <FormLabel>Sort by</FormLabel>
                <Select
                    // id="demo-simple-select"
                    // value={age}
                    label="Sort Product"
                    defaultValue="latest"
                    // onChange={handleChange}
                >
                    <MenuItem value="latest">Latest</MenuItem>
                    <MenuItem value="high price">Highest Price</MenuItem>
                    <MenuItem value="low price">Lowest Price</MenuItem>
                    <MenuItem value="best seller">Best Seller</MenuItem>
                </Select>
            </FormControl>  
        </Box>
    )
}