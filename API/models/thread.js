/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('thread', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		feature: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: 'feature',
				key: 'id'
			}
		}
	}, {
		tableName: 'thread'
	});
};
