/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('client', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: false
		}
	}, {
		tableName: 'client'
	});
};
