const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const {
    ARRAY,
    STRING,
    INTEGER,
    TEXT,
    JSONB,
    DATE,
    BOOLEAN,
  } = DataTypes;

  const book = sequelize.define('book', {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    type: STRING,
    title: TEXT,
    synopsis: TEXT,
    language: STRING,
    pages: INTEGER,
    publication_date: DATE,
    publishers: ARRAY(JSONB),
    tags: ARRAY(JSONB),
    characters: ARRAY(JSONB),
    artists: ARRAY(JSONB),
    authors: ARRAY(JSONB),
  }, { 
      freezeTableName: true, 
      timestamps: false,
      classMethods: {
        associate() {
          book.belongsToMany(sequelize.models.tag, 
            { through: 'book_by_tag', 
              freezeTableName: true,
              timestamps: false, 
              foreignKey: 'book_id', 
            }
          );
          book.belongsToMany(sequelize.models.publisher, 
            { through: 'book_by_publisher', 
              freezeTableName: true,
              timestamps: false, 
              foreignKey: 'book_id', 
            } 
          );
        }
      }
     })

  return book;
}