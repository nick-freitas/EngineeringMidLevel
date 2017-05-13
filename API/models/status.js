/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('status', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		status: {
			type: DataTypes.STRING(45),
			allowNull: false
		}
	}, {
		tableName: 'status'
	});
};
