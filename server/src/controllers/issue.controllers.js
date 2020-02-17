import Issue from "../models/issue.model";

export const getIssues = async (req, res) => {
  const issues = await Issue.find();
  return res.status(200).json({ issues: issues });
};

export const createIssue = async (req, res) => {
  const newIssue = await new Issue(req.body).save();
  return res.status(200).json({ issue: newIssue });
};

export const getIssue = async (req, res) => {
  const { issueId } = req.params;
  const issue = await Issue.findById(issueId);
  return res.status(200).json({ issue });
};

export const deleteIssue = async (req, res) => {
  const { issueId } = req.params;
  const issue = await Issue.remove({ _id: issueId });
  return res.status(200).json(issueId);
};

export const updateIssue = async (req, res) => {
  const { issueId } = req.params;
  const data = {
    ...req.body,
    updates: [
      { update: req.body.newUpdate, date: new Date() },
      ...req.body.updates
    ]
  };
  const issue = await Issue.findByIdAndUpdate(issueId, data);
  return res.status(200).json({ issue });
};
