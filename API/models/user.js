/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ssoId: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		phoneNumber: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		email: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'user'
	});
};
