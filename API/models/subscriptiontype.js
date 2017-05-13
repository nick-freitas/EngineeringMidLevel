/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('subscriptiontype', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		type: {
			type: DataTypes.STRING(45),
			allowNull: false
		}
	}, {
		tableName: 'subscriptiontype'
	});
};
