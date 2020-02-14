/* eslint-disable array-callback-return */
export default (issues, status, priority, tags, timeOrPriority, ASCOrDESC) => {
  const statusFilter = issues.filter(issue => {
    if (status === "") return true;
    return issue.status === status;
  });

  const priorityFilter = statusFilter.filter(issue => {
    if (priority === "") return true;
    return issue.priority === priority;
  });

  const tagsFilter = priorityFilter.filter(issue => {
    if (tags === "") return true;
    return issue.tags.includes(tags);
  });

  if (timeOrPriority === "priority") {
    const sortFilter = tagsFilter.sort((a, b) => {
      if (ASCOrDESC === "ASC") {
        if (a.priority === "low" && b.priority === "normal") return -1;
        if (a.priority === "low" && b.priority === "urgent") return -1;
        if (a.priority === "normal" && b.priority === "urgent") return -1;
        if (a.priority === "normal" && b.priority === "low") return 1;
        if (a.priority === "urgent" && b.priority === "low") return 1;
        if (a.priority === "urgent" && b.priority === "normal") return 1;
      } else {
        if (a.priority === "low" && b.priority === "normal") return 1;
        if (a.priority === "low" && b.priority === "urgent") return 1;
        if (a.priority === "normal" && b.priority === "urgent") return 1;
        if (a.priority === "normal" && b.priority === "low") return -1;
        if (a.priority === "urgent" && b.priority === "low") return -1;
        if (a.priority === "urgent" && b.priority === "normal") return -1;
      }
    });
    return sortFilter;
  } else if (timeOrPriority === "time") {
    const sortFilter = tagsFilter.sort((a, b) => {
      if (ASCOrDESC === "ASC") {
        return new Date(a.created) - new Date(b.created);
      } else {
        return new Date(b.created) - new Date(a.created);
      }
    });
    return sortFilter;
  }

  return tagsFilter;
};
