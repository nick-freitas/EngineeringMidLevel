/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('role', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		role: {
			type: DataTypes.STRING(45),
			allowNull: false
		}
	}, {
		tableName: 'role'
	});
};
