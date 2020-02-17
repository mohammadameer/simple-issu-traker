import express from "express";

import {
  getIssues,
  createIssue,
  getIssue,
  deleteIssue,
  updateIssue
} from "../controllers/issue.controllers";

const router = express.Router();

router
  .route(`/issues`)
  .get(getIssues)
  .post(createIssue);

router
  .route(`/issues/:issueId`)
  .get(getIssue)
  .delete(deleteIssue)
  .put(updateIssue);

export default router;
