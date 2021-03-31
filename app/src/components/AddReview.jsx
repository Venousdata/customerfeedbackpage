// this component is just a form allowing users to write and submit reviews on products

import {
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@material-ui/core";
import React, { useState } from "react";
import { validateProductReviewForm } from "../helpers/helpers";

const AddReview = ({ product, open, handleClose, handleSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({});

  const form = {
    name,
    email,
    rating,
    comment,
  };

  const validateAndSubmit = async (form) => {
    const errors = validateProductReviewForm(form);
    // if any errors exist --check all props of error obj
    if (errors.name || errors.email || errors.rating || errors.comment) {
      setErrors(errors);
      return;
    }

    // if validation passes, post form object to db (reviews table)
    await handleSubmit(form);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a review for {product?.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the fields below to submit a review!
          </DialogContentText>
          <TextField
            autoFocus
            error={errors.name ? true : false}
            margin="dense"
            label="Name"
            value={form.name}
            type="text"
            fullWidth
            onChange={(e) => {
              setName(e.target.value);
            }}
            helperText={errors.name}
          />
          <TextField
            autoFocus
            error={errors.email ? true : false}
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            helperText={errors.email}
          />
          <TextField
            autoFocus
            error={errors.rating ? true : false}
            margin="dense"
            label="Rating"
            type="number"
            InputProps={{ inputProps: { min: "0", max: "5" } }}
            fullWidth
            defaultValue={0}
            onChange={(e) => {
              setRating(e.target.value);
            }}
            helperText={errors.rating}
          />
          <TextField
            autoFocus
            error={errors.comment ? true : false}
            margin="dense"
            label="Comment"
            multiline
            rows={5}
            fullWidth
            onChange={(e) => {
              setComment(e.target.value);
            }}
            helperText={errors.comment}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => validateAndSubmit(form)}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddReview;
