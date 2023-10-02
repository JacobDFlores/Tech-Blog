const User = require('./User');
const Project = require('./Project');
const Comments = require('./Comments')

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.hasMany(Comments, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE'
});

Comments.belongsTo(User, {
  foreignKey: 'user_id'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project, Comments };
