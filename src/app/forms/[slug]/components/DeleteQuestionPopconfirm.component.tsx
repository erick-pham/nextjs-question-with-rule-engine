"use client";

import { useState } from "react";
import { deleteQuestion } from "../../actions";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import React from "react";
import toast from "react-hot-toast";
import LoadingWrapper from "@/components/LoadingWrapper";

type DeleteQuestionPopconfirmProp = {
  questionId: string;
  questionnaireId: string;
};

const DeleteQuestionPopconfirm = ({
  questionId,
  questionnaireId,
}: DeleteQuestionPopconfirmProp): React.ReactElement => {
  const [openPopconfirm, setOpenPopconfirm] = useState(false);
  const [isLoadingDeleteForm, setLoadingDeleteForm] = useState(false);

  const handleClose = (): void => {
    setOpenPopconfirm(false);
  };

  const handleOk = (): void => {
    new Promise((): void => {
      (async (): Promise<void> => {
        try {
          setLoadingDeleteForm(true);
          const deleteFormRes = await deleteQuestion(
            questionnaireId,
            questionId,
          );
          toast.success(deleteFormRes.message);
          setOpenPopconfirm(false);
        } catch (error) {
          console.log(error);
        } finally {
          setLoadingDeleteForm(false);
        }
      })();
    });
  };

  return (
    <React.Fragment>
      <IconButton
        color="error"
        onClick={() => {
          setOpenPopconfirm(true);
        }}
      >
        <DeleteOutlined />
      </IconButton>

      <Dialog open={openPopconfirm} onClose={handleClose}>
        <LoadingWrapper loading={isLoadingDeleteForm}>
          <DialogTitle>Are you sure to delete this item?</DialogTitle>
          <DialogActions>
            <Button onClick={handleClose} variant="contained" color="info">
              Cancel
            </Button>
            <Button
              onClick={handleOk}
              autoFocus
              variant="contained"
              color="error"
            >
              Agree
            </Button>
          </DialogActions>
        </LoadingWrapper>
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteQuestionPopconfirm;
