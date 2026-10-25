const withStatus = students =>
  students.map(student => ({
    ...student,
    status: student.grade >= 56 ? "pass" : "fail",
  }));

export default withStatus;
