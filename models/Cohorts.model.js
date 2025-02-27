
const moongose = require('mongoose');
const Schema = moongose.Schema;

const cohortsSchema = new Schema({
  inProgress: Boolean,
  cohortSlug: String,
  cohortName: String,
    program: String,
    campus: String,
    startDate: Date,
    endDate: Date,
    programManager: String,
    leadTeacher: String,
    totalHours: Number
});
   
const Cohorts = moongose.model('Cohorts', cohortsSchema);

module.exports = Cohorts;